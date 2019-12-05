import React from 'react';

const initialState={
    isActive:false
}

export default function AuthReducer(state: any = initialState, action: any) {
    switch (action.type) {
        case 'LOGIN':
            return {...state, userName: action.payload.username, token: action.payload.token, isActive: true}
        case 'LOGOUT':
            return {...state, isActive: false}
        default:
            return state;
        }
  }