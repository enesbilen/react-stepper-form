import React from "react";
import { Field, ErrorMessage } from "formik";

export default function Note({ values }) {
  return (
    <>
      {/* Step 5 Form */}
      <div>
        <label htmlFor="about">Notes you would like to add</label>
        <Field
          className="customTextarea"
          component="textarea"
          name="about"
          id="about"
          placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, provident.
          "
          required
        />
        <ErrorMessage
          name="about"
          component="small"
          className="block text-sm text-red-600 mt-1"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="myFile">CV / Portfolio</label>
        <Field className="w-full mt-2" type="file" name="myFile" accept=".pdf" />
      </div>
    </>
  );
}
