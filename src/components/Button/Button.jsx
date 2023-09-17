// Import React library and the CSS module for styling.
import React from 'react';
import styles from './Button.module.css'; // Import CSS styles from the Button module.

// Define a functional component named CenteredButton, which receives an onClick prop.
const CenteredButton = ({ onClick }) => {
  return (
    // Create a container div with a CSS class 'center-button-container'.
    <div className={styles['center-button-container']}>
      {/* Create a button element with a CSS class 'load-more-button' and attach an onClick event handler. */}
      <button className={styles['load-more-button']} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

// Export the CenteredButton component as the default export.
export default CenteredButton;

// In summary, this module defines a React functional component called CenteredButton, which renders a button centered within a container.
// It applies styles from an external CSS module(Button.module.css) to achieve the desired appearance.The component receives an onClick prop to handle button clicks.
