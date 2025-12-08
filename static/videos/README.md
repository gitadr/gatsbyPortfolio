# Self-hosted videos

Place article and journal video assets in this folder so they are served from `/videos/...` on the site.

For the “Portfolio Reel 2025” post the embed expects:
- `portfolio-reel-2025.mp4` (preferred for broad browser support)
- `portfolio-reel-2025.mov` (original source, optional)

If you need to convert the `.mov` export to `.mp4`, you can use:

```
ffmpeg -i input.mov -c:v libx264 -crf 20 -preset slow -c:a aac -movflags +faststart portfolio-reel-2025.mp4
```

Make sure the final files live alongside this README before deploying.
