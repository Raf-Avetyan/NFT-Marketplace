import "./InputArea.scss";
import Button from '../../Button/Button';

export default function InputArea() {
  return (
    <div className="body-join-form__input-area">
      <input
        type="email"
        className="body-join-form__input"
        placeholder="Enter Your Email Address"
      />
      <Button
        src="/icons/EnvelopeSimple.svg"
        className="body-join-form__btn primary-btn"
      >
        Subscribe
      </Button>
    </div>
  );
}
