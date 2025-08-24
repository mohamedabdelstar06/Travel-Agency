import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {sentryReactRouter, type SentryReactRouterBuildOptions} from "@sentry/react-router"

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "abdelstar",
  project: "travel-agency",
  // An auth token is required for uploading source maps;
  // store it in an environment variable to keep it secure.
  authToken:"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"
  // ...
};

export default defineConfig(config => {
  return {
  plugins: [tailwindcss(), tsconfigPaths(), reactRouter(),sentryReactRouter(sentryConfig, config)],
  ssr :{
    noExternal:[/@syncfusion/]
  }
  };
});

