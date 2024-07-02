import React from 'react';
import './LateralMenuIcons.css';

import { Link } from "react-router-dom";

const LateralMenuIcons = ({ src, title, path }) => {
    return (
        <Link className='lateral-menu__icon' to={path} title={title}><img src={src} alt={title} /></Link>
    )
}

export default LateralMenuIcons