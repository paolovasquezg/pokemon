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
    <div className="h-screen w-full overflow-hidden relative">
      <button
        disabled={!left}
        onClick={() => left && navigate(left)}
        className={`fixed left-2 top-1/2 -translate-y-1/2 z-20
          transition-all duration-200 rounded-full p-2
          ${left
            ? 'hover:bg-blue-100 active:scale-90 focus:ring-4 focus:ring-blue-300'
            : 'opacity-50 cursor-not-allowed'
          }`}
        aria-label="Go left"
      >
        <FaArrowAltCircleLeft size={48} className="text-gray-500" />
      </button>

      <div className="flex justify-center items-center h-full px-20 overflow-auto">
        {children}
      </div>

      <button
        disabled={!right}
        onClick={() => right && navigate(right)}
        className={`fixed right-2 top-1/2 -translate-y-1/2 z-20
          transition-all duration-200 rounded-full p-2
          ${right
            ? 'hover:bg-blue-100 active:scale-90 focus:ring-4 focus:ring-blue-300'
            : 'opacity-50 cursor-not-allowed'
          }`}
        aria-label="Go right"
      >
        <FaArrowAltCircleRight size={48} className="text-gray-500" />
      </button>
    </div>

)
}

export default Template