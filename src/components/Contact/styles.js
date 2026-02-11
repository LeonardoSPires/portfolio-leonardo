import styled from 'styled-components';

export const ContactSection = styled.section`
	padding: 80px 24px 100px;
`;

export const ContactInner = styled.div`
	max-width: 1120px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 40px;

	@media (max-width: 960px) {
		grid-template-columns: 1fr;
	}
`;

export const ContactTitle = styled.h2`
	font-family: var(--font-title);
	font-size: clamp(2rem, 3vw, 2.6rem);
	margin-bottom: 16px;
`;

export const ContactSubtitle = styled.p`
	color: var(--muted);
	max-width: 520px;
`;

export const ContactGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 16px;
	margin-top: 28px;

	@media (max-width: 960px) {
		grid-template-columns: 1fr;
	}
`;

export const ContactCard = styled.div`
	min-width: 0;
	display: flex;
	flex-direction: column;
	background: var(--surface);
	width: 100%;
	padding: 18px;
	border-radius: var(--radius-sm);
	border: 1px solid var(--stroke);
	box-shadow: 0 16px 30px rgba(15, 45, 55, 0.08);

	h4 {
		font-family: var(--font-title);
		margin-bottom: 6px;
	}

	a {
		color: var(--muted);
		overflow-wrap: anywhere;
	}
`;

export const ContactForm = styled.form`
	background: var(--surface);
	border-radius: var(--radius-lg);
	padding: 32px;
	border: 1px solid var(--stroke);
	box-shadow: var(--shadow);
	display: grid;
	gap: 16px;
`;

export const InputGroup = styled.div`
	display: grid;
	gap: 8px;

	label {
		font-weight: 700;
		font-size: 0.9rem;
	}

	input,
	textarea {
		padding: 12px 14px;
		border-radius: var(--radius-sm);
		border: 1px solid var(--stroke);
		background: var(--surface-alt);
		font-family: var(--font-body);
	}
`;

export const SubmitButton = styled.button`
	border: none;
	background: var(--accent);
	color: #fff;
	padding: 14px 20px;
	border-radius: 999px;
	font-weight: 700;
	cursor: pointer;
	box-shadow: 0 14px 26px rgba(28, 77, 93, 0.25);
	transition: transform 0.2s ease, box-shadow 0.2s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 18px 32px rgba(28, 77, 93, 0.3);
	}
`;

export const StatusMessage = styled.p`
	font-size: 0.9rem;
	margin-top: 4px;
	color: ${({ success }) => (success ? '#1b8a5a' : '#d64545')};
`;
