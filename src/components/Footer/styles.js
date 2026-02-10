import styled from 'styled-components';

export const FooterBar = styled.footer`
	padding: 32px 24px 48px;
	border-top: 1px solid var(--stroke);
`;

export const FooterInner = styled.div`
	max-width: 1120px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
	flex-wrap: wrap;

	p {
		color: var(--muted);
	}
`;

export const FooterLinks = styled.div`
	display: flex;
	gap: 16px;
	color: var(--muted);

	a {
		transition: color 0.2s ease;
	}

	a:hover {
		color: var(--text);
	}
`;
