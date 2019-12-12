import axios from 'axios';
import * as ActionTypes from '../../state/actiontypes';


export const login = (distpatch:any, data: any) => {
    return axios.post(`http://localhost:8001/auth/api-token-auth/`, data)
    .then(res => {
      distpatch({type: ActionTypes.LOGIN, payload: {token: res.data.token, username: data.username}});
      return true
    }).catch(err => (false))
}


export const fetchAllEvents = (distpatch:any, token:any) => {
  
  return axios.get(
    'http://localhost:8001/event/',
    { headers: { Authorization: 'Token ' + token } }
  ).then((data:any) => {return data}).catch((err: any) => { return err})

}