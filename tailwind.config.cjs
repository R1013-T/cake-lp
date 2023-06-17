module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: {
				'top1': "url('/images/top/1.jpg')",
				'top2': "url('/images/top/2.jpg')",
				'top3': "url('/images/top/3.jpg')",
			},
			colors: {
				"bk":"#333333",
				"bg-white": "#F5EFE7",
				// D8C4B6
				// 	4F709C
				// 	213555
			},
			height: {
				'top': 'calc(65vh)',
			},
			width: {
				'otherMenu': 'calc(50% - 6px)',
			},
			gridTemplateColumns:{
				'top' : '1fr 50% 1fr',
				'main': '200px 1fr'
			},
			fontFamily: {
				body: ['roboto','noto-sans-cjk-jp', 'sans-serif'],
				logo: [
					'antipol-variable', 'sans-serif',
					{
					fontVariationSettings: '"STCH" 70'
					}
				]
			},
			fontWeight: {
				extended:'Extended',
			},
		},
	},
	plugins: [],
};

// .example {
// 	font-family: "antipol-variable",sans-serif;
// 	font-variation-settings: 'wdth' 100, 'wght' 95, 'STCH' 70;


// }
