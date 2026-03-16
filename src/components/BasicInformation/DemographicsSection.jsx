import React from "react";

const DemographicsSection = ({ formik }) => {
	return (
		<>
			<div className="grid grid-cols-2 gap-4 mt-5">

				<div>
					<label>Age *</label>
					<input
						name="age"
						type="number"
						onChange={formik.handleChange}
						value={formik.values.age}
						className="w-full border px-3 py-2"
					/>
				</div>

				<div>
					<label>Sex *</label>

					<div className="flex gap-4 mt-1">
						{["Male", "Female", "Other"].map((sex) => (
							<label key={sex}>
								<input
									type="radio"
									name="sex"
									value={sex}
									checked={formik.values.sex === sex}
									onChange={formik.handleChange}
								/>
								{sex}
							</label>
						))}
					</div>
				</div>
			</div>

			<div className="mt-5">
				<label>Ethnicity *</label>

				<div className="flex gap-4 mt-2">
					{["Malay", "Chinese", "Indians", "Others"].map((eth) => (
						<label key={eth}>
							<input
								type="radio"
								name="ethnicity"
								value={eth}
								checked={formik.values.ethnicity === eth}
								onChange={formik.handleChange}
							/>
							{eth}
						</label>
					))}
				</div>
			</div>
		</>
	);
};

export default DemographicsSection;