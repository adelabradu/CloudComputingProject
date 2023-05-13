// js/components/MainPage.jsx
export default function InsertPage() {
	const insertRecord = async (e) => {
		e.preventDefault();

		const title = document.getElementById('title').value;
		const description = document.getElementById('description').value;
		const data = {
			titlu: title,
			descriere: description
		};

		console.log(data);

		fetch("/api/records", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then( () => {
				console.log("A records has been uploaded")
				document.getElementById('title').value = '';
				document.getElementById('description').value = '';
			})
	}

	return (
		<section className={"bg-white"}>
			<div className={"container px-6 py-10 mx-auto"}>
				<h1 className={"w-[500px] mx-auto text-center text-6xl font-bold text-pink-600"}>Introdu filmul</h1>
				<p className={"w-[1000px] mx-auto text-center mt-4 text-3xl text-pink-600"}>Aici poti introduce filmul ce ti s-a parut interesant si descrierea sa</p>
				<br></br>

				<form>
					<div className="mb-6">
						<label htmlFor="email" className="block mb-2 text-sm font-medium text-purple-950 dark:text-white">Titlul filmului</label>
						<input type="text" id="title"
						       className="bg-purple-50 border border-pink-400 text-purple-950 text-sm rounded-lg focus:ring-pink-400 focus:border-pink-400 block w-full p-2.5 dark:bg-pink-700 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-pink-400 dark:focus:border-pink-400"
						       placeholder="Titlu" required/>
					</div>
					<div className="mb-6">
						<label htmlFor="description"
						       className="block mb-2 text-sm font-medium text-purple-950 dark:text-white">Descrierea filmului</label>
						<textarea id="description"
						          className="bg-purple-50 border border-pink-400 text-purple-950 text-sm rounded-lg focus:ring-pink-400 focus:border-pink-400 block w-full p-2.5 dark:bg-pink-700 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-pink-400 dark:focus:border-pink-400"
								  placeholder="Descriere"
								  required/>
					</div>
					<button type="submit"
					        onClick={ insertRecord }
					        className="mt-4 text-purple-950 bg-gradient-to-r from-purple-500 via-purple-200 to-purple-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
						Salveaza
					</button>
				</form>

			</div>
		</section>
	)
}