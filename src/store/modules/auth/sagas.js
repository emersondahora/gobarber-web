import { all, takeLatest, call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "~/service/api";
import history from "~/service/history";

import { signInSuccess } from "./actions";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, "sessions", { email, password });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error("Usuário não é um prestador");
      return;
    }
    yield put(signInSuccess(token, user));
  } catch (err) {
    toast.error("Falha na autenticação, verifique seus dados");
  }
  history.push("/dashboard");
}

export default all([takeLatest("@auth/SING_IN_REQUEST", signIn)]);
