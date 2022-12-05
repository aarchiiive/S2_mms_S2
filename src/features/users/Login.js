import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const verifyEmail = () => {
    var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return (email != '' && email != 'undefined' && regex.test(email));
  };

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const handleAccountInfo = (e) => {
    e.preventDefault();
    if (verifyEmail())
      if (password.length === 0)
        alert("비밀번호가 입력되지 않았습니다.")
      else
        navigate("/userlist");
    else
      alert("유효하지 않은 이메일입니다.");
  };

  return (
    <div className="h-screen w-1/3 m-auto text-center">
      <form>
        <div className="mb-2 text-base font-bold text-gray-800">
          <input
            className ="py-2 mb-2 px-3 border-2 outline-none"
            type="email"
            placeholder="이메일"
            value={email}
            onChange={onEmailHandler}
          />
        </div>
        <div className="mb-2 text-base font-bold text-gray-800">
          <input className ="py-2 mb-2 px-3 border-2 outline-none"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onPasswordHandler}
          />
        </div>
        <div className="justify-between flex">
          <button className="bg-yellow-200  py-2 px-6 my-10 shadow-md rounded-md font-bold hover:bg-yellow-300" type="submit" onClick={handleAccountInfo}>
            로그인
          </button>
          <button className="bg-yellow-200  py-2 px-6 my-10 shadow-md rounded-md font-bold hover:bg-yellow-300" type="submit" onClick={() => navigate("/register")}>
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
