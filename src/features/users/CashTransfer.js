import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const CashTransfer = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paymentInfo, setPaymentInfo] = useState({
    bank: "",
    customerName: "",
  });
  let amount = 1000;
  let balance = 2000;

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
    creditCard : {
      bank : "신한카드",
      customerName : "",
    },
  }

  const verifyPaymentInfo = () => {
    if (balance >= amount) return true;
    else return false;
  };

  const handleCheckOut = () => {
    if (verifyPaymentInfo()) {
      console.log("Payment verified!");
      alert("명함이 생성되었습니다!");
      navigate("/");
      // 어디론가 가기...
      // navigate("/checkout");
    } else {
      alert("잔액이 부족합니다.");
    }
  };

  return (
    <div className="h-screen">
      <div class="my-8 grid grid-rows-1 gap-5 justify-center">
        <div>
          은행명 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select
            name="payment"
            class="py-1 mb-4 px-16 border-1.5 outline-none"
          >
            {getBankList()}
          </select>
        </div>
        <div>
          입금주 성함 &nbsp;&nbsp;
          <input
            class="py-1 mb-2 px-12 border-1.5 outline-none"
            onChange={(e) => {
              e.preventDefault();
              console.log(e.target.value);
            }}
          ></input>
        </div>
        <hr></hr>
        <div>총 결제 금액 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {amount}</div>
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
