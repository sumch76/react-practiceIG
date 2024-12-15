import React, { useEffect, useState } from 'react';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  // Fetch posts for the current page
  const fetchPosts = async (pageNumber) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNumber}`
    );
    const data = await response.json();
    setPosts(data); // Update posts to only show current page's data
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  return (
    <>
      <div className="App">
        <h1>Pagination App</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div >
          <button id="prev" onClick={handlePrevPage} disabled={page === 1}>
            Prev
          </button>
          <span>Page {page}</span>
          <button id="next" onClick={handleNextPage}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
//other method to put fetchedPost inside the useEffect

import React, { useEffect, useState } from 'react';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, [page]);

  return (
    <>
      <div className="App">
        <h1>Pagination App</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))} disabled={page === 1}>
            Prev
          </button>
          <span>Page {page}</span>
          <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
        </div>
      </div>
    </>
  );
}

// Pros:
// Self-contained Logic: Fetch logic and dependency (page) are handled together in useEffect, making it easy to see why the effect runs.
// Simpler Fetch Function: No need to declare fetchPosts outside the useEffect.
// Cons:
// Reduced Reusability: If you want to use the fetchPosts logic elsewhere in the component, you cannot directly call it outside the useEffect.
// Potentially Less Clean: Adding all logic inside useEffect can make it harder to read if the effect becomes complex.
// Best Practices:
// Use useEffect for side effects (like fetching data), but keep the effect clean by separating logic into functions (e.g., fetchPosts) outside the useEffect.
// This improves maintainability and allows reusing the logic in other parts of the component if needed.