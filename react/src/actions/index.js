import axios from 'axios'
import * as types from './types'

export function login(userInfo) {
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