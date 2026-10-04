#!/usr/bin/env bash
set -euo pipefail

# Determine repository root
REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$REPO_DIR"

# 1. Sync Obsidian Home dashboard to Quartz entrypoint
if [ -f "wiki/Home.md" ]; then
  echo "Syncing wiki/Home.md -> content/index.md..."
  cp "wiki/Home.md" "content/index.md"
fi

# 2. Stage changes
git add .

# Check if there are changes to commit
if git diff-index --quiet HEAD --; then
  echo "No changes to commit. Working tree is clean."
else
  COMMIT_MSG="${1:-feat(wiki): update knowledge graph and dashboard}"
  echo "Committing: $COMMIT_MSG"
  git commit -m "$COMMIT_MSG"
fi

# 3. Push to GitHub (triggers GitHub Actions Quartz build)
echo "Pushing to origin main..."
git push origin main

echo "Successfully pushed! GitHub Actions is now deploying your Quartz site."
