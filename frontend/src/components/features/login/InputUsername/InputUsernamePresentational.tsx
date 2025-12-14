import { User } from "lucide-react";
import styles from "./InputUsername.module.css";

function InputUsernamePresentational() {
	return (
		<div className={styles.input_wrapper}>
			<input type="text" name="sign-in-login" placeholder="Username" className={styles.input_field} />
			<User className={styles.input_icon} size={20} />
		</div>
	);
}

export default InputUsernamePresentational;