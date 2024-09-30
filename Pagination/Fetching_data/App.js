import React, { useEffect } from 'react';

function App() {
  // Function to fetch posts from the API
  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1');
    const data = await response.json(); // Convert the response to JSON format
    console.log(data); // Log the fetched data to the console
  };

  // Fetch data when the component loads
  useEffect(() => {
    fetchPosts(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <h1>Check the Console for Data</h1>
    </div>
  );
}

export default App;
