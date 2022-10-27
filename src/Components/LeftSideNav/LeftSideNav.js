import { Link } from "react-router-dom";

function LeftSideNav({ courses }) {
	return (
		<div>
			<div className={`menu p-4 overflow-y-auto md:w-80 bg-base-300 text-base-content flex gap-4 md:py-0 h-full md:bg-transparent`}>
				{
					courses.map(course => <Link key={course.id} to={`/course/${course.id}`} className="btn btn-xs sm:btn-sm md:btn-md btn-ghost">{course.name}</Link>)
				}
			</div>
		</div>
	);
}

export default LeftSideNav;