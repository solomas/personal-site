#!/usr/bin/env bash
set -euo pipefail

# Prose checker for personal-site.
# Usage: check-prose.sh [file ...]  — checks given files.
#        check-prose.sh             — scans src/content/** and src/pages/**.
#
# Uses only BSD grep flags (-iE, -F) so it works in non-interactive shells
# on macOS without relying on ugrep or GNU grep being on PATH.

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Files that are exempt from prose checking (they define the rules).
SKIP_FILES=("CLAUDE.md")

BANNED_WORDS=(
  "utilise"
  "utilize"
  "demonstrate"
  "moreover"
  "furthermore"
  "leverage"
  "delve"
  "seamless"
  "robust"
  "comprehensive"
)

# Multi-word phrases checked as literal strings (case-insensitive via -i).
BANNED_PHRASES=(
  "as such"
  "it is worth noting"
  "it is important to note"
  "in conclusion"
  "in summary"
)

# Collect target files. Use while+read instead of mapfile for bash 3 compat.
files=()
if [[ $# -gt 0 ]]; then
  files=("$@")
else
  while IFS= read -r f; do
    files+=("$f")
  done < <(find "$REPO_ROOT/src/content" "$REPO_ROOT/src/pages" \
    -type f \( -name "*.md" -o -name "*.mdx" -o -name "*.astro" -o -name "*.html" \) \
    2>/dev/null || true)
fi

if [[ ${#files[@]} -eq 0 ]]; then
  echo "check-prose: no files to check"
  exit 0
fi

# Filter out exempt files.
filtered=()
for f in "${files[@]}"; do
  basename_f="$(basename "$f")"
  skip=0
  for exempt in "${SKIP_FILES[@]}"; do
    if [[ "$basename_f" == "$exempt" ]]; then
      skip=1
      break
    fi
  done
  [[ $skip -eq 0 ]] && filtered+=("$f")
done
files=("${filtered[@]+"${filtered[@]}"}")

if [[ ${#files[@]} -eq 0 ]]; then
  echo "check-prose: no files to check after exemptions"
  exit 0
fi

FOUND=0

flag_match() {
  local file="$1"
  local line="$2"
  local label="$3"
  echo "${file}:${line}  [${label}]"
  FOUND=1
}

# Whole-word banned words, case-insensitive.
for word in "${BANNED_WORDS[@]}"; do
  for f in "${files[@]}"; do
    [[ -f "$f" ]] || continue
    while IFS= read -r hit; do
      flag_match "$f" "$hit" "banned word: $word"
    done < <(grep -inE "\b${word}\b" "$f" 2>/dev/null || true)
  done
done

# Banned phrases, case-insensitive literal match.
for phrase in "${BANNED_PHRASES[@]}"; do
  for f in "${files[@]}"; do
    [[ -f "$f" ]] || continue
    while IFS= read -r hit; do
      flag_match "$f" "$hit" "banned phrase: $phrase"
    done < <(grep -in "$phrase" "$f" 2>/dev/null || true)
  done
done

# En dash (U+2013) and em dash (U+2014) — literal byte sequences.
EN_DASH=$'\xe2\x80\x93'
EM_DASH=$'\xe2\x80\x94'

for f in "${files[@]}"; do
  [[ -f "$f" ]] || continue
  while IFS= read -r hit; do
    flag_match "$f" "$hit" "en dash U+2013"
  done < <(grep -nF "$EN_DASH" "$f" 2>/dev/null || true)
  while IFS= read -r hit; do
    flag_match "$f" "$hit" "em dash U+2014"
  done < <(grep -nF "$EM_DASH" "$f" 2>/dev/null || true)
done

# Semicolons in .md and .mdx — flag for review (code blocks may contain them).
for f in "${files[@]}"; do
  [[ -f "$f" ]] || continue
  case "$f" in
    *.md|*.mdx)
      while IFS= read -r hit; do
        flag_match "$f" "$hit" "semicolon — review"
      done < <(grep -nF ";" "$f" 2>/dev/null || true)
      ;;
  esac
done

if [[ $FOUND -eq 1 ]]; then
  echo ""
  echo "check-prose: issues found. Fix before committing."
  exit 1
fi

echo "check-prose: clean"
exit 0
