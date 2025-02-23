import InputForm from "../components/common/InputForm";
import InputField from "../components/common/Inputfiled";
import Button from "../components/common/Button";
import { register } from "../api/auth";
import { useSignUp } from "../utils/hooks/useSignUp";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signUpForm, authMessage, handleAuthvalidation } = useSignUp();
  const navigate = useNavigate();
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message, success } = await register(signUpForm);
      // 회원가입 API 호출 또는 추가 로직 처리
      if (success) {
        alert(message);
        navigate('/')
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
        onChange={handleAuthvalidation}
        error={authMessage.nickname}
      />
      <InputField
        label="아이디"
        type="text"
        id="signup_id"
        name="id"
        placeholder="이메일을 입력하세요"
        value={signUpForm.id}
        onChange={handleAuthvalidation}
        error={authMessage.id}
      />
      <InputField
        label="비밀번호"
        type="password"
        id="signup_password"
        name="password"
        placeholder="비밀번호를 입력하세요"
        value={signUpForm.password}
        onChange={handleAuthvalidation}
        error={authMessage.password}
      />
      <Button type="submit" isDisabled={authMessage}>
        회원가입 완료
      </Button>
    </InputForm>
  );
};

export default Signup;
