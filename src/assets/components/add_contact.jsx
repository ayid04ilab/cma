import React from 'react';

const AddContact = () => {
  return (
    <>
        <h1>Add Contact</h1>
        <form>
            <fieldset>
                <legend>Add details about Contact</legend>
                <table>
                    <tr>
                        <th>Enter Name</th>
                        <td><input type="name" placeholder="Enter Contact Name" required/></td>
                    </tr>
                    <tr>
                        <th>Enter Email</th>
                        <td><input type="email" placeholder="Enter email" required/></td>
                    </tr>
                    <tr>
                        <th>Enter Contact Number</th>
                        <td><input type="number" placeholder="Enter Contact Number" required/></td>
                    </tr>
                    <tr>
                        <th>Enter Description</th>
                        <td><input type="text" placeholder="Enter Some Description" required/></td>
                    </tr>
                </table>
                <button type="submit" className='btn'>Add Contact</button>
            </fieldset>
        </form>
    </>
  );
};

export default AddContact;