import { AUTH_VALID_LENGTH } from "../../constants/signUp";


export const isValidId = (id) => {
  if (/\s/.test(id)) return "ID에는 공백을 포함할 수 없습니다.";
  if (id.length < AUTH_VALID_LENGTH.MIN_ID_LENGTH || AUTH_VALID_LENGTH.MAX_ID_LENGTH > 24) return "ID는 4자 이상 24자 이하여야 합니다.";
  return null;
};

export const isValidNickname = (nickname) => {
  if (/\s/.test(nickname)) return "닉네임에는 공백을 포함할 수 없습니다.";
  if (nickname.length < AUTH_VALID_LENGTH.MIN_NICKNAME_LENGTH || nickname.length > AUTH_VALID_LENGTH.MAX_NICKNAME_LENGTH ) return "닉네임은 1자 이상 10자 이하여야 합니다.";
  return null;
};

export const isValidPassword = (password) => {
  if (/\s/.test(password)) return "비밀번호에는 공백을 포함할 수 없습니다.";
  if (password.length < AUTH_VALID_LENGTH.MIN_PASSWORD_LENGTH || password.length >= AUTH_VALID_LENGTH.MAX_PASSWORD_LENGTH) return "비밀번호는 8자 이상 20자 미만이어야 합니다.";
  return null;
};
