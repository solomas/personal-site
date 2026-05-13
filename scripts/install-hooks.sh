#!/usr/bin/env bash
# Install local git hooks. Run this once after a fresh clone.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
HOOKS_DIR="$REPO_ROOT/.git/hooks"

cat > "$HOOKS_DIR/pre-commit" << 'HOOK'
#!/usr/bin/env bash
# Run prose check on staged content files before each commit.
REPO_ROOT="$(git rev-parse --show-toplevel)"

# Bash 3 compat: no mapfile.
staged=()
while IFS= read -r f; do
  staged+=("$f")
done < <(git diff --cached --name-only --diff-filter=ACM | \
  grep -E '\.(md|mdx|astro|html)$' || true)

if [[ ${#staged[@]} -eq 0 ]]; then
  exit 0
fi

abs_staged=()
for f in "${staged[@]}"; do
  abs_staged+=("$REPO_ROOT/$f")
done

exec bash "$REPO_ROOT/scripts/check-prose.sh" "${abs_staged[@]}"
HOOK

chmod +x "$HOOKS_DIR/pre-commit"
echo "install-hooks: pre-commit hook installed at $HOOKS_DIR/pre-commit"
