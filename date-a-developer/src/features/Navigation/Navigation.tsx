import { Authentication } from "../Authentication/Authentication";
import { Profile } from "../Profile/Profile";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './Navigation.scss';
import { ProfileContainer } from "../ProfileContainer/ProfileContainer";
import { HomeContainer } from "../HomeContainer/HomeContainer";

export function Navigation() {

    return (
        <Router>
            <div className="Navbar">
                <div className="Navbar-itemset">
                    <Link className="Navbar-item" to="/">Home</Link>
                    <Link className="Navbar-item" to="/profile">Profile</Link>
                    <div className="Navbar-item">Experiences</div>
                    <div className="Navbar-item">Match</div>
                </div>
                <div className="Navbar-itemset">
                    <div className="Navbar-item"><Authentication /></div>
                    <div className="Navbar-item"><Profile /></div>
                </div>
            </div>

            <Switch>
                <Route path="/profile">
                    <ProfileContainer />
                </Route>
                <Route path="/">
                    <HomeContainer />
                </Route>
            </Switch>

        </Router>


    )
}