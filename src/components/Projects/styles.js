import styled from 'styled-components';

export const ProjectsSection = styled.section`
	padding: 60px 24px 80px;
`;

export const ProjectsInner = styled.div`
	max-width: 1120px;
	margin: 0 auto;
	display: grid;
	gap: 32px;
`;

export const ProjectsHeader = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const ProjectsTitle = styled.h2`
	font-family: var(--font-title);
	font-size: clamp(2rem, 3vw, 2.6rem);
`;

export const ProjectsSubtitle = styled.p`
	color: var(--muted);
	max-width: 640px;
`;

export const ProjectsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 20px;

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;

export const ProjectCard = styled.article`
	background: var(--surface);
	padding: 26px;
	border-radius: var(--radius-md);
	border: 1px solid var(--stroke);
	box-shadow: 0 20px 40px rgba(15, 45, 55, 0.08);
	display: grid;
	gap: 12px;

	h4 {
		font-family: var(--font-title);
		font-size: 1.2rem;
	}

	p {
		color: var(--muted);
	}

	a {
		color: var(--accent);
		font-weight: 600;
		display: inline-flex;
		align-items: center;
		gap: 6px;
		text-decoration: none;
		transition: color 0.2s ease, transform 0.2s ease, background-size 0.2s ease;
		background-image: linear-gradient(currentColor, currentColor);
		background-size: 0% 2px;
		background-position: 0 100%;
		background-repeat: no-repeat;
	}

	a:hover {
		color: var(--accent-strong);
		transform: translateY(-2px);
		background-size: 100% 2px;
	}
`;

export const ProjectMeta = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	align-items: center;
	

	span {
		padding: 6px 12px;
		border-radius: 999px;
		background: var(--surface-alt);
		border: 1px solid var(--stroke);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--muted);
	}
`;
