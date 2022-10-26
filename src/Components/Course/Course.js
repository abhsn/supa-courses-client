import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Course({ course }) {
	const { id, name, img, author, rating, price } = course;
	const navigate = useNavigate();

	const fullStar = Math.floor(rating);
	const halfStar = (rating % 1 > 0) ? 1 : 0;
	const emptyStar = 5 - Math.ceil(rating);

	const starArray = [];

	for (let i = 0; i < fullStar; i++) {
		starArray.push(<p><small><FaStar /></small></p>)
	}

	for (let i = 0; i < halfStar; i++) {
		starArray.push(<p><small><FaStarHalf /></small></p>)
	}

	for (let i = 0; i < emptyStar; i++) {
		starArray.push(<p><small><FaRegStar /></small></p>)
	}

	// console.log(fullStar, halfStar, emptyStar);

	const handleNavigate = () => {
		navigate(`/course/${id}`);
	}

	return (
		<div onClick={handleNavigate} className="flex flex-col [box-shadow:10px_10px_25px_#ffffff1a] hover:[box-shadow:10px_10px_25px_#ffffff33] hover:cursor-pointer rounded-md">
			<img src={img} alt={name} className="object-cover rounded-md rounded-bl-none rounded-br-none" />
			<div className="p-4">
				<h4 className="text-xl font-bold">{name}</h4>
				<p><small>{author}</small></p>
				<div className="flex flex-row items-center gap-2">
					<p className="text-amber-600"><small>{rating}</small></p>
					<span className="flex">
						{
							starArray.map((star, idx) => <span key={idx} className='text-amber-500'>{star}</span>)
						}
					</span>
					{/* <p><small><FaStar /></small></p> */}
				</div>
				<p className="font-bold"><small>${price}</small></p>
			</div>
		</div>
	);
}

export default Course;