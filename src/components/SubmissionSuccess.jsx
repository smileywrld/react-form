import { FiCheck } from "react-icons/fi";
import { MdFileDownload } from "react-icons/md";

const SubmissionSuccess = ({ caseID, onNewForm, onExportPdf }) => {
	return (
		<div className="min-h-screen bg-gray-200 px-6 py-10 flex items-center justify-center">
			<div className="bg-white rounded-2xl shadow-xl w-full max-w-xl px-10 py-12 text-center">
				<div className="mx-auto h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
					<FiCheck className="text-green-600 text-5xl" />
				</div>

				<h2 className="mt-8 text-2xl font-semibold text-gray-900">
					Form Submitted Successfully
				</h2>
				<p className="mt-3 text-lg text-gray-600">
					Clinical intake form for has been submitted.
				</p>
				<p className="mt-2 text-lg text-gray-600">
					Case ID:{" "}
					<span className="font-semibold text-gray-800">
						{caseID || "CASE-000000"}
					</span>
				</p>

				<div className="mt-10 flex items-center justify-center gap-5">
					<button
						type="button"
						onClick={onNewForm}
						className="rounded-xl bg-indigo-600 px-10 py-4 text-white text-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						New Form
					</button>
					<button
						type="button"
						onClick={onExportPdf}
						className="rounded-xl border border-gray-300 bg-white px-10 py-4 text-gray-800 text-lg font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 inline-flex items-center justify-center gap-3"
					>
						<MdFileDownload className="text-2xl" />
						Export PDF
					</button>
				</div>
			</div>
		</div>
	);
};

export default SubmissionSuccess;

