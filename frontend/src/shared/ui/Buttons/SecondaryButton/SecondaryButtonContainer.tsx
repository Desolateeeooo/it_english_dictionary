import SecondaryButtonPresentational from './SecondaryButtonPresentational';

interface ISecondaryButton {
  text: string;
}

function SecondaryButtonContainer({ text }: ISecondaryButton) {
  return <SecondaryButtonPresentational text={text} />;
}

export default SecondaryButtonContainer;
