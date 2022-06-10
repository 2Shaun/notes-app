/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: "cloudflare-workers",
  server: "./server.js",
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  mdx: async (filename) => {
    const [rehypeKatex, remarkMath] = await Promise.all([
      import("rehype-katex").then((mod) => mod.default),
      import("remark-math").then((mod) => mod.default),
    ]);

    return {
      rehypePlugins: [rehypeKatex],
      remarkPlugins: [remarkMath],
    };
  },
};
