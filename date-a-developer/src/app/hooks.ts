import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch, AuthenticationDispatch, ProfileDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuthenticationDispatch = () => useDispatch<AuthenticationDispatch>();
export const useGetMyProfileDispatch = () => useDispatch<ProfileDispatch>();
