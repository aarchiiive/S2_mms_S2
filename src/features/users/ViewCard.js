import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { addPurchased, viewCard } from "./userSlice";

const ViewCard = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  console.log(users);
  const navigate = useNavigate();
  const existingUser = users.filter((user) => user.id === params.id);

  console.log(existingUser[0]);
  const { name, phone, addr, SNS, position, email, time, memo, image } =
    existingUser[0];
  const [values, setValues] = useState({
    name: "",
    phone: "",
    addr: "",
    SNS: "",
    position: "",
    email: "",
    time: "",
    memo: "",
  });
  console.log(existingUser[0]);

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
      viewCard({
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
    // <div className="h-screen">
    <div className="h-[1200px]">
      <div className="mt-10 w-1/3 m-auto">
        <div className="flex flex-col">

          <div className="p-4">
            <div className="shadow-xl w-1/2 h-auto m-auto rounded-lg">
              <img
              src={image}
              className="rounded-lg"
              ></img>
            </div>
          </div>

          {/* <h1 className="mb-2 text-base font-bold text-gray-800">이름</h1>
          <h1 className="text-centerpy-2 mb-2 px-3 bg-yellow-200 shadow-md font-bold outline-none rounded-2xl">{name}</h1>
          <h1 className="mb-2 text-base font-bold text-gray-800">전화번호</h1>
          <h1 className="py-2 mb-2 px-3 bg-yellow-200 shadow-md font-bold outline-none rounded-2xl">{phone}</h1>
          <h1 className="mb-2 text-base font-bold text-gray-800">주소</h1>
          <h1 className="py-2 mb-2 px-3 bg-yellow-200 shadow-md font-bold outline-none rounded-2xl">{addr}</h1>
          <h1 className="mb-2 text-base font-bold text-gray-800">SNS</h1>
          <h1 className="py-2 mb-2 px-3 bg-yellow-200 shadow-md font-bold outline-none rounded-2xl">{SNS}</h1>
          <h1 className="mb-2 text-base font-bold text-gray-800">직무/직책</h1>
          <h1 className="py-2 mb-2 px-3 bg-yellow-200 shadow-md font-bold outline-none rounded-2xl">{position}</h1>
          <h1 className="mb-2 text-base font-bold text-gray-800">이메일</h1>
          <h1 className="py-2 mb-2 px-3 bg-yellow-200 shadow-md font-bold outline-none rounded-2xl">{email}</h1>
          <h1 className="mb-2 text-base font-bold text-gray-800">메모</h1>
          <h1 className="py-2 mb-2 px-3 bg-yellow-200 shadow-md font-bold outline-none rounded-2xl">{memo}</h1> */}

          <div className="w-1/2 m-auto">
            <h1 className="mb-2 text-base font-bold text-gray-800">이름</h1>
            <h1 className="py-2 mb-2 px-3 bg-yellow-200 shadow-md font-bold outline-none rounded-2xl">{name}</h1>
            <h1 className="mb-2 text-base font-bold text-gray-800">전화번호</h1>
            <h1 className="py-2 mb-2 px-3 bg-yellow-200 shadow-md font-bold outline-none rounded-2xl">{phone}</h1>
            <h1 className="mb-2 text-base font-bold text-gray-800">주소</h1>
            <h1 className="py-2 mb-2 px-3 bg-yellow-200 shadow-md font-bold outline-none rounded-2xl">{addr}</h1>
            <h1 className="mb-2 text-base font-bold text-gray-800">SNS</h1>
            <h1 className="py-2 mb-2 px-3 bg-yellow-200 shadow-md font-bold outline-none rounded-2xl">{SNS}</h1>
            <h1 className="mb-2 text-base font-bold text-gray-800">직무/직책</h1>
            <h1 className="py-2 mb-2 px-3 bg-yellow-200 shadow-md font-bold outline-none rounded-2xl">{position}</h1>
            <h1 className="mb-2 text-base font-bold text-gray-800">이메일</h1>
            <h1 className="py-2 mb-2 px-3 bg-yellow-200 shadow-md font-bold outline-none rounded-2xl">{email}</h1>
            <h1 className="mb-2 text-base font-bold text-gray-800">메모</h1>
            <h1 className="py-2 mb-2 px-3 bg-yellow-200 shadow-md font-bold outline-none rounded-2xl">{memo}</h1>

            {/* <div className="pt-6">
              <div className="justify-between flex">
                <Button onClick={() => navigate("/userlist")}>이전</Button>
                <Button onClick={handleEditUser}>수정</Button>
              </div>
            </div> */}
          </div>
        </div>
        <br />

        
      </div>
    </div>
  );
};

export default ViewCard;
