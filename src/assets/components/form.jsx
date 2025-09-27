import React from 'react';

const Form = () => {
  return (
    <>
        <form>
            <fieldset>
                <legend>Fill Your Details</legend>
            
            <label htmlFor='name'>
                Name:<input type="text" placeholder="Enter your Name" required/>
            </label><br/>
            <label htmlFor='email'>
                Email:<input type="email" placeholder="Enter your Email" required/>
            </label><br/>
            <label htmlFor='phone'>
                Contact Number:<input type="number" placeholder="Enter your Phone Number" required/>
            </label><br/>
            <button type="submit">Submit</button>
            </fieldset>
        </form>
    </>
  );
};

export default Form;
