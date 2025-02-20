import { useState } from "react";
import InputForm from "../components/common/InputForm";
import InputField from "../components/common/Inputfiled";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({ id: "", password: "" });
  const [loginErrorMessage, setLoginErrorMessage] = useState({idError: "", passwordError:""});

  // 비밀번호 입력 시 동적 유효성 검사 (8자 미만이면 에러 표시)
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setLoginData((prev) => ({...prev, password: value }) );
    if (value.length > 0 && value.length < 8) {
      setLoginErrorMessage((prev)=>('비밀번호는 8글자 이상으로 작성해야 합니다.'));
    } else {
      setPasswordError('');
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!username.trim()) {
      setId('아이디를 다시 확인해주세요.');
      valid = false;
    } else {
      setId('');
    }

    if (valid) {
      console.log('로그인 제출:', { username, password });
      // 로그인 API 호출 또는 추가 로직 처리
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
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={idError}
      />
      <InputField
        label="비밀번호"
        type="password"
        id="login_password"
        name="password"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={handlePasswordChange}
        error={passwordError}
      />
      <Button type="submit">Login</Button>
      <div><Link to='/signup'>아이디가 없으신가요? 회원가입하러가기</Link></div>
    </InputForm>
  );
};

export default Login;
