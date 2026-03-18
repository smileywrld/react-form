import "./App.css";
import { useCallback, useMemo, useRef, useState } from "react";
import { FormikProvider, useFormik } from "formik";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BasicInformation from "./components/BasicInformation";
import CaseTypeSelection from "./components/CaseTypeSelection";
import Overview from "./components/Overview";

import { DEFAULT_FORM_DATA } from "./wizard/initialFormData";
import { STEP_COMPONENTS } from "./wizard/stepRegistry";
import { getSteps } from "./wizard/steps";

function App() {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);
	const basicInformationRef = useRef(null);

	const formik = useFormik({
		initialValues: DEFAULT_FORM_DATA,
		onSubmit: () => {},
	});

	const formData = formik.values;

	const handleFormDataChange = useCallback(
		(next) => {
			if (typeof next === "function") {
				formik.setValues(next(formik.values));
				return;
			}
			if (next && typeof next === "object") {
				formik.setValues({ ...formik.values, ...next });
			}
		},
		[formik],
	);

	const steps = useMemo(() => {
		return getSteps(formData.caseType);
	}, [formData.caseType]);

	const safeCurrentStepIndex = Math.min(
		currentStepIndex,
		Math.max(0, steps.length - 1),
	);

	const canGoPrevious = safeCurrentStepIndex > 0;
	const canGoNext = safeCurrentStepIndex < steps.length - 1;
	const currentStepId = steps[safeCurrentStepIndex]?.id;
	const nextDisabled =
		!canGoNext ||
		(currentStepId === "case-type-selection" && !formData.caseType);

	const handlePrevious = useCallback(() => {
		setCurrentStepIndex(Math.max(0, safeCurrentStepIndex - 1));
	}, [safeCurrentStepIndex]);

	const handleNext = useCallback(async () => {
		const stepId = steps[safeCurrentStepIndex]?.id;
		if (stepId === "case-type-selection" && !formData.caseType) return;

		if (safeCurrentStepIndex >= steps.length - 1) {
			await formik.submitForm();
			return;
		}

		setCurrentStepIndex(Math.min(steps.length - 1, safeCurrentStepIndex + 1));
	}, [formData.caseType, safeCurrentStepIndex, steps]);

	const handleStepChange = useCallback(
		(index) => setCurrentStepIndex(index),
		[],
	);

	const content = useMemo(() => {
		if (currentStepId === "basic-information") {
			return <BasicInformation ref={basicInformationRef} />;
		}

		if (currentStepId === "case-type-selection") {
			return <CaseTypeSelection />;
		}

		const DynamicComponent = STEP_COMPONENTS[currentStepId];
		if (!DynamicComponent) return null;
		return <DynamicComponent />;
	}, [currentStepId]);

	return (
		<FormikProvider value={formik}>
			<form onSubmit={formik.handleSubmit}>
				<div className="min-h-screen bg-gray-200 px-56 py-6">
					<div className="max-w-6xl mx-auto space-y-6">
						<Overview formData={formData} />

						<div className="bg-white rounded-xl shadow-md p-6">
							<Header
								steps={steps}
								currentStepIndex={safeCurrentStepIndex}
								onStepChange={handleStepChange}
							/>

							<div className="mt-6">{content}</div>

							<Footer
								onPrevious={handlePrevious}
								onNext={handleNext}
								previousDisabled={!canGoPrevious}
								nextDisabled={nextDisabled}
								nextLabel={
									safeCurrentStepIndex === steps.length - 1
										? "Submit Form"
										: "Next"
								}
								nextVariant={
									safeCurrentStepIndex === steps.length - 1
										? "success"
										: "primary"
								}
							/>
						</div>
					</div>
				</div>
			</form>
		</FormikProvider>
	);
}

export default App;
