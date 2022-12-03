import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const CreditCard = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const amount = 1000;
  let paymentVerified = false;
  const [paymentInfo, setPaymentInfo] = useState(
    {
      company : "",
      number : "",
      expireDate : "0327",
      cvc : ""
    }
  )

  const examplePaymentInfo = {
    creditCard : {
      company : "신한카드",
      number : "4113 8681 3646 9842",
      expireDate : "0327",
      cvc : "934"
    },
    cash : {

    }
  }


  const getPayment = () => {
    const cardList = [
      "신한카드",
      "하나카드",
      "농협카드",
      "국민카드",
      "삼성카드",
      "현대카드"
    ]
    
    return (
      cardList.map((c, i) => {
        return <option value={c}>{c}</option> 
      })
    )
  }

  const verifyPaymentInfo = () => {
    if (paymentInfo.company === examplePaymentInfo.company &&
        paymentInfo.number === examplePaymentInfo.number &&
        paymentInfo.expireDate === examplePaymentInfo.expireDate &&
        paymentInfo.cvc === examplePaymentInfo.cvc)
      return true;
    else
      return false;
  }

  const handleCheckOut = () => {
    if (verifyPaymentInfo())
    {
      console.log("Payment verified!");
      navigate("/generate-qr"); 
      // 어디론가 가기...
      // navigate("/checkout"); 
    } else {
      alert("유효하지 않은 결제 정보입니다.");
    }
      
  };

  return (
    <div>
      <div class="h-screen">
        <div class="my-8 grid grid-rows-1 gap-5 flex justify-center">
          <div>카드사 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <select name="payment"
            class="py-1 mb-4 px-16 border-1.5 outline-none">
              {getPayment()}
            </select>
          </div>
          <div>
            카드번호 &nbsp;&nbsp; 
            <input class="py-1 mb-2 px-12 border-1.5 outline-none"
            onChange={e => {
              e.preventDefault();
              console.log(e.target.value);
              if (e.target.value === examplePaymentInfo.creditCard.number) {
                setPaymentInfo({...paymentInfo, number : e.target.value});
                console.log("Card number verified!");
              }
            }}></input>
          </div>
          <div>
            유효기간 &nbsp;&nbsp; 
            <input class="py-1 mb-2 px-12 border-1.5 outline-none"
            onChange={e => {
              e.preventDefault();
              console.log(e.target.value);
              if (e.target.value === examplePaymentInfo.creditCard.expireDate) {
                setPaymentInfo({...paymentInfo, expireDate : e.target.value});
                console.log("Expire date verified!");
              }
            }}></input>
          </div>
          <div>
            CVC &nbsp;&nbsp; 
            <input class="py-1 mb-2 px-12 border-1.5 outline-none"
            onChange={e => {
              e.preventDefault();
              console.log(e.target.value);
              if (e.target.value === examplePaymentInfo.creditCard.cvc) {
                setPaymentInfo({...paymentInfo, cvc : e.target.value});
                console.log("CVC verified!");
              }
            }}></input>
            </div>
          <hr></hr>
          <div>총 결제 금액 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {amount}</div>
        </div>
      </div>
      <div className = "flex justify-around">
        <Button onClick={() => navigate("/order")}>이전</Button>
        {/* bg-yellow-200 font-bold py-2 px-6 my-10 shadow-md rounded-md hover:bg-yellow-300 */}
        <button class="py-2 px-6 my-10 font-bold rounded-lg shadow-md bg-blue-200 hover:bg-blue-300"
        onClick={handleCheckOut}>
          결제하기
        </button>
        {/* <Button onClick={handleAddUser}>다음</Button> */}
      </div>
    </div>
  )
}

export default CreditCard;