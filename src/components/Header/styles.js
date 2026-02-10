import styled from 'styled-components';

export const HeaderBar = styled.header`
	position: sticky;
	top: 0;
	z-index: 10;
	background: rgba(247, 246, 242, 0.85);
	backdrop-filter: blur(16px);
	border-bottom: 1px solid var(--stroke);
`;

export const HeaderInner = styled.div`
	max-width: 1120px;
	margin: 0 auto;
	padding: 20px 24px;
	display: grid;
	grid-template-columns: auto 1fr auto;
	align-items: center;
	gap: 24px;

	@media (max-width: 900px) {
		grid-template-columns: auto auto;
		justify-content: space-between;
	}
`;

export const Brand = styled.a`
	font-family: var(--font-title);
	font-weight: 700;
	font-size: 1.25rem;
	letter-spacing: 0.06em;
`;

export const Nav = styled.nav`
	display: flex;
	gap: 20px;
	justify-content: center;

	@media (max-width: 900px) {
		display: none;
	}
`;

export const NavLink = styled.a`
	color: var(--muted);
	font-size: 0.95rem;
	transition: color 0.2s ease;

	&:hover {
		color: var(--text);
	}
`;

export const HeaderCta = styled.a`
	padding: 10px 18px;
	border-radius: 999px;
	background: var(--accent);
	color: #fff;
	font-weight: 700;
	font-size: 0.9rem;
	box-shadow: 0 12px 25px rgba(28, 77, 93, 0.25);
	transition: transform 0.2s ease, box-shadow 0.2s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 16px 30px rgba(28, 77, 93, 0.3);
	}

	@media (max-width: 900px) {
		font-size: 0.85rem;
	}
`;
