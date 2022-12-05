import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호확인은 같아야 합니다.");
    } else {
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    }
  };

  return (
    <div className="h-screen w-1/3 m-auto text-center">
      <form>
        <div className="mb-2 text-base font-bold text-gray-800">
          <input
            className="py-2 mb-2 px-3 border-2 outline-none"
            type="text"
            placeholder="이름"
            value={name}
            onChange={onNameHandler}
          />
        </div>
        <div className="mb-2 text-base font-bold text-gray-800">
          <input
            className="py-2 mb-2 px-3 border-2 outline-none"
            type="email"
            placeholder="이메일"
            value={email}
            onChange={onEmailHandler}
          />
        </div>
        <div className="mb-2 text-base font-bold text-gray-800">
          <input
            className="py-2 mb-2 px-3 border-2 outline-none"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onPasswordHandler}
          />
        </div>
        <div className="mb-2 text-base font-bold text-gray-800">
          <input
            className="py-2 mb-2 px-3 border-2 outline-none"
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={onConfirmPasswordHandler}
          />
        </div>
        <div className="justify-between flex">
          <button className="bg-yellow-200  py-2 px-6 my-10 shadow-md rounded-md font-bold hover:bg-yellow-300" type="submit" onClick={() => navigate("/")}>
            이전
          </button>
          <button className="bg-yellow-200  py-2 px-6 my-10 shadow-md rounded-md font-bold hover:bg-yellow-300" type="submit" onClick={() => navigate("/")}>
            완료
          </button>
        </div>
      </form>
    </div>
  );
}
export default Register;
