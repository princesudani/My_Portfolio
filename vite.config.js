import { defineConfig } from 'vite';
import staticSite from 'vite-plugin-static-site';

export default defineConfig({
  plugins: [
    staticSite({
      staticDir: 'dist', // The directory where the built files are located
      buildOptions: {
        outDir: 'build', // The output directory for the build
      },
    }),
  ],
  base: '/My_Portfolio/', // Replace 'your-repo-name' with the name of your GitHub repo
});
