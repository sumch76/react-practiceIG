import { useEffect, useState } from 'react';

const App = () => {
  const [post, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const[totalPage,setTotalPage]=useState(0);
   const perPage=10;//no of posts per page
  useEffect(() => {
    const fetchData = async () => {
      const skip=(page-1)*perPage;
      const response = await fetch(
        `https://dummyjson.com/posts?limit=${perPage}&skip=${skip}`
      );
      const data = await response.json();
      console.log(data);
      setPosts(data.posts);
      if(totalPage===0)
      {
        setTotalPage(Math.ceil(data.total/perPage));
      }
    };
    fetchData();
  }, [page,setTotalPage]);

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };
  const handleNext = () => {
    setPage((next) => next + 1);
  };
  return (
    <div>
      <table
        border="1"
        cellPadding="5px"
        style={{ borderCollapse: 'collapse' }}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>title</th>
            <th>tags</th>
            <th>Views</th>
          </tr>
        </thead>
        <tbody>
          {post.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.tags.join(' ')}</td>
              <td>{item.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handlePrev} disabled={page==1}>prev</button>
      <span style={{margin:"0 10px"}}>Page:{page} of {totalPage}</span>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
export default App;
