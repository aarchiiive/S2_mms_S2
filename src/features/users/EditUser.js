import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { editUser } from "./userSlice";

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter((user) => user.id === params.id);
  const { name, phone, addr, SNS, position, email, time, memo } =
    existingUser[0];
  const [values, setValues] = useState({
    name : "",
    phone : "",
    addr : "",
    SNS : "",
    position : "",
    email : "",
    time : "",
    memo : "",
  });

  const handleEditUser = () => {
    setValues({
      name: "",
      phone: "",
      addr: "",
      SNS: "",
      position: "",
      email: "",
      time: "",
      memo: "",
    });
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        phone: values.phone,
        addr: values.addr,
        SNS: values.SNS,
        position: values.position,
        email: values.email,
        memo: values.memo,
      })
    );
    navigate("/userlist");
  };

  return (
    <div className="h-screen">
    <div className="mt-10 w-1/3 m-auto">
      <TextField
        label="이름"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "이름을 입력하세요" }}
      />
      <br />
      <TextField
        label="전화번호"
        value={values.phone}
        onChange={(e) => setValues({ ...values, phone: e.target.value })}
        inputProps={{ type: "text", placeholder: "전화번호를 입력하세요" }}
      />
      <TextField
        label="주소"
        value={values.addr}
        onChange={(e) => setValues({ ...values, addr: e.target.value })}
        inputProps={{ type: "text", placeholder: "주소를 입력하세요" }}
      />
      <TextField
        label="SNS"
        value={values.SNS}
        onChange={(e) => setValues({ ...values, SNS: e.target.value })}
        inputProps={{ type: "text", placeholder: "SNS를 입력하세요" }}
      />
      <TextField
        label="직책/직무"
        value={values.position}
        onChange={(e) => setValues({ ...values, position: e.target.value })}
        inputProps={{ type: "text", placeholder: "직책/직무를 입력하세요" }}
      />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "Email을 입력하세요" }}
      />
      <TextField
        label="메모"
        value={values.memo}
        default
        onChange={(e) => setValues({ ...values, memo: e.target.value })}
        inputProps={{
          type: "text",
          placeholder: "명함에 대한 메모를 입력하세요",
        }}
      />
      <br />

        <div className = "justify-between flex">
      <Button onClick={() => navigate("/userlist")}>이전</Button>
      <Button onClick={handleEditUser}>수정</Button>
      </div>
    </div>
    </div>
  );
};

export default EditUser;
