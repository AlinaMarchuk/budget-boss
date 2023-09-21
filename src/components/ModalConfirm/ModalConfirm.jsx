import { useEffect } from 'react';
import {
  ModalContent,
  Button,
  TitleModal,
  ModalBackDrop,
  IconButtonClose,
} from './ModalConfirm.styled';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const ModalConfirm = ({ title, onConfirm, onClose }) => {
  const handleConfirm = () => {
    onConfirm();
  };

  const handleClose = () => {
    onClose();
  };

  const onCloseBackdrop = e => {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      onClose();
    }
  };

  function onCloseEscape(e) {
    if (e.key === 'Escape') {
      e.stopPropagation();
      onClose();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', onCloseEscape);
    return () => {
      window.removeEventListener('keydown', onCloseEscape);
    };
  });

  return (
    <ModalBackDrop onClick={onCloseBackdrop}>
      <ModalContent>
        <IconButtonClose onClick={handleClose}>
          <CloseOutlinedIcon fontSize="medium" />
        </IconButtonClose>
        <TitleModal className="modal-title">{title}</TitleModal>

        <Button
          className="modal-confirm"
          onClick={handleConfirm}
          style={{ marginRight: '15px' }}
        >
          Yes
        </Button>
        <Button className="modal-cancel" onClick={handleClose}>
          No
        </Button>
      </ModalContent>
    </ModalBackDrop>
  );
};

export default ModalConfirm;
