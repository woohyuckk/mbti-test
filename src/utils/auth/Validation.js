import { AUTH_VALID_LENGTH } from "../../constants/signUp";

export const messageValidId = (id) => {
  if (/\s/.test(id)) return "ID에는 공백을 포함할 수 없습니다.";
  if (id.length < AUTH_VALID_LENGTH.MIN_ID_LENGTH || AUTH_VALID_LENGTH.MAX_ID_LENGTH > 24) return "ID는 4자 이상 24자 이하여야 합니다.";
  return "";
};

export const messageValidNickname = (nickname) => {
  if (/\s/.test(nickname)) return "닉네임에는 공백을 포함할 수 없습니다.";
  if (nickname.length < AUTH_VALID_LENGTH.MIN_NICKNAME_LENGTH || nickname.length > AUTH_VALID_LENGTH.MAX_NICKNAME_LENGTH) return "닉네임은 1자 이상 10자 이하여야 합니다.";
  return "";
};

export const messageValidPassword = (password) => {
  if (/\s/.test(password)) return "비밀번호에는 공백을 포함할 수 없습니다.";
  if (password.length < AUTH_VALID_LENGTH.MIN_PASSWORD_LENGTH || password.length >= AUTH_VALID_LENGTH.MAX_PASSWORD_LENGTH) return "비밀번호는 8자 이상 20자 미만이어야 합니다.";
  return "";
};

export const decodedJwtToken = (token) => {
  if (!token) return false;
  // 토큰을 '.' 기준으로 분리 (헤더, 페이로드, 서명)
  const parts = token.split('.');
  if (parts.length !== 3) {
    console.error("유효하지 않은 JWT 형식입니다.");
    return false;
  }
  let payload = parts[1];
  // Base64url 인코딩을 표준 Base64로 변환
  payload = payload.replace(/-/g, '+').replace(/_/g, '/');
  // 필요한 경우 패딩 추가 (Base64 문자열 길이가 4의 배수가 되어야 함)
  while (payload.length % 4 !== 0) {
    payload += '=';
  }
  try {
    // Base64 디코딩 (브라우저 환경에서는 atob 사용)
    const decodedPayload = atob(payload);
    // JSON 문자열을 객체로 파싱
    const payloadObj = JSON.parse(decodedPayload);
    // exp 필드가 있는지 확인 (없다면 유효시간 검사 불가)
    if (!payloadObj.exp) {
      console.error("exp 필드가 토큰에 포함되어 있지 않습니다.");
      return false;
    }
    // 현재 시간(초 단위)과 exp 값 비교
    const now = Math.floor(Date.now() / 1000);
    return now < payloadObj.exp;
  } catch (error) {
    console.error("토큰 디코딩 중 오류 발생:", error);
    return false;
  }
}

export const getValidationMessage = (name, value) => {
  switch (name) {
    case "id":
      return messageValidId(value);
    case "password":
      return messageValidPassword(value);
    case "nickname":
      return messageValidNickname(value);
    default:
      return null
  }
}