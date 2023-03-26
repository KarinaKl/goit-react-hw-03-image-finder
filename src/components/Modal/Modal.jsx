import { Component } from 'react';

import { disableScroll, enableScroll } from 'utils/utils';
import styles from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    disableScroll();
    document.addEventListener('keydown', this.closeModalByEscape);
  }

  componentWillUnmount() {
    enableScroll();
    document.removeEventListener('keydown', this.closeModalByEscape);
  }

  closeModalByEscape = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  render() {
    const { imgUrl, onCloseModal } = this.props;
    return (
      <div
        className={styles.overlay}
        onClick={event =>
          event.currentTarget === event.target && onCloseModal()
        }
      >
        <div className={styles.modal}>
          <img src={imgUrl} alt="" />
        </div>
      </div>
    );
  }
}
