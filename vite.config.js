import { defineConfig } from 'vite';
export default defineConfig({base:process.env.GITHUB_ACTIONS?'/Jarvis.ai-/':'/',build:{outDir:'dist'}});
