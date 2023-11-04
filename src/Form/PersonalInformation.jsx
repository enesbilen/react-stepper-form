import React from "react";
import { Field, ErrorMessage } from "formik";

export default function PersonalInformation() {
  return (
    <>
      {/* Step 1 Form */}
      <div className="mb-10">
        <h1 className="font-bold mb-5 text-4xl text-green-500">Information.</h1>
        <p className="text-xl mb-5 font-semibold leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia
          architecto, cumque dignissimos dolores iure!
        </p>
        <p className="font-normal">Enter your details below.</p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label htmlFor="name">First Name</label>
          <Field
            className="customInput"
            type="text"
            name="name"
            id="name"
            placeholder="Joe"
            required
          />
          <ErrorMessage
            name="name"
            component="small"
            className="block text-sm text-red-600 mt-1"
          />
        </div>
        <div>
          <label htmlFor="surname">First Name</label>
          <Field
            className="customInput"
            type="text"
            name="surname"
            id="surname"
            placeholder="Doe"
            required
          />
          <ErrorMessage
            name="surname"
            component="small"
            className="block text-sm text-red-600 mt-1"
          />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-6">
        <div>
          <label htmlFor="age">Date of Birth</label>
          <Field
            className="customInput"
            type="date"
            name="age"
            id="age"
            required
          />
          <ErrorMessage
            name="age"
            component="small"
            className="block text-sm text-red-600 mt-1"
          />
        </div>
        <div>
          <label htmlFor="jop">Jop</label>
          <Field
            className="customInput"
            type="text"
            name="jop"
            id="jop"
            placeholder="React Developer"
            required
          />
          <ErrorMessage
            name="jop"
            component="small"
            className="block text-sm text-red-600 mt-1"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email">Email</label>
        <Field
          className="customInput"
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          required
        />
        <ErrorMessage
          name="email"
          component="small"
          className="block text-sm text-red-600 mt-1"
        />
      </div>
    </>
  );
}
