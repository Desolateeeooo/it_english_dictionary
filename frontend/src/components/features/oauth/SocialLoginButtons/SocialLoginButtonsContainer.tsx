import SocialLoginButtonsPresentational from "./SocialLoginButtonsPresentational";

interface ISocialLoginButtons {
	onGoogleClick?: () => void;
	onGitHubClick?: () => void;
	onMicrosoftClick?: () => void;
	onYandexClick?: () => void;
	variant?: 'default' | 'compact' | 'icons-only';
}

function SocialLoginButtonsContainer({
	onGoogleClick,
	onGitHubClick,
	onMicrosoftClick,
	onYandexClick,
	variant = "default"
}: ISocialLoginButtons) {

	onYandexClick = () => true;

	const handleGoogleClick = () => {
		if (onGoogleClick) {
			onGoogleClick();
		} else {
			console.log("Google login clicked");
		}
	};

	const handleGitHubClick = () => {
		if (onGitHubClick) {
			onGitHubClick();
		} else {
			console.log("GitHub login clicked");
		}
	};

	const handleMicrosoftClick = () => {
		if (onMicrosoftClick) {
			onMicrosoftClick();
		} else {
			console.log("Microsoft login clicked");
		}
	};

	const handleYandexClick = () => {
		if (onYandexClick) {
			onYandexClick();
		} else {
			console.log("Yandex login clicked");
		}
	};

	return <SocialLoginButtonsPresentational
		handleGoogleClick={handleGoogleClick}
		handleGitHubClick={handleGitHubClick}
		handleMicrosoftClick={handleMicrosoftClick}
		handleYandexClick={handleYandexClick}
		onYandexClick={onYandexClick}
		variant={variant} />
}

export default SocialLoginButtonsContainer;