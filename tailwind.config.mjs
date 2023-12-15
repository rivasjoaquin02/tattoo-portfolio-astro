/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				lumna: {
					50: "#faf8f0",
					100: "#f0e9d5",
					200: "#d8c996",
					300: "#ceb97b",
					400: "#c2a35d",
					500: "#b78b49",
					600: "#a2703d",
					700: "#875736",
					800: "#6f4631",
					900: "#5c3c2b",
					950: "#341e14",
				},
			},
		},
	},
	plugins: [],
};
