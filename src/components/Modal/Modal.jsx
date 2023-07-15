import PropTypes from 'prop-types';
import React , { useEffect  } from 'react';
import { Overlay, ModalContent, ModalImage } from './Modal.styled';

const Modal = ({largeImageURL, onClose }) => {
 useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.getElementById('root').classList.add('no-scroll');

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.getElementById('root').classList.remove('no-scroll');
    };
 }, [onClose]);
  
  

 const handleCloseClick = () => {
    onClose();
  };

 const handleImageClick = e => {
    e.stopPropagation();
  };


    return (
      <Overlay onClick={handleCloseClick}>
        <ModalContent>
          <ModalImage src={largeImageURL} alt="Modal" onClick={handleImageClick} />

        </ModalContent>
      </Overlay>
    );
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};


export default Modal;