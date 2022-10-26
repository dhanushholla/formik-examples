import React from 'react'; 
 import { Formik, Form, Field } from 'formik'; 
 import * as Yup from 'yup'; 
 const SignupSchema = Yup.object().shape({ 
  firstName: Yup.string() 
     .min(5, 'Too Short!') 
    .max(50, 'Too Long!') 
    .required('Required'), 
   lastName: Yup.string() 
     .min(5, 'Too Short!') 
     .max(50, 'Too Long!') 
     .required('Required'), 
   email: Yup.string().email('Invalid email').required('Required'), 
 }); 
 export const ValidationSchemaExample = () => ( 
   <div> 
     <h1>Validation using yup package</h1> 
     <Formik 
       initialValues={{ 
         firstName: '', 
         lastName: '', 
         email: '', 
       }} 
       validationSchema={SignupSchema} 
       onSubmit={values => { 
         console.log(values); 
       }} 
     > 
       {({ errors, touched }) => ( 
         <Form> 
          <br></br>fname: <Field name="firstName" /> 
           {errors.firstName && touched.firstName ? ( 
             <div>{errors.firstName}</div> 
           ) : null} 
         <br></br> lname: <Field name="lastName" /> 
           {errors.lastName && touched.lastName ? ( 
             <div>{errors.lastName}</div> 
           ) : null} 
          <br></br> email:  <Field name="email" type="email" /> 
           {errors.email && touched.email ? <div>{errors.email}</div> : null} 
         <br></br>  <button type="submit">Submit</button> 
         </Form> 
       )} 
     </Formik> 
   </div> 
 ); 