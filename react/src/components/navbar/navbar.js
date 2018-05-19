import React from 'react';
import FullNav from './full-nav';
import MobileNav from './mobile-nav/mobile-nav';
import MediaQuery from 'react-responsive';

export default function Navbar() {

    return (
        <div>
            <MediaQuery query="(max-device-width: 800px)">
                <MobileNav />
            </MediaQuery>
            <MediaQuery query="(min-device-width: 801px)">
                <FullNav/>
            </MediaQuery>
        </div>
    )
}