import React from "react";
import { useFormik } from "formik";

const BasicForm = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
		},
	});
};

console.log(formik);

const BasicInformation = () => {
	return <div></div>;
};

export default BasicInformation;
