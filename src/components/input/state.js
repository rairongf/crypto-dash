import { atom } from "recoil";

export const textInputState = atom({
  key: "textInputState",
  default: "",
});

export const obscureTextState = atom({
  key: "obscureTextState",
  default: false,
});