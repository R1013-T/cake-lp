module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"bg-white": "#F5EFE7",
				// D8C4B6
				// 	4F709C
				// 	213555
			},
			height: {
				'top': 'calc(40vh)',
			},
			width: {
				'otherMenu': 'calc(50% - 6px)',
			},
			gridTemplateColumns:{
				'main': '200px 1fr'
			}
		},
	},
	plugins: [],
};
