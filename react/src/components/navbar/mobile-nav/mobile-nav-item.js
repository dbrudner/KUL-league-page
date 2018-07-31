import React from 'react'
import MobileNavbar from '../../../styled/blocks/mobile-navbar';

export default function MobileNavItem(props) {

	const active = window.location.href.substr(window.location.href.lastIndexOf('/') + 1) || 'Home';

	return (
		<MobileNavbar.MobileNavItem active={active.toLowerCase() === props.to.toLowerCase() ? true : false}>
			<MobileNavbar.MobileNavIcon>
			<i className={props.icon}></i>
			</MobileNavbar.MobileNavIcon>
			{props.to}
		</MobileNavbar.MobileNavItem>
	)
}