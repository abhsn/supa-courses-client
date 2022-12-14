import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaCrown, FaFilePdf } from "react-icons/fa";
import { MdOutlineDownloading } from "react-icons/md";
import LeftSideNav from "../../Components/LeftSideNav/LeftSideNav";
import { useEffect } from "react";
import { useState } from "react";
import SaveAsPDF from "../../Components/SaveAsPDF/SaveAsPDF";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

function CourseDetails() {
	const [course] = useLoaderData();
	const { id, name, img, details, author } = course;

	const [courses, setCourses] = useState([]);
	const [hide, setHide] = useState(true);

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
			{!hide && <LeftSideNav hide={hide} setHide={setHide} courses={courses} />}

			{/* cursor to show navbar */}
			<div onClick={() => setHide(false)} className={`${(hide) ? 'block' : 'hidden'} block md:hidden fixed top-1/2 translate-y-[-50%] text-right w-10 h-10 font-bold text-4xl hover:opacity-100 cursor-pointer`} title="Click to expand"><BsFillArrowRightSquareFill /></div>

			<div className="flex flex-col w-9/12 items-center mx-auto gap-8">
				<div className="flex flex-col gap-3">
					<h2 className="text-4xl font-bold flex items-center gap-5">{name}
						<span className="cursor-pointer" title="Download this page">
							<PDFDownloadLink document={<SaveAsPDF course={course} />} fileName={name}>
								{({ loading }) => (loading ? <MdOutlineDownloading /> : <FaFilePdf />)}
							</PDFDownloadLink>
						</span>
					</h2>

					<p>{details}</p>
					<p><small>By <span className="font-bold">{author}</span></small></p>
				</div>
				<img src={img} alt={name} className="w-9/12 mx-auto" />
				<div className="flex gap-4">
					<button onClick={() => navigate(-1)} className='btn'>Go Back</button>
					<Link to={`/get_premium/${id}`} className='btn text-amber-600 flex gap-2'><span className="text-xl"><FaCrown /></span>Get premium access</Link>
				</div>
			</div>
		</div>
	);
}

export default CourseDetails;