import React from 'react';
import { Link } from 'react-router-dom';

export default function Createuser() {

    React.useEffect(() => {

        
    })

    function createUser(){}

    return (
      <div className="">
        <label>createuser</label>
        <table>
          <tr>
              <td>
                <label htmlFor="">Email</label>
                <input type="text"/>
              </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Username</label>
              <input type="text"/>
            </td>
          </tr>
          <tr>
             <td>
                <label htmlFor="">Password</label>
                <input type="password"/>
              </td>
          </tr>
          <tr>
             <td>
               <button>Create User</button> 
             </td>
          </tr>
        </table>
      </div>
    );
  }