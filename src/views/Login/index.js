import React from "react";
import Form from "../../components/Form";
import splashScreen from "../../assets/splash.png";
import { LoginButton, LoginContainer } from "./StyledLogin";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import axios from "axios";

const LoginPage = ({
	submitHandler = async data => {
		try {
			const response = await axios.post("https://reqres.in/api/login", data);
			alert("You have logged in!", response);
		} catch (err) {
			alert(err);
		}
	},
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<LoginContainer>
			<Logo />
			<img className="splash-screen" src={splashScreen} alt="" />
			<Form onSubmit={handleSubmit(submitHandler)}>
				<h3 className="secondary-tagline">Start your journey</h3>
				<h2 className="primary-tagline">Sign In to Prokeep</h2>
				<h4 className="secondary-tagline">
					Don't have an account? <a href="/">Create one now.</a>
				</h4>
				<Input
					placeholder="eve.holt@reqres.in"
					register={register}
					label="Email Address"
					name="email"
					validation={{
						required: "Email is required",
						pattern: { value: /^\S+@\S+$/i, message: "Must be a valid email address." },
					}}
					errors={errors}
				/>
				<Input
					placeholder="cityslicka"
					register={register}
					label="Password"
					name="password"
					type="password"
					validation={{
						required: "Password is required",
						min: { value: 2, message: "Password must be at longer than 1 character." },
					}}
					errors={errors}
				/>
				<LoginButton>LOGIN</LoginButton>
			</Form>
		</LoginContainer>
	);
};

export default LoginPage;
