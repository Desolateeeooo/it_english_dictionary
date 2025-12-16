import { Link } from "react-router-dom";
import { FlexContainer, PrimaryButton, SecondaryButton } from "../../../ui";
import styles from "./SignInButtons.module.css";

interface ISignInButtons {
	link: string;
	linkTitle: string;
	linkButtonText: string;
	helperButtonText: string;
	primaryButtonText: string;
}

function SignInButtonsPresentational({ link, linkTitle, linkButtonText, helperButtonText, primaryButtonText }: ISignInButtons) {
	return (
		<section className={styles.sign_in_btns}>
			<PrimaryButton text={primaryButtonText} />
			<FlexContainer style={{ gap: 20 }}>
				<hr />
				<p>or</p>
				<hr />
			</FlexContainer>
			<SecondaryButton text={"Sign in with the other"} />
			<FlexContainer style={{ justifyContent: "flex-start" }} >
				<Link to={link} title={linkTitle}>
				<button className={styles.btn_dont_have_acc}>{helperButtonText}</button>
				</Link>
				<Link to={link} title={linkTitle}>
					<button className={styles.btn_sign_up}>{linkButtonText}</button>
				</Link>
			</FlexContainer>
		</section >
	);
}

export default SignInButtonsPresentational;