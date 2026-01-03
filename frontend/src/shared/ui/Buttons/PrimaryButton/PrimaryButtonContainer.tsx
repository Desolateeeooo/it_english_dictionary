import PrimaryButtonPresentational from './PrimaryButtonPresentational';

export interface PrimaryButtonProps {
  text: string;
  type?: 'submit' | 'button' | 'reset';
  disabled: boolean | undefined;
}

function PrimaryButtonContainer({ text, type, disabled }: PrimaryButtonProps) {
  return <PrimaryButtonPresentational text={text} type={type} disabled={disabled} />;
}

export default PrimaryButtonContainer;
