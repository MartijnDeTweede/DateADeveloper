import { useAppSelector, useAuthenticationDispatch } from '../../app/hooks';
import { loginAsync, logoutAsync, selectIsAuthenticated, selectUser } from './AuthenticationSlice';

export function Authentication() {
    const isAuthenticated = useAppSelector(selectIsAuthenticated);

    const dispatch = useAuthenticationDispatch();

    return (
        <div>
            {
                isAuthenticated
                    ? <div>
                        <div onClick={() => dispatch(logoutAsync())}>Logout</div>
                    </div>
                    : <div onClick={() => dispatch(loginAsync())}>Login</div>
            }
        </div>
    )
}