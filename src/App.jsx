import "./App.css";
import { useCallback, useMemo, useState } from "react";
import { FormikProvider, useFormik } from "formik";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BasicInformation from "./components/BasicInformation";
import CaseTypeSelection from "./components/CaseTypeSelection";
import Overview from "./components/Overview";
import SubmissionSuccess from "./components/SubmissionSuccess";

import { DEFAULT_FORM_DATA } from "./wizard/initialFormData";
import { STEP_COMPONENTS } from "./wizard/stepRegistry";
import { getSteps } from "./wizard/steps";
import { validateWithSchema } from "./wizard/validationSchema";

const DRAFT_STORAGE_KEY = "react-form:draft:v1";

const loadDraft = () => {
	try {
		const raw = window.localStorage.getItem(DRAFT_STORAGE_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		if (!parsed || typeof parsed !== "object") return null;
		return parsed;
	} catch {
		return null;
	}
};

function App() {
	const draft = useMemo(() => loadDraft(), []);
	const [currentStepIndex, setCurrentStepIndex] = useState(
		() => draft?.currentStepIndex ?? 0,
	);
	const [lastSavedAt, setLastSavedAt] = useState(() => draft?.savedAt ?? null);
	const [submitted, setSubmitted] = useState(false);
	const [submittedCaseId, setSubmittedCaseId] = useState(null);

	const formik = useFormik({
		initialValues: draft?.values ?? DEFAULT_FORM_DATA,
		validate: validateWithSchema,
		validateOnBlur: true,
		validateOnChange: false,
		onSubmit: async (values) => {
			setSubmittedCaseId(values?.caseID ?? null);
			setSubmitted(true);
			try {
				window.localStorage.removeItem(DRAFT_STORAGE_KEY);
			} catch {
				// ignore
			}
		},
	});

	const formData = formik.values;

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
	}, [formData.caseType, formik, safeCurrentStepIndex, steps]);

	const handleSaveDraft = useCallback(() => {
		const savedAt = new Date().toISOString();
		setLastSavedAt(savedAt);
		try {
			window.localStorage.setItem(
				DRAFT_STORAGE_KEY,
				JSON.stringify({
					values: formik.values,
					currentStepIndex: safeCurrentStepIndex,
					savedAt,
				}),
			);
		} catch {
			// ignore
		}
	}, [formik.values, safeCurrentStepIndex]);

	const handleStepChange = useCallback(
		(index) => setCurrentStepIndex(index),
		[],
	);

	const content = useMemo(() => {
		if (currentStepId === "basic-information") {
			return <BasicInformation />;
		}

		if (currentStepId === "case-type-selection") {
			return <CaseTypeSelection />;
		}

		const DynamicComponent = STEP_COMPONENTS[currentStepId];
		if (!DynamicComponent) return null;
		return <DynamicComponent />;
	}, [currentStepId]);

	const handleNewForm = useCallback(() => {
		setSubmitted(false);
		setSubmittedCaseId(null);
		setLastSavedAt(null);
		setCurrentStepIndex(0);
		formik.resetForm({ values: DEFAULT_FORM_DATA });
		try {
			window.localStorage.removeItem(DRAFT_STORAGE_KEY);
		} catch {
			// ignore
		}
	}, [formik]);

	const handleExportPdf = useCallback(() => {
		window.print();
	}, []);

	if (submitted) {
		return (
			<SubmissionSuccess
				caseID={submittedCaseId ?? formData?.caseID}
				onNewForm={handleNewForm}
				onExportPdf={handleExportPdf}
			/>
		);
	}

	return (
		<FormikProvider value={formik}>
			<form onSubmit={formik.handleSubmit}>
				<div className="min-h-screen bg-gray-200 px-56 py-6">
					<div className="max-w-6xl mx-auto space-y-6">
						<Overview formData={formData} lastSavedAt={lastSavedAt} />

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
								onSaveDraft={handleSaveDraft}
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
