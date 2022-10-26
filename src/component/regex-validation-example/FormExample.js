import React from "react"; 
import { Formik, Form, Field } from "formik"; 
function validateEmail(value) { 
  let error; 
  if (!value) { 
    error = "Required"; 
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) { 
    error = "Invalid email address"; 
  } 
  return error; 
} 
export const FormExample = () => ( 
  <div> 
    <h1>Email regex checkup</h1> 
    <Formik 
      initialValues={{ 
        email: "" 
      }} 
      onSubmit={(values) => { 
        console.log(values); 
      }} 
    > 
      {({ errors, touched, isValidating }) => ( 
        <Form> 
            {errors.email && touched.email && <span style={{color:'red',margin:'5px',border:'2px solid red',borderRadius:'8px',width:'10%' }}>{errors.email}</span>} 
            <br></br> email: <Field name="email" validate={validateEmail} /> 
          <button type="submit">Submit</button> 
        </Form> 
      )} 
    </Formik> 
  </div> 
); 