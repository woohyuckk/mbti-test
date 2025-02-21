import { useState } from "react";
import InputForm from "../components/common/InputForm";
import InputField from "../components/common/Inputfiled";
import Button from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import useAuthStore from "../zustand/authStore";

const Login = () => {
  const [loginData, setLoginData] = useState({ id: "", password: "" });
  const [loginErrorMessage, setLoginErrorMessage] = useState({
    idError: "",
    passwordError: "",
  });

  const { signin } = useAuthStore((state) => state);
  const navigate = useNavigate();

  const handleIdChange = (e) => {
    const value = e.target.value;
    setLoginData((prev) => ({ ...prev, id: value }));

    if (!loginData.id.trim()) {
      setLoginErrorMessage((prev) => ({
        ...prev,
        idError: "아이디를 확인 해 주세요.",
      }));
    } else {
      setLoginErrorMessage((prev) => ({
        ...prev,
        idError: "",
      }));
    }
  };

  // 비밀번호 입력 시 동적 유효성 검사 (8자 미만이면 에러 표시)
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setLoginData((prev) => ({ ...prev, password: value }));
    if (value.length < 8) {
      setLoginErrorMessage((prev) => ({
        ...prev,
        passwordError: "비밀번호는 8글자 이상으로 작성해야 합니다.",
      }));
    } else {
      setLoginErrorMessage((prev) => ({
        ...prev,
        passwordError: "",
      }));
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const {
        nickname,
        accessToken: token,
        success: isAuthnticated,
      } = await login(loginData);
      if (isAuthnticated) {
        alert("로그인 성공");
        navigate("/");
        signin({ token, isAuthnticated, nickname });
      }
    } catch (error) {
      console.error(`${error.name}: ${error.message}`);
    }
  };

  return (
    <InputForm title="로그인" onSubmit={handleLoginSubmit}>
      <InputField
        label="아이디"
        type="text"
        id="login_username"
        name="username"
        placeholder="아이디를 입력하세요"
        value={loginData.id}
        onChange={handleIdChange}
        error={loginErrorMessage.idError}
      />
      <InputField
        label="비밀번호"
        type="password"
        id="login_password"
        name="password"
        placeholder="비밀번호를 입력하세요"
        value={loginData.password}
        onChange={handlePasswordChange}
        error={loginErrorMessage.passwordError}
      />
      <Button type="submit" isDisabled={loginErrorMessage}>
        Login
      </Button>
      <div>
        <Link to="/signup">아이디가 없으신가요? 회원가입하러가기</Link>
      </div>
    </InputForm>
  );
};

export default Login;
