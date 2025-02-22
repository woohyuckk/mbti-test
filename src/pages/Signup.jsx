import { useState } from "react";
import InputForm from "../components/common/InputForm";
import InputField from "../components/common/Inputfiled";
import Button from "../components/common/Button";
import { register } from "../api/auth";

const Signup = () => {
  const [signUpForm, setSignUpForm] = useState({
    id: "",
    password: "",
    nickname : "",
  })


  const [authMessage, setAuthMessage] = useState({
    nicknameError: "",
    idError: "",
    passwordError: "",
  });

  const handleIdChange = (e) => {
    const { name, value } = e.target;
    setSignUpForm((prev) => ({ ...prev, [name]: value })) 
    
    if (value.length > 0 && value.length < 8) {
      setAuthMessage((message) => ({
        ...message,
        idError: "ID는 8글자 이상으로 작성해야 합니다.",
      }));
    } else {
      setAuthMessage((message) => ({ ...message, idError: "" }));
    }
  }

  // 비밀번호 입력 시 동적 유효성 검사 (8자 미만이면 에러 표시)
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setSignUpForm((prev) => ({ ...prev, [name]: value })) 
    
    if (value.length > 0 && value.length < 8) {
      setAuthMessage((message) => ({
        ...message,
        passwordError: "비밀번호는 8글자 이상으로 작성해야 합니다.",
      }));
    } else {
      setAuthMessage((message) => ({ ...message, passwordError: "" }));
    }
  };

  const handleNicknameChange = (e) => {
    const { name, value } = e.target;
    setSignUpForm((prev) => ({ ...prev, [name]: value })) 

    if (!signUpForm.nickname.trim()) {
      setAuthMessage((message) => ({
        ...message,
        nicknameError: "닉네임에는 공백을 사용할 수 없습니다.",
      }));
      return;
    } else {
      setAuthMessage((message) => ({ ...message, nicknameError: "" }));
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      const { message, success } = await register(signUpForm);
      // 회원가입 API 호출 또는 추가 로직 처리
      if (success) {
        alert(message);
      }
    } catch (error) {
      console.error(`${error.name}: ${error.message}`);
    }
  };

  return (
    <InputForm title="회원가입" onSubmit={handleSignupSubmit}>
      <InputField
        label="닉네임"
        type="text"
        id="signup_nickrname"
        name="nickname"
        placeholder="닉네임을 입력하세요"
        value={signUpForm.nickname}
        onChange={handleNicknameChange}
        error={authMessage.nicknameError}
      />
      <InputField
        label="아이디"
        type="text"
        id="signup_id"
        name="id"
        placeholder="이메일을 입력하세요"
        value={signUpForm.id}
        onChange={handleIdChange}
        error={authMessage.idError}
      />
      <InputField
        label="비밀번호"
        type="password"
        id="signup_password"
        name="password"
        placeholder="비밀번호를 입력하세요"
        value={signUpForm.password}
        onChange={handlePasswordChange}
        error={authMessage.passwordError}
      />
      <Button type="submit">회원가입 완료</Button>
    </InputForm>
  );
};

export default Signup;
