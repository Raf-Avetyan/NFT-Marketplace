import "./JoinForm.scss";
import InputArea from './InputArea/InputArea';

export default function JoinForm() {
  return (
    <section className="join-form">
      <div className="join-form__container">
        <div className="join-form__image">
          <img src="/images/jpg/Join-Form_cosmo.jpg" alt="" />
        </div>
        <form action="#!" className="join-form__body body-join-form">
          <div className="body-join-form__title">Join our weekly digest</div>
          <div className="body-join-form__text">
            Get exclusive promotions & updates straight to your inbox.
          </div>
          <InputArea />
        </form>
      </div>
    </section>
  );
}
