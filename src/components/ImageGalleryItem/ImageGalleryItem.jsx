// Import React library and styles from an external CSS module.
import React from 'react';
import styles from './ImageGalleryItem.module.css'; // Import CSS styles from the ImageGalleryItem module.

// Define a functional component named ImageGalleryItem, which receives 'imageUrl' and 'onClick' props.
const ImageGalleryItem = ({ imageUrl, onClick }) => {
  return (
    // Create a list item with a CSS class 'gallery-item'.
    <li className={styles['gallery-item']}>
      {/* Render an image with the 'imageUrl' as the source and attach an 'onClick' event handler. */}
      <img src={imageUrl} alt="" onClick={onClick} />
    </li>
  );
};

// Export the ImageGalleryItem component as the default export.
export default ImageGalleryItem;

// In summary, this module defines a React functional component called ImageGalleryItem.
// It renders an individual image gallery item, which includes an image with the specified imageUrl.
// The component applies styles from an external CSS module(ImageGalleryItem.module.css) and can execute a provided onClick function when the image is clicked.
