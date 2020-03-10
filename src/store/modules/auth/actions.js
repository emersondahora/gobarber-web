export function signInRequest(email, password) {
  return {
    type: "@auth/SING_IN_REQUEST",
    payload: { email, password },
    loading: false
  };
}
export function signInSuccess(token, user) {
  return {
    type: "@auth/SIGN_IN_SUCCESS",
    payload: { token, user }
  };
}

export function signFailure() {
  return {
    type: "@aut/SIGN_FAILURE"
  };
}