import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ProfileState, ProfileType } from "./Profile";

const initialState: ProfileState = {
    screenName: '',
    pictureUri: undefined,
    description: '',
    type: ProfileType.NotSelected
};

var baseUrl = 'http://localhost:7071/api';

export const getMyProfile = createAsyncThunk(
    'getMyProfile',
    async () => {
        try {
            console.log("In dispatch");
            var uri = `${baseUrl}/GetUserProfile`;

            var result = await fetch(uri)
                .then(response => response.json());
            var profileSate: ProfileState = {
                description: result.description,
                screenName: result.screenName,
                type: result.type
            }
            return profileSate;

        } catch (err) {
            return initialState;
        }
    });

export const authenticationSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getMyProfile.pending, (state) => {
            state = state;
          })
        .addCase(getMyProfile.fulfilled, (state, action) => {
            state.screenName = action.payload.screenName;
        })
    },
});

export const selectProfile = (state: RootState) => state.profile;

export default authenticationSlice.reducer;