import React, { useEffect, useState } from 'react'
export default function App() {
	const [posts, setPosts] = useState([])
	const [page, setPage] = useState(1)

	const fetchPosts = async (pageNumber) => {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNumber}`
		)
		const data = await response.json()
		console.log(data)
		//this is for  adding previous value and current value with it
		//we are using concat
		const prevData = [...posts]
		const newData = prevData.concat(data)
		setPosts(newData)
	}
	const loadingNextPage = () => {
		setPage((count) => count + 1)
	}
	useEffect(() => {
		fetchPosts(page)
	}, [page])
	return (
		<>
			<div className="App">
				<h1>pagination App</h1>
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
				<button id="next" onClick={loadingNextPage}>
					Next Items
				</button>
			</div>
		</>
	)
}
