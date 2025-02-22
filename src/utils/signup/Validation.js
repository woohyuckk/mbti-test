





export const isValidId = (id) => {
  if (/\s/.test(id)) return "ID에는 공백을 포함할 수 없습니다.";
  if (id.length < 4 || id.length > 24) return "ID는 4자 이상 24자 이하여야 합니다.";
  return null;
};

export const isValidNickname = (nickname) => {
  if (/\s/.test(nickname)) return "닉네임에는 공백을 포함할 수 없습니다.";
  if (nickname.length < 1 || nickname.length > 10) return "닉네임은 1자 이상 10자 이하여야 합니다.";
  return null;
};

export const isValidPassword = (password) => {
  if (/\s/.test(password)) return "비밀번호에는 공백을 포함할 수 없습니다.";
  if (password.length < 8 || password.length >= 20) return "비밀번호는 8자 이상 20자 미만이어야 합니다.";
  return null;
};
