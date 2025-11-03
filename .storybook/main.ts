import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  viteFinal: async (config) => {
    config.css = {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    };
    return config;
  },
};

export default config;
