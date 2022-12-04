import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { addPayment } from "./userSlice";

const Order = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((store) => store.users);
  const existingUser = users.filter((user) => user.id === params.id);
  // const { name, phone, addr, SNS, position, email, time, memo } = existingUser[0];
  const date = new Date();
  const getDate = () => {
    return (
      date.getFullYear() +
      "년 " +
      (date.getMonth() + 1) +
      "월" +
      date.getDate() +
      "일 " +
      ("0" + date.getHours()).slice(-2) +
      "시 " +
      ("0" + date.getMinutes()).slice(-2) +
      "분"
    )
  }

  // const users = useSelector((store) => store.users);
  // const handleRemoveUser = (id) => {
    
  // };

  // const existingUser = users.filter((user) => user.id === params.id);
  // const { name, phone, addr, SNS, position, email, time, memo } =
  //   existingUser[0];


  const cardName = "명함";
  const id = "M0001";
  // const date = "20221104";
  const amount = 1000;
  const [ payment, setPayment ] = useState("CreditCard");

  const handleOrder = () => {
    if (payment === "CreditCard") {
      setPayment("CreditCard");
      dispatch(addPayment({ id : params.id , payment : "CreditCard"}));
      console.log(existingUser[0].payment);
      navigate("/checkout-credit-card/" + params.id);
    }
    else {
      setPayment("CashTransfer");
      dispatch(addPayment({ id : params.id , payment : "CashTransfer"}));
      console.log(existingUser[0].payment);
      navigate("/checkout-cash-transfer/" + params.id);
    }
  };

  const getSpace = (k) => {
    let space = []
    for (let i = 0; i < k; k++) {
      space.push(" ");
    }
    return space;
  }

  return (
    <div className="h-screen">
        <div class="my-8 grid grid-rows-1 gap-5 justify-center">
          <div>상품명 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cardName}</div>
          <div>주문번호 &nbsp;&nbsp; {id}</div>
          <div>주문일시 &nbsp;&nbsp; {getDate()}</div>
          <p>
            <label>결제수단 &nbsp;&nbsp;&nbsp;</label>
            <select name="payment" 
            defaultValue="CreditCard" 
            onChange={e =>{
              e.preventDefault();
              console.log("payment changed :", e.target.value);
              setPayment(e.target.value)
            }}>
              <option value="CreditCard">신용/체크카드</option>
              <option value="CashTransfer">계좌이체</option>
            </select>
          </p>
          <hr></hr>
          <div>총 결제 금액 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {amount}</div>
        
      </div>
      <div className = "mt-10 w-1/3 m-auto justify-between flex">
        <Button onClick={() => navigate("/view-templates" + params.id)}>이전</Button>
        {/* bg-yellow-200 font-bold py-2 px-6 my-10 shadow-md rounded-md hover:bg-yellow-300 */}
        {/* <button class="py-2 px-6 my-10 font-bold rounded-lg shadow-md bg-blue-200 hover:bg-blue-300"
        onClick={handleAddUser}>
          결제하기
        </button> */}
        <Button onClick={handleOrder}>다음</Button>
      </div>
    </div>
  )
}

export default Order;