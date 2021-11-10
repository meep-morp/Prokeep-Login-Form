import styled from "styled-components";

export const LoginContainer = styled.div`
	background: #dbf1f5;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	.splash-screen {
		height: 700px;
		position: absolute;
		left: 15%;
		top: 100px;
		z-index: 5;
	}

	form {
		position: absolute;
		right: 0;
		height: 97vh;
		width: 35%;
	}

	.logo {
		position: absolute;
		left: 0;
		top: -4%;
		height: 150px;
		z-index: 10;
	}
`;

export const LoginButton = styled.button`
	width: 75%;
	background: #8ab8f1;
	color: white;
	font-weight: bold;
	border: none;
	outline: none;
	padding: 15px;
	border-radius: 10px;
	font-size: 1.4rem;
	transition: all 0.3s ease;

	&:hover {
		background: #5e95da;
	}
`;
