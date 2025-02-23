import InputForm from "../components/common/InputForm";
import InputField from "../components/common/Inputfiled";
import Button from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import useAuthStore from "../zustand/authStore";
import { useLogin } from "../utils/hooks/useLogin";

const Login = () => {
  const { loginForm, loginErrorMessage, handleAuthvalidation } = useLogin();
  const { signin } = useAuthStore((state) => state);
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const {
        nickname,
        accessToken: token,
        success: isAuthnticated,
        userId,
        avatar
      } = await login(loginForm);
      if (isAuthnticated) {
        alert("로그인 성공");
        navigate("/");
        signin({ token, isAuthnticated, nickname, userId,avatar });
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
        name="id"
        placeholder="아이디를 입력하세요"
        value={loginForm.id}
        onChange={handleAuthvalidation}
        error={loginErrorMessage.id}
      />
      <InputField
        label="비밀번호"
        type="password"
        id="login_password"
        name="password"
        placeholder="비밀번호를 입력하세요"
        value={loginForm.password}
        onChange={handleAuthvalidation}
        error={loginErrorMessage.password}
      />
      <Button type="submit" isDisabled={loginErrorMessage}>
        Login
      </Button>
        <p className="text-center text-purple-">아이디가 없으신가요?
        <Link to="/signup" className="font-bold hover:text-blue-400"> 회원가입</Link>
        </p>

    </InputForm>
  );
};

export default Login;
