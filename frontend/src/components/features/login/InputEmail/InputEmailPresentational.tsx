import { Mail } from "lucide-react";
import { InputWrapper } from "../../../layout";
import styles from "./InputEmail.module.css";

function InputEmailPresentational() {
	return (
		<InputWrapper>
			<input type="email" name="sign-in-email" placeholder="Email" className={styles.input_field} />
			<Mail className={styles.input_icon} size={20} />
		</InputWrapper>
	);
}

export default InputEmailPresentational;