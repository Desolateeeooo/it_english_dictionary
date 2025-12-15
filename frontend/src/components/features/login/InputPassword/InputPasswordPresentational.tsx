import type { Dispatch, SetStateAction } from "react";
import styles from "./InputPassword.module.css";
import { Lock } from "lucide-react";
import { InputWrapper } from "../../../layout";

interface IInputPassword {
	showPassword: boolean;
	setShowPassword: Dispatch<SetStateAction<boolean>>
}

function InputPasswordPresentational({ showPassword, setShowPassword }: IInputPassword) {
	return (
		<InputWrapper>
			<input type="password" name="sign-in-password" placeholder="Password" className={styles.input_field} />
			<Lock className={styles.input_icon} size={20} />
			<button
				type="button"
				className={styles.password_toggle}
				onClick={() => setShowPassword(!showPassword)}
			>
				{showPassword ? "HIDE" : "SHOW"}
			</button>
		</InputWrapper>
	);
}

export default InputPasswordPresentational;