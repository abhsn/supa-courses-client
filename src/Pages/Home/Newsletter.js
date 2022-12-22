import { toast } from "react-hot-toast";

function Newsletter() {

	const handleSubmit = e => {
		e.preventDefault();
		toast.success('Successfully subscribed');
	}

	return (
		<div className="flex flex-col gap-4">
			<h3 className="text-2xl font-bold text-center">Newsletter</h3>
			<p className="text-center">Subscribe to our newsletter and stay connected</p>
			<form onSubmit={handleSubmit} className="bg-base-300 grid place-content-center p-8">
				<>
					<input type="email" placeholder="Email" className="input input-bordered w-full" required />
					<button className="btn mt-4">Subscribe</button>
				</>
			</form>
		</div>
	)
}

export default Newsletter;