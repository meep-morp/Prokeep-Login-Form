import React from "react";
import { FormContainer } from "./StyledForm";

const Form = props => {
	const { children, onSubmit, ...rest } = props;

	return (
		<FormContainer onSubmit={onSubmit} {...rest}>
			{children}
		</FormContainer>
	);
};

export default Form;
