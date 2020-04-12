import React from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

const Signup = (props) =>{
    return(
    <div className="SignUp">
    <Navbar />
     <main className="container">
        <FormField label="Name" type={name} placeholder="e.g Alex Smith" />
        <FormField label="email" type={email} placeholder="e.g. alexsmith@gmail.com"/>
        <FormField label="password" type={password} />

        <CoolButton isSmall isDanger className="is-rounded my-class" name="Button 1"/>
        <CoolButton isSmall isSuccess className="my-class" name="Button 2"/>
     </main>
    </div>
 )
};


export default Signup;


