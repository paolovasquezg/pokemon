import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type TemplateProps = {
  children: React.ReactNode;
  left?: string;
  right?: string;
};

const Template = ({ children, left, right }: TemplateProps) => {
  const navigate = useNavigate();
  return (
    <div className="p-4 h-screen flex justify-center items-center overflow-auto">
      <div className="flex flex-row items-center justify-between w-full gap-12">
        <button
          disabled={!left}
          onClick={() => left && navigate(left)}
          className={`transition-all duration-200 focus:outline-none rounded-full p-2 ${left ? 'hover:bg-blue-100 active:scale-90 focus:ring-4 focus:ring-blue-300' : 'opacity-50 cursor-not-allowed'}`}
          title="Go left"
          aria-label="Go left"
        >
          <FaArrowAltCircleLeft size={48} className="text-gray-500" />
        </button>
        <div className="flex items-center justify-center">
          {children}
        </div>

        <button
          disabled={!right}
          onClick={() => right && navigate(right)}
          className={`transition-all duration-200 focus:outline-none rounded-full p-2 ${right ? 'hover:bg-blue-100 active:scale-90 focus:ring-4 focus:ring-blue-300' : 'opacity-50 cursor-not-allowed'}`}
          title="Go right"
          aria-label="Go right"
        >
          <FaArrowAltCircleRight size={48} className="text-gray-500" />
        </button>
        </div>
        </div>
)
}

export default Template