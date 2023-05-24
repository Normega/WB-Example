import { SET_AUTH_USER, RESET_AUTH_STATE } from "types";

import * as api from "api";

export const register = registerFormData => api.register({ ...registerFormData });
export const registerWithGoogle = () => api.registerWithGoogle();
export const login = loginData => api.login({ ...loginData });
export const loginWithGoogle = () => api.loginWithGoogle();
export const onAuthStateChange = onAuthCallback => api.onAuthStateChange(onAuthCallback);

export const logout = () => api.logout();

export const storeAuthUser = authUser => dispatch => {
    dispatch({ type: RESET_AUTH_STATE });
    if (authUser) {
        return api
            .getUserProfile(authUser.uid)
            .then(userWithProfile => dispatch({ user: userWithProfile, type: SET_AUTH_USER }));
    } else {
        return dispatch({ user: null, type: SET_AUTH_USER });
    }
};
