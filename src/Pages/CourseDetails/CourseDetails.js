import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import LeftSideNav from "../../Components/LeftSideNav/LeftSideNav";
import { useEffect } from "react";
import { useState } from "react";

function CourseDetails() {
	const [course] = useLoaderData();
	const { id, name, img, details, author, rating, price } = course;

	const [courses, setCourses] = useState([]);

	useEffect(() => {
		fetch('https://b610-lerning-platform-server-side-abhsn.onrender.com/api/courses')
			.then(res => res.json())
			.then(data => setCourses(data))
			.catch(err => console.error(err));
	})

	// console.log(params.id);
	// console.log(course);
	const navigate = useNavigate();
	return (
		<div className="flex">
			<LeftSideNav courses={courses} />
			<div className="flex flex-col w-9/12 mx-auto items-center gap-8">
				<h2 className="text-4xl font-bold">{name}</h2>
				<p>{details}</p>
				<img src={img} alt={name} className="w-9/12 mx-auto" />
				<div className="flex gap-4">
					<button onClick={() => navigate(-1)} className='btn btn'>Go Back</button>
					<Link to={`/get_premium/${id}`} className='btn text-amber-600 flex gap-2'><span className="text-xl"><FaCrown /></span>Get premium access</Link>
				</div>
			</div>
		</div>
	);
}

export default CourseDetails;