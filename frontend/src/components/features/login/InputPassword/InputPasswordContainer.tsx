import { useState } from "react";
import InputPasswordPresentational from "./InputPasswordPresentational";

function InputPasswordContainer() {
	const [showPassword, setShowPassword] = useState(false);

	return <InputPasswordPresentational showPassword={showPassword} setShowPassword={setShowPassword} />
}

export default InputPasswordContainer;