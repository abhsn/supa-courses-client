import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../../Components/Course/Course";
import LeftSideNav from "../../Components/LeftSideNav/LeftSideNav";
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from 'react-icons/bs';

function Courses() {
	const courses = useLoaderData();
	const [hide, setHide] = useState(true);

	useEffect(() => {
		if (window.innerWidth >= 640) {
			setHide(false);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 640) {
				setHide(false);
			}
		})
	}, [])

	// console.log(hide);

	return (
		<div className="md:grid grid-cols-12 sm:px-8 md:px-0">
			<div className="fixed top-16 md:top-24 left-0 h-full md:col-start-1 md:col-end-4 bg-base-300 md:bg-transparent">
				<div className={`${(hide) ? 'hidden' : 'block'} relative`}>
					<LeftSideNav hide={hide} setHide={setHide} courses={courses} />
					{/* <div onClick={() => setHide(true)} className={`${(hide) ? 'hidden' : 'block'} md:hidden absolute top-1/2 translate-y-[-50%] translate-x-1/2 right-0 grid place-content-center w-10 h-10 font-bold text-4xl hover:opacity-100 cursor-pointer`} title="Click to collapse"><BsFillArrowLeftSquareFill /></div> */}
				</div>
				<div onClick={() => setHide(false)} className={`${(hide) ? 'block' : 'hidden'} block md:hidden fixed top-1/2 translate-y-[-50%] text-right w-10 h-10 font-bold text-4xl hover:opacity-100 cursor-pointer`} title="Click to expand"><BsFillArrowRightSquareFill /></div>
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