import React from 'react';
import { useHistory } from "react-router-dom";


export default function Login(props: any) {
   
    let history = useHistory();

    React.useEffect(() => {

      
    })


    function createuser() {
      history.push("/createuser");
    }

    return (
      <div className="login-container">
        <table>
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
               <a onClick={createuser}>Create User</a> 
             </td>
          </tr>
        </table>
      </div>
    );
  }