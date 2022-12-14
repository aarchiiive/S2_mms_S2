import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { addUser } from "./userSlice";

const AddUser = () => {
  let id = uuidv4();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const date = new Date();
  const addDate =
    date.getFullYear() +
    "년 " +
    (date.getMonth() + 1) +
    "월" +
    date.getDate() +
    "일 " +
    ("0" + date.getHours()).slice(-2) +
    ":" +
    ("0" + date.getMinutes()).slice(-2);

  const [values, setValues] = useState({
    image: "",
    name: "",
    phone: "",
    addr: "",
    SNS: "",
    position: "",
    email: "",
    time: addDate,
    memo: "",
  });

  const verifyPhoneNumber = () => {
    var regex = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}/;
    return (
      values.phone != "" &&
      values.phone != "undefined" &&
      regex.test(values.phone)
    );
  };

  const verifyEmail = () => {
    var regex =
      /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return (
      values.email != "" &&
      values.email != "undefined" &&
      regex.test(values.email)
    );
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: id,
        image: values.image,
        name: values.name,
        phone: values.phone,
        addr: values.addr,
        SNS: values.SNS,
        position: values.position,
        email: values.email,
        time: addDate,
        memo: values.memo,
        purchased: false,
      })
    );

    const info = Object.values(values);
    for (let i = 0; i < info.length; i++) {
      if (info[i].length === 0) {
        console.log("입력 되지 않음");
        alert("입력되지 않은 정보가 있습니다.");
        return;
      }
      // console.log(info[i])
    }

    if (!verifyPhoneNumber()) {
      alert("유효하지 않은 전화번호입니다.");
      return;
    }

    if (!verifyEmail()) {
      alert("유효하지 않은 이메일입니다.");
      return;
    }

    navigate("/view-templates/" + id);
  };

  return (
    <div className="h-screen w-1/2 m-auto">
      <div class="">
        <div class="box-border backdrop-contrast-125 w-auto h-5/6 p-4 border-2 rounded-md">
          <div className="y-2 mb-2 flex flex-col text-base font-bold text-gray-800">
            사진
            <input
              className="mb-2"
              type="file"
              onChange={(e) =>
                setValues({
                  ...values,
                  image: URL.createObjectURL(e.target.files[0]),
                })
              }
            ></input>
          </div>
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
            onChange={(e) => setValues({ ...values, memo: e.target.value })}
            inputProps={{
              type: "text",
              placeholder: "명함에 대한 메모를 입력하세요",
            }}
          />
          <div className="justify-between flex">
            <Button onClick={() => navigate("/userlist")}>이전</Button>
            {/* <Link to={`/view-templates/${id}`} key={id}> */}
            <Button onClick={handleAddUser}>다음</Button>
            {/* </Link> */}
            {/* <Button onClick={() => navigate("/view-templates")}>다음</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddUser;
