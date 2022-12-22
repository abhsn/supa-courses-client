import { Link } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

function LeftSideNav({ courses, hide, setHide }) {
	return (
		<div>
			<div className={`menu fixed top-16 p-4 overflow-y-auto md:w-80 bg-base-300 text-base-content flex gap-4 md:py-0 h-full md:bg-transparent z-10`}>
				<div onClick={() => setHide(true)} className={`${(hide) ? 'hidden' : 'block'} md:hidden absolute top-1/2 translate-y-[-50%] right-0 grid place-content-center w-10 h-10 font-bold text-4xl hover:opacity-100 cursor-pointer`} title="Click to collapse"><BsFillArrowLeftSquareFill /></div>
				{
					courses.map(course => <Link key={course.id} to={`/course/${course.id}`} className="btn btn-xs sm:btn-sm md:btn-md btn-ghost">{course.name}</Link>)
				}
			</div>
		</div>
	);
}

export default LeftSideNav;