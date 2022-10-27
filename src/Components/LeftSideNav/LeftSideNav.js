import { Link } from "react-router-dom";

function LeftSideNav({ courses }) {
	return (
		<div className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content flex gap-4">
			{
				courses.map(course => <Link key={course.id} to={`/course/${course.id}`} className="btn btn-ghost text">{course.name}</Link>)
			}
		</div>
	);
}

export default LeftSideNav;