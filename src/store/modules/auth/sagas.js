import { all, takeLatest, call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "~/service/api";
import history from "~/service/history";

import { signInSuccess, signFailure } from "./actions";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, "sessions", { email, password });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error("Usuário não é um prestador");
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(signInSuccess(token, user));
    history.push("/dashboard");
  } catch (err) {
    toast.error("Falha na autenticação, verifique seus dados");
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, "users", {
      name,
      email,
      password,
      provider: true
    });
    history.push("/");
  } catch (error) {
    toast.error("Falha no cadastro, verifique seus dados! ");
    yield put(signFailure());
  }
}
export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (token) {
    console.tron.log(token);
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
export function signOut() {
  history.push("/");
}
export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SING_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
  takeLatest("@auth/SIGN_OUT", signOut)
]);
