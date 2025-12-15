import { User } from "lucide-react";
import styles from "./InputUsername.module.css";
import { InputWrapper } from "../../../layout";

function InputUsernamePresentational() {
	return (
		<InputWrapper>
			<input type="text" name="sign-in-login" placeholder="Username" className={styles.input_field} />
			<User className={styles.input_icon} size={20} />
		</InputWrapper>
	);
}

export default InputUsernamePresentational;