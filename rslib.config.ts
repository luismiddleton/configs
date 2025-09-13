import { defineConfig } from "@rslib/core";

export default defineConfig({
  source: {
    entry: {
      index: ["./src/**"],
    },
  },
  lib: [
    {
      format: "esm",
      syntax: ["node 18"],
      bundle: false,
    },
    {
      format: "cjs",
      syntax: ["node 18"],
      bundle: false,
    },
  ],
});
