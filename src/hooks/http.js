import { useState, useEffect } from 'react';

const useHttp = (url) => {

const [loading, updateLoading] = useState(true);
const [data, setData] = useState([]);

useEffect(() => {
	console.log("calling API");
	fetch(url)
	.then(data => data.json())
	.then(data => {
		updateLoading(false);
		setData(data);
	})
	.catch(err => {
		console.log(err,"Error")
	})
}, [url]);

return [loading, data]
};


export default useHttp;