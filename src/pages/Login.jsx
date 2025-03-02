import InputForm from "../components/common/InputForm";
import InputField from "../components/common/Inputfiled";
import Button from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../utils/hooks/useLogin";
import { useLoginMutate } from "../utils/hooks/useAuth.api";

const Login = () => {
  const { loginForm, loginErrorMessage, handleAuthvalidation } = useLogin();
  const navigate = useNavigate();
  const { mutate: loginMutate } = useLoginMutate();
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    loginMutate(loginForm, {
      onSuccess: () => {
        alert("로그인 성공");
        navigate("/");
      },
      onError: (error) => {
        console.error(`${error.name}: ${error.message}`);
      },
    });
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
      <p className="text-purple- text-center">
        아이디가 없으신가요?
        <Link to="/signup" className="font-bold hover:text-blue-400">
          {" "}
          회원가입
        </Link>
      </p>
    </InputForm>
  );
};

export default Login;
