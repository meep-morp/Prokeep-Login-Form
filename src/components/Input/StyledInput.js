import styled from "styled-components";

export const StyledInput = styled.input`
	border-radius: 10px;
	padding: 10px;
	margin-bottom: 10px;
	width: 100%;
	outline: none;
	border: ${props => (props.isError ? "red 1px solid" : "black 1px solid")};
`;

export const InputWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	width: 74%;
	margin: 0 auto;

	label {
		margin-bottom: 7px;
		font-weight: bold;
	}
`;

export const ErrorMessage = styled.p`
	color: red;
`;
