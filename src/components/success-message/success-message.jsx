import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

import './success-message.scss';

const SuccessMessage = ({ isOpen, onClose }) => {
  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={onClose}
      className="success-message"
      aria-label="Спасибо за обращение в наш банк."
    >
      <button className="success-message__close-button" onClick={onClose}>
        <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m1 1 16 16m0-16L1 17"
            stroke="#1F1E25"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <h4 className="success-message__heading">Спасибо за обращение в наш банк.</h4>
      <p className="success-message__text">
        Наш менеджер скоро свяжется с вами по указанному номеру телефона.
      </p>
    </Dialog>
  );
};

export default SuccessMessage;
