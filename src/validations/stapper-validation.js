import * as Yup from "yup"

export const stepperValidation = Yup.object().shape({

    //step 1
    name: Yup.string().when('step', {
        is: 1,
        then: schema => schema.required()
    }),
    surname: Yup.string().when('step', {
        is: 1,
        then: schema => schema.required()
    }),
    age: Yup.string().when('step', {
        is: 1,
        then: schema => schema.required()
    }),
    jop: Yup.string().when('step', {
        is: 1,
        then: schema => schema.required()
    }),

    email: Yup.string().when('step', {
        is: 1,
        then: schema => schema.required()
    }),

    //step 2
    school: Yup.string().when('step', {
        is: 2,
        then: schema => schema.required()
    }),
    department: Yup.string().when('step', {
        is: 2,
        then: schema => schema.required()
    }),
    graduation: Yup.string().when('step', {
        is: 2,
        then: schema => schema.required()
    }),
    diploma: Yup.string().when('step', {
        is: 2,
        then: schema => schema.required()
    }),

    //step 5

    about: Yup.string().when('step', {
        is: 5,
        then: schema => schema.required()
    }),
    myFile: Yup.string().when('step', {
        is: 5,
        then: schema => schema.required()
    }),
})

export default stepperValidation;