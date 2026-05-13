#!/usr/bin/env bash
# Install local git hooks. Run this once after a fresh clone.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
HOOKS_DIR="$REPO_ROOT/.git/hooks"

install_hook() {
  local name="$1"
  local src="$REPO_ROOT/scripts/${name}-hook.sh"
  local dest="$HOOKS_DIR/$name"

  if [[ ! -f "$src" ]]; then
    echo "install-hooks: source not found: $src"
    return 1
  fi

  cp "$src" "$dest"
  chmod +x "$dest"
  echo "install-hooks: installed $name"
}

# Write the pre-commit hook inline so this script is self-contained.
cat > "$HOOKS_DIR/pre-commit" << 'HOOK'
#!/usr/bin/env bash
# Run prose check on staged content files before each commit.
REPO_ROOT="$(git rev-parse --show-toplevel)"

mapfile -t staged < <(git diff --cached --name-only --diff-filter=ACM | \
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
