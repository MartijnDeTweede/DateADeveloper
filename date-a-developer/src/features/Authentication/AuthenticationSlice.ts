import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import authConfig from './AuthConfig.js';
import { PublicClientApplication } from '@azure/msal-browser';

export interface User {
    name?: string
}

export interface AuthenticationState {
    error: any;
    isAuthenticated: boolean,
    user: User
}

const initialState: AuthenticationState = {
    error: null,
    isAuthenticated: false,
    user: {
        name: undefined
    }
};

export const loginAsync = createAsyncThunk(
    'login',
    async () => {
        try {
            var publicClientApplication = createPublicClientApplication();
            var result = await publicClientApplication.loginPopup(
                {
                    scopes: authConfig.scopes,
                    prompt: "select_account"
                }
            );
            var authenticationState: AuthenticationState = {
                error: null,
                isAuthenticated: true,
                user: {
                    name: result.account?.name
                }
            }
            return authenticationState;

        } catch (err) {
            var authenticationState: AuthenticationState = {
                error: err,
                isAuthenticated: false,
                user: {}
            }
            return authenticationState;
        }
    });

export const logoutAsync = createAsyncThunk(
    'logout',
    async () => {
        try {

            var publicClientApplication = createPublicClientApplication();
            publicClientApplication.logoutPopup();

            var publicClientApplication = createPublicClientApplication();
            var authenticationState: AuthenticationState = {
                error: null,
                isAuthenticated: false,
                user: {
                    name: undefined
                }
            }
            return authenticationState;

        } catch (err) {
            var authenticationState: AuthenticationState = {
                error: err,
                isAuthenticated: false,
                user: {}
            }
            return authenticationState;
        }
    });



export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        logout: () => {
            var publicClientApplication = createPublicClientApplication();
            publicClientApplication.logoutPopup();
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginAsync.pending, (state) => {
            state = state;
          })
        .addCase(loginAsync.fulfilled, (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.error = action.payload.error;
            state.user = action.payload.user;
        })
        .addCase(logoutAsync.pending, (state) => {
            state = state;
          })
        .addCase(logoutAsync.fulfilled, (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.error = action.payload.error;
            state.user = action.payload.user;
        });
    },
})

const createPublicClientApplication = () => {
    return new PublicClientApplication({
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

export const selectIsAuthenticated = (state: RootState) => state.authentication.isAuthenticated;
export const selectUser = (state: RootState) => state.authentication.user;

export default authenticationSlice.reducer;