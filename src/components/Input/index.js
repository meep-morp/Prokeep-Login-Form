import React from "react";
import { ErrorMessage, InputWrapper, StyledInput } from "./StyledInput";

const Input = props => {
	const { register, name, label, validation, showLabel, errors, onChange, ...rest } = props;
	return (
		<InputWrapper>
			{errors && errors[name] && <ErrorMessage role="alert">{errors[name].message}</ErrorMessage>}
			<label htmlFor={name}>{label}</label>
			<StyledInput
				isError={errors[name]}
				id={name}
				onChange={onChange}
				{...rest}
				{...register(name, validation)}
			/>
		</InputWrapper>
	);
};

export default Input;
