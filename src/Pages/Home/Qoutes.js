import { useEffect, useState } from "react";
import Quote from "./Qoute";

function Qoutes() {
	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
		fetch('https://b612-used-products-resale-server-side-abhsn.vercel.app/quotes')
			.then(res => res.json())
			.then(data => setQuotes(data));
	}, []);

	return (
		<section className="my-10">
			<h3 className="text-2xl font-bold text-center">Testimonial</h3>
			<p className="text-center">Learn what our customer says about our products</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center my-4 gap-6 mx-4">
				{
					quotes.map(quote => <Quote key={quote._id} quote={quote} />)
				}
			</div>
		</section>
	)
}

export default Qoutes;