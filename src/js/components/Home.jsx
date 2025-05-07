import React, { useState, useEffect } from "react";


let url = "https://playground.4geeks.com/todo";


//create your first component
const Home = () => {
	const [data, setData] = useState([]);

	
		fetch(`${url}/users/Tito`)
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				console.log(data);
				setData(data);
				
			})
			.catch(error => {
				console.log(error);
			})
			
	useEffect(() => {
	}, [])

	return (
		<>
			<div className="container">
				<div>
					<ul>
						
					</ul>
				</div>
			</div>
		</>
	);
};

export default Home;