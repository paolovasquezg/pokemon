import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ToBegin = () => {
	const navigate = useNavigate();
	return (
		<div className="relative min-h-screen">
			<button
				onClick={() => navigate("/")}
				className="absolute top-4 left-4 z-50 flex items-center gap-2 transition-all duration-200 focus:outline-none rounded-full p-2 border-4 border-gray-700 bg-gray-50 shadow-lg hover:bg-blue-100 active:scale-90 focus:ring-4 focus:ring-blue-300 font-mono text-gray-800 text-base"
				title="Go to Begin"
				aria-label="Go to Begin">
				<FaArrowAltCircleLeft size={32} className="text-gray-700" />
				Begin
			</button>
		</div>
	);
};

export default ToBegin;
