import styled from 'styled-components';

export const AboutSection = styled.section`
	padding: 60px 24px;
`;

export const AboutInner = styled.div`
	max-width: 1120px;
	margin: 0 auto;
	display: grid;
	gap: 32px;
`;

export const AboutText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const AboutTitle = styled.h2`
	font-family: var(--font-title);
	font-size: clamp(2rem, 3vw, 2.6rem);
`;

export const AboutLead = styled.p`
	color: var(--muted);
	max-width: 720px;
`;

export const AboutGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 20px;

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;

export const AboutCard = styled.div`
	background: var(--surface);
	border-radius: var(--radius-md);
	padding: 24px;
	border: 1px solid var(--stroke);
	box-shadow: 0 20px 40px rgba(15, 45, 55, 0.08);

	h4 {
		font-family: var(--font-title);
		margin-bottom: 8px;
	}

	p {
		color: var(--muted);
	}
`;
