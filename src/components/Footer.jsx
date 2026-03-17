const Footer = ({
	onPrevious,
	onNext,
	onSaveDraft,
	previousDisabled = false,
	nextDisabled = false,
	nextLabel = "Next",
	nextVariant = "primary",
}) => {
	const nextButtonClassName =
		nextVariant === "success"
			? "bg-green-600 hover:bg-green-700 focus:ring-green-500"
			: "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500";

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
				className={`rounded-md px-8 py-2.5 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${nextButtonClassName} ${
					nextDisabled ? "opacity-60 cursor-not-allowed" : ""
				}`}
			>
				{nextLabel}
			</button>
		</div>
	);
};

export default Footer;
