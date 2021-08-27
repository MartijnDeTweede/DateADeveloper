import authConfig from './AuthConfig.js';
import { PublicClientApplication } from '@azure/msal-browser';
import { Component } from 'react';

export class Authentication extends Component {
    publicClientApplication: PublicClientApplication;
    state: any;

    constructor(props: any) {
        super(props);
        this.state = {
            error: null,
            isAuthenticated: false,
            user: {}
        }
        this.login = this.login.bind(this);
        this.publicClientApplication = new PublicClientApplication({
            auth: {
                clientId: authConfig.appId,
                redirectUri: authConfig.redirectUri,
                authority: authConfig.authority
            },
            cache: {
                cacheLocation: 'sessionStorage',
                storeAuthStateInCookie: true
            }
        });
    }

    async login() {
        try {
            await this.publicClientApplication.loginPopup(
                {
                    scopes: authConfig.scopes,
                    prompt: "select_account"
                }
            )
        } catch(err) {
            this.setState({
                isAuthenticated: false,
                user: {},
                error: err
            });
        }
    }

    logout() {
        this.publicClientApplication.logoutPopup();
    }

    render() {
        return (
            <div>
                {
                    this.state.isAuthenticated
                        ? <p> Successful logged in </p>
                        : <button onClick={() => this.login()}>Login</button>
                }
            </div>
        )
    }
}