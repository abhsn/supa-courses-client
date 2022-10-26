import { useContext } from "react";
import { PrivateContext } from "../PrivateRoute/PrivateRoute";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function GetPremium() {
	const course = useContext(PrivateContext);
	const { name, price } = course;
	const navigate = useNavigate();
	const [isDate, setIsDate] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
	}

	return (
		<div className="w-9/12 mx-auto">
			<span>Checkout for the course bellow</span>
			<h3 className="py-8 text-3xl">{name}</h3>
			<form className="grid gap-y-8" onSubmit={handleSubmit}>
				<div>
					<p className="text-bold">Payment Details</p>
					<div className="grid grid-cols-3 gap-x-6">
						<input type="text" placeholder="Name on card" className="input col-start-1 col-end-4 border-2 border-slate-500 rounded-none border-l-0 border-t-0 border-r-0 focus:outline-none px-0" />
						<br />
						<input type="number" placeholder="Card number" className="col-start-1 input border-2 border-slate-500 rounded-none border-l-0 border-t-0 border-r-0 focus:outline-none px-0" />
						<input type={(isDate) ? "date" : "text"} onFocus={() => setIsDate(true)} onBlur={() => setIsDate(false)} placeholder="Expiry" className="col-start-2 input border-2 border-slate-500 rounded-none border-l-0 border-t-0 border-r-0 focus:outline-none px-0" />
						<input type="number" placeholder="CVV" className="col-start-3 input border-2 border-slate-500 rounded-none border-l-0 border-t-0 border-r-0 focus:outline-none px-0" />
					</div>
				</div>
				<div>
					<p className="text-bold">Billing Address</p>
					<div className="grid grid-cols-2 gap-x-6">
						<input type="text" placeholder="Street address" className="input border-2 border-slate-500 rounded-none border-l-0 border-t-0 border-r-0 focus:outline-none px-0" />
						<input type="text" placeholder="City" className="input border-2 border-slate-500 rounded-none border-l-0 border-t-0 border-r-0 focus:outline-none px-0" />
						<input type="text" placeholder="State" className="input border-2 border-slate-500 rounded-none border-l-0 border-t-0 border-r-0 focus:outline-none px-0" />
						<input type="text" placeholder="Zip code" className="input border-2 border-slate-500 rounded-none border-l-0 border-t-0 border-r-0 focus:outline-none px-0" />
					</div>
				</div>
				<div className="flex items-center justify-end gap-4">
					<button onClick={() => navigate(-1)} className="btn px-10"><MdArrowBackIosNew className="mr-2" />Go back</button>
					<button className="btn px-10 text-blue-400">Pay ${price}</button>
				</div>
			</form>
		</div>
	);
}

export default GetPremium;