import { useState } from "react";
import InputPasswordPresentational from "./InputPasswordPresentational";

function InputPasswordContainer() {
	const [showPassword, setShowPassword] = useState(false);
	const [inputType, setInputType] = useState("password");

	const onClickHandler = () => {
		setShowPassword(!showPassword);
		setInputType(inputType === "password" ? "text" : "password");
	}

	return <InputPasswordPresentational
		showPassword={showPassword}
		setShowPassword={setShowPassword}
		inputType={inputType}
		onClickHandler={onClickHandler} />
}

export default InputPasswordContainer;