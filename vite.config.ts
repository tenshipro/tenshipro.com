import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import type { CommonServerOptions } from 'vite';

const serverOptions: CommonServerOptions = {
	port: 5300
};

export default defineConfig({
	plugins: [sveltekit()],
	server: serverOptions,
	preview: serverOptions
});
