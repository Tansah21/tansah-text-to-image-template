// src/index.ts
var index_default = {
  async fetch(request, env) {
    const inputs = {
      prompt: "An energetic Naxi Cultural Experience unfolds, centered around a roaring bonfire under the night sky. People, many in traditional Naxi attire, joyfully dance in lively circles around the crackling fire, their movements rhythmic and celebratory. The atmosphere is vibrant, filled with the sounds of singing and laughter, fostering a powerful sense of warmth, belonging, and shared cultural celebration amongst all participants.,style:realistic",
      steps: 8,
      seed: Math.floor(Math.random() * 10)
    };
    const response = await env.AI.run(
      "@cf/black-forest-labs/flux-1-schnell",
      inputs
    );
    return new Response(response, {
      headers: {
        "content-type": "image/png"
      }
    });
  }
};
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
