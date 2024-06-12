import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	:root {
		font-family: var(--font-family-primary);
		font-size: 16px;
		line-height: 24px;
		font-weight: 400;

		color-scheme: light;
		color: var(--secondary-color);
		background-color: var(--bg-color);

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}

	#root {
		height: 100vh;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	textarea,
	select,
	input,
	button {
		background: none;
		border: none;
		outline: none;
		margin: 0;
		font: inherit;
	}

	:root {
		--font-family-primary: "Consolas", "Courier New", monospace;

		--font-size-xs: 0.6rem;
		--font-line-height-xs: 0.8rem;
		--font-xs: var(--font-size-xs) / var(--font-line-height-xs) var(--font-family-primary);

		--font-size-s: 0.8rem;
		--font-line-height-s: 1rem;
		--font-s: var(--font-size-s) / var(--font-line-height-s) var(--font-family-primary);

		--font-size-m: 1rem;
		--font-line-height-m: 1.2rem;
		--font-m: var(--font-size-m) / var(--font-line-height-m) var(--font-family-primary);

		--font-size-l: 1.2rem;
		--font-line-height-l: 1.4rem;
		--font-l: var(--font-size-l) / var(--font-line-height-xl) var(--font-family-primary);

		--font-size-xl: 1.8rem;
		--font-line-height-xl: 2rem;
		--font-xl: var(--font-size-xl) / var(--font-line-height-xl) var(--font-family-primary);

		--font-size-xxl: 2.4rem;
		--font-line-height-xxl: 2.6rem;
		--font-xxl: var(--font-size-xxl) / var(--font-line-height-xxl) var(--font-family-primary);

		--font-size-xxxl: 5rem;
		--font-line-height-xxxl: 5.2rem;
		--font-xxxl: var(--font-size-xxxl) / var(--font-line-height-xxxl) var(--font-family-primary);

		--spacing-xxs: 0.1rem;
		--spacing-xs: 0.4rem;
		--spacing-s: 0.8rem;
		--spacing-m: 1.2rem;
		--spacing-l: 1.6rem;
		--spacing-xl: 2.5rem;
		--spacing-xxl: 3.2rem;

		--border-radius-xs: 0.2rem;
		--border-radius-s: 0.4rem;
		--border-radius-m: 0.8rem;
		--border-radius-l: 1.2rem;
		--border-radius-xl: 2rem;

	
		--timing-s: 0.1s;
		--timing-m: 0.25s;
		--timing-l: 0.6s;

	
		@media (prefers-color-scheme: dark) {
			--bg-color: #1D1C21;
			--paper-bg-color: #1414149b;
			--paper-bg-secondary-color: #35353579;
			--paper-border-color: #4E3B65;
			--paper-border-secondary-color: #4e3b6580;

			--primary-color: #AB63F8;
			--primary-dark-color: #843CD4;
			--secondary-color: #e7e7e7;
			--tertiary-color: #969696;
			--accent-color: #FEBE29;
			--accent-dark-color: #E7A103;

			--input-bg-color: #4242427c;
			--input-bg-hover-color: #5353537a;

			--input-border-color: #424242;
			--input-border-focus-color: #969696;
			--input-border-hover-color: #424242;
		}
	}
`;

export { GlobalStyles };
