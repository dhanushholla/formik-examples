import React from "react"; 
import { Formik, Form, Field } from "formik"; 
function validateUsername(value) { 
  let error="no such user exists"; 
  if (value === "admin") { 
    error = "user exists"; 
  } 
  return error; 
} 
export const Formeg = () => ( 
  <div> 
    <h1>manually trigger/initiate validation(if username===admin then it gives correct msg)</h1> 
    <Formik 
      initialValues={{ 
        username: "", 
      }} 
      onSubmit={(values) => { 
        console.log(values); 
      }} 
    > 
      {({ errors, touched, validateField, validateForm }) => ( 
        <Form> 
      username:    <Field name="username" validate={validateUsername} /> 
          {errors.username && touched.username && <div>{errors.username}</div>} 
          <button type="button" onClick={() => validateField("username")}> 
            Check Username 
          </button> 
          <button 
            type="button" 
            onClick={async () => { 
              const result = await validateForm(); 
              console.log(result); 
            }} 
          > 
            Validate All 
          </button> 
          {/* <button type="submit">Submit</button>  */}
        </Form> 
      )} 
    </Formik> 
  </div> 
); 