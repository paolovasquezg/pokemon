import { useNavigate } from "react-router-dom";

const Begin = () => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center bg-gray-600 rounded-3xl border-4 border-yellow-400 shadow-2xl p-10 w-full max-w-lg">
                <img src="/logo.svg" alt="Pokémon Logo" className="w-40 h-40 mb-6" />
                    <h1 className="text-5xl font-bold text-center text-yellow-400 mb-4 font-mono" style={{ WebkitTextStroke: '2px #3b82f6' }}>Pokémon Shortcuts</h1>
                <p className="text-white text-lg text-center font-mono mb-2">Explore pokémon information</p>
                    <button
                        className="mt-8 px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-2xl rounded-full shadow-lg border-2 border-blue-400 transition duration-200"
                        title="Enter"
                        onClick={() => navigate("/pokemon")}
                    >
                        Enter
                    </button>
            </div>
        </div>
    )
}

export default Begin;