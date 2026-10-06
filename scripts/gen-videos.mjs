import { experimental_generateVideo as generateVideo } from "ai";
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("public/videos", { recursive: true });

const jobs = [
  {
    out: "public/videos/hero-ruta.mp4",
    prompt:
      "Cinematic aerial drone shot tracking a modern white semi-truck with a refrigerated trailer driving fast on a straight two-lane highway through the flat green pampas of Argentina at golden hour sunset, long shadows, warm light, motion, smooth camera, photorealistic, no text, no logos",
  },
  {
    out: "public/videos/flota-noche.mp4",
    prompt:
      "Cinematic low-angle tracking shot of a convoy of white cargo trucks driving on a highway at blue hour dusk, headlights on, light trails, motion blur on the asphalt, city lights in the distance, photorealistic, no text, no logos",
  },
];

await Promise.all(
  jobs.map(async (job) => {
    try {
      const { video } = await generateVideo({
        model: "google/veo-3.1-fast-generate-001",
        prompt: job.prompt,
        aspectRatio: "16:9",
        duration: 8,
        generateAudio: false,
      });
      writeFileSync(job.out, video.uint8Array);
      console.log("OK", job.out, video.uint8Array.length);
    } catch (error) {
      console.error("FAIL", job.out, error?.message ?? error);
    }
  }),
);
