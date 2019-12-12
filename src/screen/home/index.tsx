import React from 'react';
import { Link } from 'react-router-dom';
import * as Actions from '../../common/actions';
import { shallowEqual, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';


export default function Home() {
    const { eventState } = useSelector(
      (state: any) => ({ eventState: state })
    )
    const [eventList, setEventList] = React.useState([]);
    const [isloaded, setLoaded] = React.useState(false);
    const dispatch = useDispatch();
    if(eventState.reducer.token && !isloaded){
      Actions.fetchAllEvents(dispatch, eventState.reducer.token).then(
        (X: any) => {setEventList(Object.values(X.data.results)); }
      )
      setLoaded(true)
    }
    return (
      <div className="">
       <label>Home</label>
       <br></br>
       <br></br>
       <br></br>
       <hr></hr>
       {eventList.map((x:any, key:number )=> {
        return <div key={key}>
          <label>DESCRIPTION</label>
          <p>{x.DESCRIPTION}</p>
          <label>TITLE</label>
          <p>{x.TITLE}</p>
        </div>
       })}
      </div>
    );
  }