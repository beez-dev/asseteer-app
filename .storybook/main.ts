import type { StorybookConfig } from "@storybook/nextjs-vite";
import {mergeConfig} from "vite";
import path from "path";
import { fileURLToPath } from "url";

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/nextjs-vite",
    "options": {}
  },
  "staticDirs": [
    "../public"
  ],
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@style": path.resolve(dirname, "../app"),
        }
      },
      css: {
        preprocessorOptions: {
          scss: {
            includePaths: [path.resolve(dirname, "../app")]
          }
        }
      }
    });
  },
};
export default config;