import PrimaryButtonPresentational from "./PrimaryButtonPresentational";

interface IPrimaryButton {
	text: string;
}

function PrimaryButtonContainer({text}: IPrimaryButton) {
	return <PrimaryButtonPresentational text={text}/>;
}

export default PrimaryButtonContainer;