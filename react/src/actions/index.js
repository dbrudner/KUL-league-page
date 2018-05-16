import axios from 'axios'
import * as types from './types'

export function Login(userInfo) {
    return {
        type: types.LOGIN,
        payload: userInfo
    }
}

export function logout() {
    return {
        type: types.LOGOUT,
        payload: null
    }
}

export function openSignUp(boolean) {
    return {
        type: types.SIGNUP,
        payload: boolean
    }
}