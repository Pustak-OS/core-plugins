#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   CORE_DIR=/path/to/pustak-core ./deploy-plugin.sh
# or, if CORE_DIR is not set, it defaults to ../../pustak-core
CORE_DIR="${CORE_DIR:-$(dirname "$(pwd)")/../../pustak-core}"
PLUGINS_DIR="$CORE_DIR/plugins"

# Ensure core plugins directory exists
if [[ ! -d "$PLUGINS_DIR" ]]; then
  echo "Core plugins directory not found at: $PLUGINS_DIR"
  exit 1
fi

# Determine plugin name and paths
PLUGIN_ROOT="$(pwd)"
PLUGIN_NAME="$(basename "$PLUGIN_ROOT")"
TARGET_DIR="$PLUGINS_DIR/$PLUGIN_NAME"

echo "Deploying plugin '$PLUGIN_NAME' to core at '$TARGET_DIR'"

# Remove any existing installation
if [[ -d "$TARGET_DIR" ]]; then
  echo "→ Removing existing plugin directory"
  rm -rf "$TARGET_DIR"
fi

# Recreate plugin directory structure
echo "→ Creating target directories"
mkdir -p "$TARGET_DIR/dist/server" "$TARGET_DIR/dist/client"

# Copy manifest
echo "→ Copying plugin.json"
cp "$PLUGIN_ROOT/plugin.json" "$TARGET_DIR/"

# Copy built bundles
echo "→ Copying dist/server → $TARGET_DIR/dist/server"
cp -r "$PLUGIN_ROOT/dist/server/"* "$TARGET_DIR/dist/server/"

echo "→ Copying dist/client → $TARGET_DIR/dist/client"
cp -r "$PLUGIN_ROOT/dist/client/"* "$TARGET_DIR/dist/client/"

echo "✅ Plugin '$PLUGIN_NAME' deployed successfully!"
