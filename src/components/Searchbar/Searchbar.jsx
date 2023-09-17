// Import React library and useState hook for managing state.
import React, { useState } from 'react';
import styles from './Searchbar.module.css'; // Import CSS styles from the Searchbar module.

// Define a functional component named Searchbar.
const Searchbar = ({ onSubmit }) => {
  // Use the useState hook to manage the 'query' state.
  const [query, setQuery] = useState('');

  // Define a function to handle form submission.
  const handleSubmit = e => {
    e.preventDefault(); // Prevent the default form submission behavior.
    onSubmit(query); // Call the 'onSubmit' function with the current query value.
  };

  return (
    // Render a header element with a CSS class 'searchbar'.
    <header className={styles.searchbar}>
      {/* Render a form element with a CSS class 'form' and 'onSubmit' event handler. */}
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Render an input field for text entry with various attributes and event handlers. */}
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {/* Render a submit button with a CSS class 'button' and 'onClick' event handler. */}
        <button type="submit" className={styles.button}>
          {/* Render a span with a CSS class 'button-label' for button text. */}
          <span className={styles['button-label']}>Search</span>
        </button>
      </form>
    </header>
  );
};

// Export the Searchbar component as the default export.
export default Searchbar;

// In summary, this module defines a React functional component called Searchbar.
// It creates a search bar with an input field and a submit button.
// Users can type a query into the input field and submit it to trigger a search.
// Styles for the search bar are applied using an external CSS module(Searchbar.module.css).
