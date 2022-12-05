import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPurchased } from "./userSlice";

const CashTransfer = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paymentInfo, setPaymentInfo] = useState({
    bank: "",
    customerName: "",
  });
  const amount = 1000;

  const getBankList = () => {
    const cardList = [
      "신한은행",
      "하나은행",
      "농협은행",
      "국민은행",
      "기업은행",
    ];
    return cardList.map((c, i) => {
      return <option value={c}>{c}</option>;
    });
  };

  const examplePaymentInfo = {
    // bank : "국민은행",
    // customerName : "",
    balance : 1000
  }

  const verifyPaymentInfo = () => {
    if (examplePaymentInfo.balance >= amount) return true;
    else return false;
  };

  const handleCheckOut = (e) => {
    e.preventDefault();
    if (paymentInfo.customerName.length === 0) {
      alert("입금자 성함이 입력되지 않았습니다");
      return;
    }

    if (verifyPaymentInfo()) {
      console.log("Payment verified!");
      alert("명함이 생성되었습니다!");
      dispatch(addPurchased({id : params.id, purchased : true}));
      navigate("/userlist");
    } else {
      alert("잔액이 부족합니다.");
    }
  };

  return (
    <div className="h-screen">
      <div class="my-8 grid grid-rows-1 gap-5 justify-center">
        <div>
          <label for="">은행명 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <select
            name="payment"
            className="relative h-6 w-48 text-center"
          >
            {getBankList()}
          </select>
        </div>
        <div className ="justify-between flex">
          입금자 성함 &nbsp;
          <input
            className="w-48 text-center"
            onChange={(e) => {
              e.preventDefault();
              console.log(e.target.value);
              setPaymentInfo({...paymentInfo, customerName : e.target.value});
            }}
          ></input>
        </div>
        <hr></hr>
        <div className="font-semibold text-center text-lg">총 결제 금액 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {amount}</div>
      </div>
      <div className="mt-10 w-1/3 m-auto justify-between flex">
        <Button onClick={() => navigate("/order/" + params.id)}>이전</Button>
        {/* bg-yellow-200 font-bold py-2 px-6 my-10 shadow-md rounded-md hover:bg-yellow-300 */}
        <button
          class="py-2 px-6 my-10 font-bold rounded-lg shadow-md bg-blue-200 hover:bg-blue-300"
          onClick={handleCheckOut}
        >
          결제하기
        </button>
        {/* <Button onClick={handleAddUser}>다음</Button> */}
      </div>
    </div>
  );
};

export default CashTransfer;
