// Import React library and styles from an external CSS module.
import React from 'react';
import styles from './ImageGallery.module.css'; // Import CSS styles from the ImageGallery module.
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'; // Import the ImageGalleryItem component.

// Define a functional component named ImageGallery, which receives 'images' and 'onImageClick' props.
const ImageGallery = ({ images, onImageClick }) => {
  return (
    // Create an unordered list with a CSS class 'gallery'.
    <ul className={styles.gallery}>
      {/* Map through the 'images' array and render an ImageGalleryItem component for each image. */}
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          imageUrl={image.webformatURL}
          onClick={() => onImageClick(image.largeImageURL)}
        />
      ))}
    </ul>
  );
};

// Export the ImageGallery component as the default export.
export default ImageGallery;

// In summary, this module defines a React functional component called ImageGallery.
// It renders a list of images with each image represented by the ImageGalleryItem component.
// The component applies styles from an external CSS module(ImageGallery.module.css).
// It receives an images prop, which is an array of image data, and an onImageClick prop to handle image click events.
