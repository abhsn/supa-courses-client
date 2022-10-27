import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../../Components/Course/Course";
import LeftSideNav from "../../Components/LeftSideNav/LeftSideNav";

function Courses() {
	const courses = useLoaderData();
	const [hide, setHide] = useState(true);

	useEffect(() => {
		if (window.innerWidth >= 480) {
			setHide(false);
		}
	}, []);

	return (
		<div className="md:grid grid-cols-12 sm:px-8 md:px-0">
			<div className="fixed top-16 md:top-24 left-0 h-full  md:col-start-1 md:col-end-4 bg-base-300 md:bg-transparent">
				<div className={`${(hide) ? 'hidden' : 'block'}`}>
					<LeftSideNav courses={courses} />
					<div onClick={() => setHide(true)} className={`${(hide) ? 'block' : 'hidden'} absolute top-1/2 translate-y-[-50%] right-0 translate-x-1/2 grid place-content-center bg-slate-300 rounded-full w-10 h-10 opacity-50 text-black font-bold text-4xl hover:opacity-100 cursor-pointer`} title="Click to collapse">←</div>
				</div>
				<div onClick={() => setHide(false)} className={`${(hide) ? 'block' : 'hidden'} md:hidden absolute top-1/2 translate-y-[-50%] translate-x-[-50%] text-right bg-slate-300 rounded-full w-10 h-10 opacity-50 text-black font-bold text-4xl hover:opacity-100 cursor-pointer`} title="Click to expand">→</div>
			</div>
			<div className="grid gap-8 col-start-4 col-end-12 px-6 md:px-0">
				<h3 className="text-4xl">Available courses on Programming Languages</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{
						courses.map(course => <Course key={course.id} course={course} />)
					}
				</div>
			</div>
		</div>
	);
}

export default Courses;