import { Authentication } from "../Authentication/Authentication";
import { ProfileDisplay } from "../ProfileDisplay/ProfileDisplay";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './Navigation.scss';
import { MyProfile } from "../MyProfile/MyProfile";
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
                    <div className="Navbar-item"><ProfileDisplay /></div>
                </div>
            </div>

            <Switch>
                <Route path="/profile">
                    <MyProfile />
                </Route>
                <Route path="/">
                    <HomeContainer />
                </Route>
            </Switch>

        </Router>


    )
}