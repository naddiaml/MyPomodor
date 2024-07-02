import React from 'react';
import './LateralMenu.css';
import Logo from '../../assets/MyPomodor-Logo.svg';
import TimerIcon from '../../assets/Timer-Icon.svg';
//import ProjectsIcon from '../../assets/Projects-Icon.svg';
//import StatsIcon from '../../assets/Stats-Icon.svg';
//import SettingsIcon from '../../assets/Settings-Icon.svg';

/* Solid*/
//import TimerSolidIcon from '../../assets/Timer-SolidIcon.svg';
import ProjectsSolidIcon from '../../assets/Projects-SolidIcon.svg';
import StatsSolidIcon from '../../assets/Stats-SolidIcon.svg';
import SettingsSolidIcon from '../../assets/Settings-SolidIcon.svg';
import LateralMenuIcons from '../LateralMenuIcons/LateralMenuIcons';

const LateralMenu = () => {
    return (
        <div className="lateral-menu__container">
            <nav>
                <img src={Logo} alt="MyPomodor's logo!" className="logo"/>

                <div>
                    <LateralMenuIcons src={TimerIcon} title={"Timer"} path={"#"}/>
                    <LateralMenuIcons src={ProjectsSolidIcon} title={"Projects & Tasks"} path={"#"} />
                    <LateralMenuIcons src={StatsSolidIcon} title={"Stats"} path={"#"} />
                </div>

                <LateralMenuIcons src={SettingsSolidIcon} title={"Settings"} path={"#"} />

            </nav>
        </div>
    )
}

export default LateralMenu;