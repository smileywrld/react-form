import React from "react";

const ClientDetailsSection = ({ formik }) => {
	return (
		<>
			{/* Full Name */}
			<div className="flex flex-col gap-1 mt-5">
				<label htmlFor="fullName" className="text-[#364153]">
					Client Full Name <span className="text-red-600">*</span>
				</label>
				<input
					name="fullName"
					onChange={formik.handleChange}
					value={formik.values.fullName}
					className="w-full border border-[#DADEE3] px-2 py-1 rounded-sm focus:outline-none focus:border-indigo-500"
					placeholder="Full name"
				/>
			</div>

			{/* Age and Sex */}
			<div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
				<div>
					<label htmlFor="age" className="text-[#364153]">
						Age <span className="text-red-600">*</span>
					</label>
					<input
						name="age"
						type="number"
						onChange={formik.handleChange}
						value={formik.values.age}
						className="w-full border border-[#DADEE3] px-3 py-2 rounded-sm focus:outline-none focus:border-indigo-500"
					/>
				</div>

				<div>
					<label className="text-[#364153]">
						Sex <span className="text-red-600">*</span>
					</label>
					<div className="mt-1 flex flex-wrap gap-4">
						<label className="text-[#364153] flex items-center">
							<input
								type="radio"
								name="sex"
								value="Male"
								checked={formik.values.sex === "Male"}
								onChange={formik.handleChange}
								className="mx-1"
							/>
							Male
						</label>

						<label className="text-[#364153] flex items-center">
							<input
								type="radio"
								name="sex"
								value="Female"
								checked={formik.values.sex === "Female"}
								onChange={formik.handleChange}
								className="mx-1"
							/>
							Female
						</label>

						<label className="text-[#364153] flex items-center">
							<input
								type="radio"
								name="sex"
								value="Other"
								checked={formik.values.sex === "Other"}
								onChange={formik.handleChange}
								className="mx-1"
							/>
							Other
						</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default ClientDetailsSection;
