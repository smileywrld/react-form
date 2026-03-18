import { FiCheck } from "react-icons/fi";
import { MdFileDownload } from "react-icons/md";

const SubmissionSuccess = ({ caseID, onNewForm, onExportPdf }) => {
	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-200 px-4 py-8 sm:px-6 sm:py-10">
			<div className="w-full max-w-xl rounded-2xl bg-white px-6 py-10 text-center shadow-xl sm:px-10 sm:py-12">
				<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 sm:h-24 sm:w-24">
					<FiCheck className="text-4xl text-green-600 sm:text-5xl" />
				</div>

				<h2 className="mt-8 text-xl font-semibold text-gray-900 sm:text-2xl">
					Form Submitted Successfully
				</h2>
				<p className="mt-3 text-base text-gray-600 sm:text-lg">
					Clinical intake form for has been submitted.
				</p>
				<p className="mt-2 text-base text-gray-600 sm:text-lg">
					Case ID:{" "}
					<span className="font-semibold text-gray-800">
						{caseID || "CASE-000000"}
					</span>
				</p>

				<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-5">
					<button
						type="button"
						onClick={onNewForm}
						className="w-full rounded-xl bg-indigo-600 px-8 py-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto sm:px-10 sm:text-lg"
					>
						New Form
					</button>
					<button
						type="button"
						onClick={onExportPdf}
						className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto sm:px-10 sm:text-lg"
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
