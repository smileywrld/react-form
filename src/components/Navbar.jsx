import { FaFileAlt } from "react-icons/fa";

export default function Navbar() {
	return (
		<div className="min-h-screen p-6">
			<div className="bg-white rounded-xl shadow-md p-6">
				{/* Top Section */}
				<div className="flex items-center gap-3 mb-4">
					<FaFileAlt className="text-blue-600 text-2xl" />
					<h1 className="text-lg font-semibold text-gray-800">
						Clinical Psychologist Intake Form
					</h1>
				</div>

				{/* Bottom Section */}
				<div className="flex justify-between text-sm text-gray-600">
					<p>
						Case:{" "}
						<span className="text-blue-600 font-medium">CASE-308101</span>
					</p>

					<p>
						PIC: <span className="">Not Set</span>
					</p>

					<p>
						Date: <span className="text-gray-700">3/13/2026</span>
					</p>
				</div>
			</div>
		</div>
	);
}
