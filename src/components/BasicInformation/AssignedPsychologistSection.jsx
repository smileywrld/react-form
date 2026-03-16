import React from "react";

const AssignedPsychologistSection = ({ formik }) => {
	const psychs = [
		{ label: "Ms. Lee Li Li", value: "ms-lee-li" },
		{ label: "Ms. Hiew Yuk Wei", value: "ms-hiew" },
		{ label: "Other", value: "other" },
	];

	return (
		<div className="mt-5">
			<label>Assigned Psychologist *</label>

			<div className="space-y-2 mt-2">
				{psychs.map((p) => (
					<label key={p.value} className="flex items-center gap-2">
						<input
							type="radio"
							name="assignedPsychologist"
							value={p.value}
							checked={formik.values.assignedPsychologist === p.value}
							onChange={formik.handleChange}
						/>

						{p.label}
					</label>
				))}
			</div>

			{formik.values.assignedPsychologist === "other" && (
				<input
					type="text"
					name="assignedPsychologistOther"
					onChange={formik.handleChange}
					value={formik.values.assignedPsychologistOther}
					className="border mt-3 p-2 w-full"
					placeholder="Please specify..."
				/>
			)}
		</div>
	);
};

export default AssignedPsychologistSection;
