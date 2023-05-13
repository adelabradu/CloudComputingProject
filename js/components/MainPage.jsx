// js/components/MainPage.jsx
import {useEffect, useState} from "react";

export default function MainPage() {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		try{
			fetch('/api/records', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));
		}
		catch(e){
			console.log(e);
		}
	}, []);

	const deleteRecord = async (e) => {
		e.preventDefault();

		console.log(e.target.id);
		const id = e.target.id;

		try{
			fetch(`/api/records?id=${id}`, {
				method: 'DELETE',
			})
				.then(response => response.json())
				.then(json => {
					setRecords(records.filter(record => record._id !== id));
				});
		}
		catch(e){
			console.log(e);
		}
	}

	console.log(records);

	return (
		<section className={"bg-white"}>
			<div className={"container px-6 py-10 mx-auto"}>
				<h1 className={"w-[500px] mx-auto text-center text-6xl font-bold text-pink-600"}>Filme</h1>
				<p className={"w-[1000px] mx-auto text-center mt-4 text-3xl text-pink-600"}>Mai jos sunt cateva filme interesante pe care ar trebui sa le urmaresti</p>

				<div className={"grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3"}>
					{
						records.map(record => (
							<div key={record._id}
								className={"max-w-sm p-6 bg-white border border-b-purple-100 rounded-lg shadow "}
							>
								<h3 className={"mb-2 text-2xl font-bold text-purple-950"}>{record.titlu}</h3>
								<p className={"font-normal "}>{record.descriere}</p>

								<button type="button"
								        onClick={deleteRecord}
								        id={record._id}
								        className="mt-4 text-purple-950 bg-gradient-to-r from-purple-500 via-purple-200 to-purple-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
									Sterge!
								</button>
							</div>
						))
					}
				</div>
			</div>
		</section>
	)
}