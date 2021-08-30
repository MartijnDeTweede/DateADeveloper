import { useEffect } from "react"
import { useAppSelector, useGetMyProfileDispatch } from "../../app/hooks";
import { getMyProfile, selectProfile } from "./ProfileSlice";

export function MyProfile() {
    const dispatch = useGetMyProfileDispatch();
    const profile = useAppSelector(selectProfile);
    useEffect(() => {
        dispatch(getMyProfile())
    });

    return(<div>
        I am the profile container, {profile.screenName}
    </div>)
}