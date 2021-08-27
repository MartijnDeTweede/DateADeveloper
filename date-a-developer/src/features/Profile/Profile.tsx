import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../Authentication/AuthenticationSlice';
import "./Profile.scss"

export function Profile() {
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