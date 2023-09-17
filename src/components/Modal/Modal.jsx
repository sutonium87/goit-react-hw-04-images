// Import React library and useEffect hook for side effects.
import React, { useEffect } from 'react';
import styles from './Modal.module.css'; // Import CSS styles from the Modal module.

// Define a functional component named Modal.
const Modal = ({ imageUrl, onClose }) => {
  // Use the useEffect hook to add and remove an event listener for the 'Escape' key.
  useEffect(() => {
    const handleEscKey = e => {
      if (e.key === 'Escape') {
        onClose(); // Call the onClose function when the 'Escape' key is pressed.
      }
    };

    // Add the event listener to the window when the component mounts.
    window.addEventListener('keydown', handleEscKey);

    // Clean up by removing the event listener when the component unmounts.
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  return (
    // Render a div with a CSS class 'overlay' that triggers onClose when clicked.
    <div className={styles.overlay} onClick={onClose}>
      {/* Render a div with a CSS class 'modal' containing an image. */}
      <div className={styles.modal}>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

// Export the Modal component as the default export.
export default Modal;

// In summary, this module defines a React functional component called Modal.
// It creates a modal overlay with an image, and it listens for the 'Escape' key press to close the modal.
// Styles for the modal are applied using an external CSS module(Modal.module.css).
