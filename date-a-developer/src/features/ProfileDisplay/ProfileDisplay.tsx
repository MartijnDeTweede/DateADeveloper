import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../Authentication/AuthenticationSlice';
import "./ProfileDisplay.scss"

export function ProfileDisplay() {
    const user = useAppSelector(selectUser);

    return(
        <div className="profile" >
            <div className="profile-name" >{user.name} </div>
            {user.name
                ? <div className="profile-image profile-image--placeholder"></div>
                : <div></div> }
        </div>
    )
}