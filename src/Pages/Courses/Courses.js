import { useLoaderData } from "react-router-dom";
import Course from "../../Components/Course/Course";

function Courses() {
	const courses = useLoaderData();

	return (
		<div className="grid gap-8">
			<h3 className="text-4xl">Available courses on Programming Languages</h3>
			<div className="grid grid-cols-3 gap-8">
				{
					courses.map(course => <Course key={course.id} course={course} />)
				}
			</div>
		</div>
	);
}

export default Courses;