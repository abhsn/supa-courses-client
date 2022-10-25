import { Link, useLoaderData } from "react-router-dom";
import Course from "../../Components/Course/Course";

function Courses() {
	const courses = useLoaderData();

	return (
		<div className="flex">
			<div className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content flex gap-4">
				{
					courses.map(course => <Link key={course.id} to={`/course/${course.id}`} className="btn-link text-xl">{course.name}</Link>)
				}
			</div>
			<div className="grid gap-8">
				<h3 className="text-4xl">Available courses on Programming Languages</h3>
				<div className="grid grid-cols-3 gap-8">
					{
						courses.map(course => <Course key={course.id} course={course} />)
					}
				</div>
			</div>
		</div>
	);
}

export default Courses;