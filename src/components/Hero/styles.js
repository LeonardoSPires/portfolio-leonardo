import styled from 'styled-components';

export const HeroSection = styled.section`
	padding: 96px 24px 60px;
`;

export const HeroInner = styled.div`
	max-width: 1120px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 48px;
	align-items: center;

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;

export const HeroText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const HeroSubtitle = styled.p`
	text-transform: uppercase;
	letter-spacing: 0.3em;
	font-size: 0.8rem;
	color: var(--muted);
`;

export const HeroTitle = styled.h1`
	font-family: var(--font-title);
	font-size: clamp(2.6rem, 4vw, 3.6rem);
	line-height: 1.1;
`;

export const HeroActions = styled.div`
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
`;

export const PrimaryButton = styled.a`
	padding: 14px 26px;
	border-radius: 999px;
	background: var(--accent);
	color: #fff;
	font-weight: 700;
	box-shadow: 0 16px 30px rgba(28, 77, 93, 0.25);
	transition: transform 0.2s ease, box-shadow 0.2s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 20px 38px rgba(28, 77, 93, 0.3);
	}
`;

export const GhostButton = styled.a`
	padding: 14px 26px;
	border-radius: 999px;
	border: 1px solid var(--stroke);
	color: var(--text);
	font-weight: 700;
	transition: border 0.2s ease, color 0.2s ease, transform 0.2s ease;

	&:hover {
		border-color: var(--accent);
		color: var(--accent);
		transform: translateY(-2px);
	}
`;

export const HeroCard = styled.div`
	background: var(--surface);
	border-radius: var(--radius-lg);
	padding: 32px;
	box-shadow: var(--shadow);
	border: 1px solid var(--stroke);
	display: flex;
	flex-direction: column;
	gap: 18px;

	h3 {
		font-family: var(--font-title);
		font-size: 1.4rem;
	}

	p {
		color: var(--muted);
	}
`;

export const HeroMeta = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 12px;

	@media (max-width: 600px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`;

export const MetaItem = styled.div`
	background: var(--surface-alt);
	padding: 14px 16px;
	border-radius: var(--radius-md);
	border: 1px solid var(--stroke);
	text-align: center;

	span {
		font-weight: 700;
		font-size: 1.1rem;
		display: block;
	}

	small {
		color: var(--muted);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}
`;
