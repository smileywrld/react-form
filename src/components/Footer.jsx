const Footer = ({
	onPrevious,
	onNext,
	onSaveDraft,
	previousDisabled = false,
	nextDisabled = false,
	nextLabel = "Next",
}) => {
	return (
		<div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
			<button
				type="button"
				onClick={onPrevious}
				disabled={previousDisabled}
				className={`rounded-md border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
					previousDisabled ? "opacity-50 cursor-not-allowed" : ""
				}`}
			>
				Previous
			</button>

			<button
				type="button"
				onClick={onSaveDraft}
				className="rounded-md border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
			>
				Save Draft
			</button>

			<button
				type="button"
				onClick={onNext}
				disabled={nextDisabled}
				className={`rounded-md bg-indigo-600 px-8 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
					nextDisabled ? "opacity-60 cursor-not-allowed" : ""
				}`}
			>
				{nextLabel}
			</button>
		</div>
	);
};

export default Footer;
