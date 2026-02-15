#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const projectRoot = path.join(__dirname, "..");
const videosRoot = path.join(projectRoot, "static", "videos");
const VIDEO_EXTS = new Set([".mp4", ".mov", ".m4v", ".webm"]);

function hasFfmpeg() {
  const probe = spawnSync("ffmpeg", ["-version"], { stdio: "ignore" });
  return probe.status === 0;
}

function listVideos(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(listVideos(fullPath));
    } else if (VIDEO_EXTS.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

function main() {
  if (!fs.existsSync(videosRoot)) {
    console.error(`No videos folder found at ${videosRoot}`);
    process.exit(1);
  }

  if (!hasFfmpeg()) {
    console.error(
      "ffmpeg not found. Install it (e.g. `brew install ffmpeg`) and rerun this script."
    );
    process.exit(1);
  }

  const videos = listVideos(videosRoot);
  if (videos.length === 0) {
    console.log("No videos found to process.");
    return;
  }

  console.log(`Found ${videos.length} video(s). Generating posters...`);

  for (const videoPath of videos) {
    const dir = path.dirname(videoPath);
    const base = path.basename(videoPath, path.extname(videoPath));
    const posterPath = path.join(dir, `${base}-poster.jpg`);

    if (fs.existsSync(posterPath)) {
      console.log(`• Skipping (exists): ${path.relative(projectRoot, posterPath)}`);
      continue;
    }

    console.log(`• Creating poster for ${path.relative(projectRoot, videoPath)}`);
    const ffmpegResult = spawnSync(
      "ffmpeg",
      [
        "-y",
        "-i",
        videoPath,
        "-vf",
        "select=eq(n\\,0)",
        "-vframes",
        "1",
        "-q:v",
        "2",
        posterPath,
      ],
      { stdio: "inherit" }
    );

    if (ffmpegResult.status !== 0) {
      console.error(`  Failed to create poster for ${videoPath}`);
    }
  }

  console.log("Done.");
}

main();
