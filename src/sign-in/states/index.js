import { atom, selector } from "recoil";

export const usernameState = atom({
  key: "usernameState",
  default: "",
});

export const passwordState = atom({
  key: "passwordState",
  default: "",
});

export const obscurePasswordState = atom({
  key: "obscurePasswordState",
  default: true,
});

export const formErrorState = selector({
  key: "formErrorState",
  get: ({ get }) => {
    const password = get(passwordState)
    if (!password) return 'Digite sua senha, por favor';
    if (password.length < 8) return 'Sua senha deve possuir pelo menos 8 caracteres';
    return null;
  },
});

export const showErrorState = atom({
  key: "showErrorState",
  default: false,
});