import { Authentication } from "../Authentication/Authentication";
import { Profile } from "../Profile/Profile";

import './Navigation.scss';

export function Navigation() {
    
    return(
        <div className="Navbar">
            <div className="Navbar-itemset">
                <div className="Navbar-item">Profile</div>
                <div className="Navbar-item">Experiences</div>
                <div className="Navbar-item">Match</div>
            </div>
            <div className="Navbar-itemset">
                <div className="Navbar-item"><Authentication /></div>
                <div className="Navbar-item"><Profile /></div>
            </div>
        </div>

    )
}