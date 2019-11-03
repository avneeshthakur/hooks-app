import React from 'react';
import useHttp from '../hooks/http';
const Users = (props) => {

const [loading, users] = useHttp('http://jsonplaceholder.typicode.com/users', []);
return (
	<div>
	<h1>All Users</h1>
	{ loading ? 
	  <span>Loading.....</span>
	 : 
	 users.map(data => {
	 	return(
	 		<div key={data.id}>
	 		<p>{data.name}</p>
	 		</div>
	 	)
	 })
	}
  </div>
)};


export default Users;