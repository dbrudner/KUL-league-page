import React from 'react';
import {Redirect} from 'react-router-dom';

export default function NoMatchingRouter() {
    return <Redirect to="/" />
}