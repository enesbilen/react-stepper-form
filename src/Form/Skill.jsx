import React from "react";
import { Field, ErrorMessage, FieldArray } from "formik";
import Button from "./../components/Button";
import classNames from "classnames";
import { useState } from "react";

export default function Skill({ values }) {
  return (
    <>
      {/* Step 4 Form */}
      <FieldArray name="computerSkill">
        {({ insert, remove, push }) => (
          <div className="flex flex-wrap">
            {values.computerSkill.length > 0 &&
              values.computerSkill.map((computerSkill, index) => (
                <div className="w-[50%] mt-5" key={index}>
                  <label htmlFor={`computerSkill.${index}.skill`}>
                    Computer Skills
                  </label>
                  <div className="w-full relative">
                    <Field
                      className="cloneInput relative"
                      name={`computerSkill.${index}.skill`}
                      placeholder="React"
                      type="text"
                    />
                    <ErrorMessage
                      name={`computerSkill.${index}.skill`}
                      component="div"
                      className="field-error"
                    />
                    <div className="absolute bg-red-400 rounded-full px-2 top-[18px] right-[50px]">
                      <button
                        type="button"
                        className="font-extrabold"
                        onClick={() => {
                          if (index > 0) {
                            remove(index);
                          }
                        }}
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            <div className="mt-3 w-full">
              <Button
                type="button"
                variant="success"
                size="small"
                className="button"
                onClick={() => push({ skill: "" })}
              >
                Add Skill
              </Button>
            </div>
          </div>
        )}
      </FieldArray>

      <div className="mt-5" role="group" aria-labelledby="checkbox-group">
        <h2 className="mb-2 font-medium text-[16px]">Foreign Language</h2>
        <div className="flex relative items-center flex-wrap h-auto">
          <label className="customLabel">
            <Field
              className="mr-2"
              type="checkbox"
              name="checkedLang"
              value="Turkish"
            />
            Turkish
          </label>
          <label className="customLabel">
            <Field
              className="mr-2"
              type="checkbox"
              name="checkedLang"
              value="English"
            />
            English
          </label>
          <label className="customLabel">
            <Field
              className="mr-2"
              type="checkbox"
              name="checkedLang"
              value="German"
            />
            German
          </label>
          <label className="customLabel">
            <Field
              className="mr-2"
              type="checkbox"
              name="checkedLang"
              value="French"
            />
            French
          </label>
        </div>
      </div>
    </>
  );
}
