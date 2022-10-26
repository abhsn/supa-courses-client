import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { FaCrown } from "react-icons/fa";

function CourseDetails() {
	const params = useParams();
	const courseArray = useLoaderData();
	const [course] = courseArray;
	const { id, name, img, author, rating, price } = course;
	// console.log(params.id);
	// console.log(course);
	const navigate = useNavigate();
	return (
		<div className="flex flex-col w-9/12 mx-auto items-center gap-8">
			<h2>{name}</h2>
			<img src={img} alt={name} className="w-9/12 mx-auto" />
			<div className="flex gap-4">
				<button onClick={() => navigate(-1)} className='btn btn'>Go Back</button>
				<button onClick={() => navigate(-1)} className='btn btn text-amber-600 flex gap-2'><span className="text-xl"><FaCrown /></span>Get premium access</button>
			</div>
		</div>
	);
}

export default CourseDetails;