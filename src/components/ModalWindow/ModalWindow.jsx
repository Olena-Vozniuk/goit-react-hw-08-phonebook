// import { useEffect } from 'react';
// import { createPortal } from "react-dom";
import { PropTypes } from 'prop-types';
import { Box, Modal } from '@mui/material';
import { styles } from './ModalWindowStyles';



export const ModalWindow = ({ children, onClose }) => {  
  return (
    <Modal
      open
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.wrap} onClose={onClose}>{children}</Box>
    </Modal>
  );
};

ModalWindow.propTypes = {
  children: PropTypes.element,
  onClose: PropTypes.func.isRequired,
};

// export const Modal = ({ onClose, children }) => {
    
//   useEffect(() => {
//     const handleKeyDown = event => {
//       if (event.code === 'Escape') {
//      onClose();
//     }
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     }
//   }, [onClose])
  

//   const onBackdropClick = event => {
//     if (event.currentTarget === event.target) {
//       onClose();
//     }  
//   };
    
//     const onCloseClick = event => {
//          if (event.currentTarget === event.target) {
//       onClose();
//     }  
//     }
    
//     return createPortal(
//         <div className="backdrop" onClick={onBackdropClick}>
//             <div className="content">
//                 <button type='button' onClick={onCloseClick}>close</button>
//                 {children}
//             </div>
//         </div>,
//             modalRoot,
//         );   
// }

// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   children: PropTypes.element,
// };