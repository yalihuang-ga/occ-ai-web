#!/usr/bin/env bash
#
# Convert virtual-human MP4 videos to WebM (VP9) for web delivery.
# Usage: ./scripts/convert-vh-video.sh <input.mp4> [output.webm]
#
# Requirements: ffmpeg with libvpx-vp9 support
#   brew install ffmpeg   (macOS)

set -euo pipefail

INPUT="${1:?Usage: $0 <input.mp4> [output.webm]}"
OUTPUT="${2:-${INPUT%.mp4}.webm}"

if ! command -v ffmpeg &>/dev/null; then
  echo "Error: ffmpeg not found. Install with: brew install ffmpeg" >&2
  exit 1
fi

echo "Converting: $INPUT → $OUTPUT"
ffmpeg -y -i "$INPUT" \
  -c:v libvpx-vp9 \
  -b:v 1M \
  -crf 30 \
  -an \
  -pix_fmt yuva420p \
  -deadline good \
  -cpu-used 2 \
  -row-mt 1 \
  "$OUTPUT"

echo "Done: $OUTPUT ($(du -h "$OUTPUT" | cut -f1))"
