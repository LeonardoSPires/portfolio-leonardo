import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		--bg: #f7f6f2;
		--bg-strong: #efece4;
		--surface: #ffffff;
		--surface-alt: #fdfbf6;
		--text: #1d1d1b;
		--muted: #5b5b55;
		--accent: #1c4d5d;
		--accent-strong: #0f2d37;
		--stroke: rgba(15, 45, 55, 0.12);
		--shadow: 0 30px 70px rgba(15, 45, 55, 0.12);
		--radius-lg: 28px;
		--radius-md: 16px;
		--radius-sm: 10px;
		--font-title: 'Montserrat', sans-serif;
		--font-body: 'Lato', sans-serif;
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		scroll-behavior: smooth;
		scroll-padding-top: 90px;
	}

	body {
		font-family: var(--font-body);
		color: var(--text);
		background: radial-gradient(circle at 15% 15%, rgba(28, 77, 93, 0.12), transparent 45%),
			radial-gradient(circle at 90% 0%, rgba(15, 45, 55, 0.08), transparent 40%),
			linear-gradient(180deg, var(--bg) 0%, var(--bg-strong) 100%);
		min-height: 100vh;
		line-height: 1.6;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	img {
		max-width: 100%;
		display: block;
	}

	button {
		font-family: inherit;
	}

	::selection {
		background: rgba(28, 77, 93, 0.25);
	}
`;
