import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import * as Actions from '../../common/actions';
import { shallowEqual, useSelector } from 'react-redux'

export default function Login(props: any) {
   
    let history = useHistory();
    const [username, setusername] = React.useState('');
    const [password, setpassword] = React.useState('');
    const dispatch = useDispatch();
    const { eventState } = useSelector(
      (state: any) => ({ eventState: state })
    )

    React.useEffect(() => {


      
    })


    function createuser() {
      history.push("/createuser");
    }
   
    function login(){
      if(Actions.login(dispatch, {username,  password})){
        history.push("/home");
      }
    }

    return (
      <div className="login-container">
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="">Username</label>
                <input   onChange={(event:any) => {setusername(event.target.value)}} type="text"/>
              </td>
            </tr>
            <tr>
              <td>
                  <label htmlFor="">Password</label>
                  <input value={password}  onChange={(event:any) => {setpassword(event.target.value)}}  type="password"/>
                </td>
            </tr>
            <tr>
              <td>
                <a onClick={login}>Login</a >
              </td>
            </tr>
            <tr>
              <td>
                <a onClick={createuser}>Create User</a> 
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }