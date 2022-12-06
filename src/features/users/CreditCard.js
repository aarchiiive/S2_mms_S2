import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPurchased } from "./userSlice";

const CreditCard = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const amount = 1000;
  const [paymentInfo, setPaymentInfo] = useState({
    company: "신한카드",
    number: "",
    expireDate: "",
    cvc: ""
  });

  const examplePaymentInfo = {
    company: "신한카드",
    number: "4113 8681 3646 9842",
    expireDate: "0327",
    cvc: "934"
  };

  const getPayment = () => {
    const cardList = [
      "신한카드",
      "하나카드",
      "농협카드",
      "국민카드",
      "삼성카드",
      "현대카드",
    ];

    return cardList.map((c, i) => {
      return <option value={c}>{c}</option>;
    });
  };

  const verifyPaymentInfo = () => {
    if (
      paymentInfo.company === examplePaymentInfo.company &&
      paymentInfo.number === examplePaymentInfo.number &&
      paymentInfo.expireDate === examplePaymentInfo.expireDate &&
      paymentInfo.cvc === examplePaymentInfo.cvc
    )
      return true;
    else return false;
  };

  const handleCheckOut = (e) => {
    e.preventDefault();

    const info = Object.values(paymentInfo);
    for (let i = 0; i < info.length; i++) {
      if (info[i].length === 0) { 
        console.log("입력 되지 않음");
        alert("입력되지 않은 결제 정보가 있습니다.");
        return;
      }
    }

    if (verifyPaymentInfo()) {
      console.log("Payment verified!");
      alert("명함이 생성되었습니다!");
      dispatch(addPurchased({id : params.id, purchased : true}));
      navigate("/userlist");
    } else {
      alert("유효하지 않은 결제 정보입니다.");
    }
  };

  return (
    <div class="h-screen">
      <div class="box-border backdrop-contrast-125 h-[560px] w-[1000px] m-auto p-4 border-2 rounded-md">
        <div className="py-8">
          <div class="my-8 grid grid-rows-1 gap-5 justify-center">
            <p>
              <label for="">카드사 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <select
                className="relative h-6 w-44 text-center border-[1px] rounded-md border-gray-400"
                name="payment"
              >
                {getPayment()}
              </select>
            </p>
            <div className="justify-between flex">
              카드번호
              <input
                className="ml-5 text-center border-[1px] rounded-md border-gray-400"
                onChange={(e) => {
                  // e.preventDefault();
                  console.log(e.target.value);
                  if (e.target.value === examplePaymentInfo.number) {
                    setPaymentInfo({ ...paymentInfo, number: e.target.value });
                    console.log("Card number verified!");
                  }
                }}
              ></input>
            </div>
            <div className ="justify-between flex">
              유효기간
              <input
                className="ml-5 text-center border-[1px] rounded-md border-gray-400"
                onChange={(e) => {
                  // e.preventDefault();
                  console.log(e.target.value);
                  if (e.target.value === examplePaymentInfo.expireDate) {
                    setPaymentInfo({...paymentInfo, expireDate: e.target.value});
                    console.log("Expire date verified!");
                  }
                }}
              ></input>
            </div>
            <div className="justify-between flex">
              CVC
              <input className="ml-5 text-center border-[1px] rounded-md border-gray-400"
                onChange={(e) => {
                  // e.preventDefault();
                  console.log(e.target.value);
                  if (e.target.value === examplePaymentInfo.cvc) {
                    setPaymentInfo({ ...paymentInfo, cvc: e.target.value });
                    console.log("CVC verified!");
                  }
                }}
              ></input>
            </div>
            <hr></hr>
            <p className="font-semibold text-center text-lg">
              총 결제 금액 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {amount}
            </p>
          </div>
        </div>
        <div className="mt-2 w-1/3 m-auto justify-between flex">
          <Button onClick={() => navigate("/order/" + params.id)}>이전</Button>
          <button
            class="py-2 px-4 my-10 font-bold rounded-lg shadow-md bg-blue-200 hover:bg-blue-300"
            onClick={handleCheckOut}
          >
            결제하기
          </button>
          {/* <Button onClick={handleAddUser}>다음</Button> */}
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
