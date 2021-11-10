import styled from "styled-components";

export const FormContainer = styled.form`
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-radius: 10px;

	padding: 10px;

	.primary-tagline {
		color: #8ab8f1;
		font-size: 3rem;
	}

	.secondary-tagline {
		font-size: 1.3rem;

		a {
			color: #8ab8f1;
			text-decoration: none;
			transition: all 0.3s ease;

			&:hover {
				color: #5e95da;
			}
		}
	}
`;
