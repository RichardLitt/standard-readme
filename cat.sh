#! /bin/bash

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Cat the spec.md file from the script's directory
cat "${SCRIPT_DIR}/spec.md"
