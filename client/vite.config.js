import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			external: ['react', 'react-router', 'react-router-dom', 'react-redux'],
			output: {
				globals: {
					react: 'React',
				},
			},
		},
	},
});
