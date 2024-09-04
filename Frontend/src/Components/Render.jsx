import { useNavigate } from "react-router-dom";

export function Render({ allusers }) {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 mt-5 transition-all duration-200 ease-in-out mb-4">
            <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-lg font-semibold text-gray-700">
                        {allusers.firstname.charAt(0).toUpperCase()}
                        {allusers.lastname.charAt(0).toUpperCase()}
                    </span>
                </div>
                <div>
                    <h1 className="text-gray-900 font-semibold text-lg">
                        {allusers.firstname} {allusers.lastname}
                    </h1>
                    <h2 className="text-gray-500 text-sm">
                        {allusers.username}
                    </h2>
                </div>
            </div>
            <button
                className="bg-blue-600 text-white py-2 px-4 rounded-md border border-blue-700 hover:bg-blue-700 hover:shadow-lg transition-all duration-200 ease-in-out"
                onClick={() => navigate(`/sendmoney/${allusers.username}`)}
            >
                Send Money
            </button>
        </div>
    );
}
