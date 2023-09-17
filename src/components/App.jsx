import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Button from './Button/Button';

const App = () => {
  // Define states for managing data and UI interactions
  const [images, setImages] = useState([]); // Store fetched images
  const [query, setQuery] = useState(''); // Store search query
  const [loading, setLoading] = useState(false); // Indicates if data is being fetched
  const [page, setPage] = useState(1); // Current page for pagination
  const [selectedImage, setSelectedImage] = useState(null); // Selected image for modal

  // Use useEffect to fetch images when query or page changes
  useEffect(() => {
    // Check if there is no query (initial state)
    if (!query) {
      return;
    }

    // Function to fetch data from the Pixabay API
    const fetchData = async () => {
      setLoading(true); // Set loading to true while fetching data
      try {
        // Send a GET request to the Pixabay API with the search query and page number
        const response = await axios.get(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=38254516-2765675488b69046bf2822686&image_type=photo&orientation=horizontal&per_page=12`
        );

        // Append the new images to the existing ones in the state
        setImages(prevImages => [...prevImages, ...response.data.hits]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchData(); // Call the fetchData function
  }, [query, page]); // Watch for changes in query and page

  // Handle search form submission
  const handleSearchSubmit = searchTerm => {
    setQuery(searchTerm); // Update the query state
    setImages([]); // Clear the images state
    setPage(1); // Reset the page to the first page
  };

  // Handle "Load More" button click to load more images
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1); // Increment the page number
  };

  // Handle clicking on an image to open the modal
  const handleImageClick = imageUrl => {
    setSelectedImage(imageUrl); // Set the selected image URL
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setSelectedImage(null); // Clear the selected image URL
  };

  // Render the app's UI
  return (
    <div className="app">
      <Searchbar onSubmit={handleSearchSubmit} />
      {loading && <Loader />} {/* Display a loader when loading */}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {/* Display "Load More" button when there are images and not loading */}
      {images.length > 0 && !loading && <Button onClick={handleLoadMore} />}
      {selectedImage && (
        // Display the modal when a selected image exists
        <Modal imageUrl={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;

// This module is a React component named App, which serves as the main component for an image search application. Here is a summary of its functionality:

// State Management: It uses React's useState and useEffect hooks to manage various states, including images (to store fetched images), query (to store the search query), loading (to indicate if data is being fetched), page (for pagination), and selectedImage (to display a selected image in a modal).

// Fetching Images: When the component mounts or when the search query or page changes, it sends a GET request to the Pixabay API to fetch images based on the user's query and current page.

// Handling User Interactions:

// handleSearchSubmit: Handles the submission of the search form by updating the query, clearing the images array, and resetting the page to 1.
// handleLoadMore: Increments the page when the "Load More" button is clicked to load additional images.
// handleImageClick: Sets the selectedImage state when a user clicks on an image to display it in a modal.
// handleCloseModal: Clears the selectedImage state when the modal is closed.
// Rendering UI Components: The component renders various UI components:

// <Searchbar>: Allows users to input search queries and submit the form.
// <Loader>: Displays a loading spinner while fetching data.
// <ImageGallery>: Displays a grid of images fetched from the Pixabay API.
// <Button>: Appears to load more images when there are results.
// <Modal>: Shows a modal with a larger version of the selected image when clicked.
// Overall, this App component creates a simple and responsive image search application that allows users to search for images, view them in a gallery, load more results, and see larger versions of selected images in a modal.
