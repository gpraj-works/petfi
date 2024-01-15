export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				danger: '#F45050',
				success: '#186F65',
				dark: '#1F2937',
				primary: {
					500: '#2F8F9D',
					300: '#3BACB6',
					200: '#82DBD8',
					100: '#B3E8E5',
				},
			},
		},
	},
	plugins: [],
};
