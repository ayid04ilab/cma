import React from 'react';


const List = () => {


  return (
    <>
        <table>
            <thead>All Contacts</thead>
            <tbody>
                <tr>
                <th>Sr No</th>
                <th>Name</th>
                <th>Contact Number</th>
                <th>Email</th>  
                <th>Description</th>
            </tr>
            <tr>
                <td>1</td>
                <td>a</td>
                <td>98765XXXXX</td>
                <td>abc@gmail.com</td>
                <td>Friend</td>
            </tr>
            <tr>
                <td>2</td>
                <td>b</td>
                <td>98765XXXXX</td>
                <td>abc@gmail.com</td>
                <td>classmate</td>
            </tr>
            <tr>
                <td>3</td>
                <td>c</td>
                <td>98765XXXXX</td>
                <td>abc@gmail.com</td>
                <td>Teacher</td>
            </tr>
            </tbody>
        </table>
    </>
  );
};

export default List;
