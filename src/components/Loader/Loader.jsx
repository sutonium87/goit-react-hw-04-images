// Import React library, TailSpin component from 'react-loader-spinner', and styles from an external CSS module.
import React from 'react';
import { TailSpin } from 'react-loader-spinner'; // Import the TailSpin component for the loader.
import styles from './Loader.module.css'; // Import CSS styles from the Loader module.

// Define a functional component named Loader.
const Loader = () => {
  return (
    // Create a div with a CSS class 'loader-container'.
    <div className={styles['loader-container']}>
      {/* Render the TailSpin loader component with specified color, height, and width. */}
      <TailSpin color="#007BFF" height={50} width={50} />
    </div>
  );
};

// Export the Loader component as the default export.
export default Loader;

// In summary, this module defines a React functional component called Loader.
// It renders a loading spinner using the TailSpin component from the react - loader - spinner library.
// The component applies styles from an external CSS module(Loader.module.css) to control its appearance.
