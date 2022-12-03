import { React, useState } from 'react';
import "tailwindcss/tailwind.css";
// import styled from 'styled-components';
import t1 from "./templates/t1.jpg";
import t2 from "./templates/t2.jpg";
import t3 from "./templates/t3.jpg";
import t4 from "./templates/t4.jpg";


// function Checkout(props) {
//     let a = null;
//     const orderList = [
//         {
            
//         }
//     ]
//     return (
//         <div>
//             <p>
//                 상품명 <input
//                     value = "명함"
//                     onChange = {(e)=>{
//                         a = e.target.value;
//                         console.log(a);
//                         // setAuthor(e.target.value);
//                 }}/>                
//             </p>

//             <p>
//                 주문번호 <input
//                     value = {a}
//                     onChange = {(e)=>{
//                         a = e.target.value;
//                         console.log(a);
//                         // setAuthor(e.target.value);
//                 }}/>                
//             </p>

//             <p>
//                 상품명 <input
//                     value = {a}
//                     onChange = {(e)=>{
//                         a = e.target.value;
//                         console.log(a);
//                         // setAuthor(e.target.value);
//                 }}/>                
//             </p>

//             <p>
//                 주문일시 <input
//                     value = {a}
//                     onChange = {(e)=>{
//                         a = e.target.value;
//                         console.log(a);
//                         // setAuthor(e.target.value);
//                 }}/>                
//             </p>

//             <p>
//                 <select name="payment">
//                     <option value="CreditCard">신용/체크카드</option>
//                     <option value="CashTransfer">계좌이체</option>
//                 </select>
//             </p>

//             <button onClick={e => {
//                 e.preventDefault();
//                 props.setMode('Home');
//                 console.log("previous");
//             }}>이전으로</button>

//             <button onClick={e => {
//                 e.preventDefault();
//                 props.setLogin('Logout');
//                 console.log("next");
//             }}>다음으로</button>
//         </div>
//     )
// }




function RenderTemplate(props) {
  const images = [t1, t2, t3, t4];
  // const current = props.mode;

  return (
    images.map((img, i) => {
      return <img src={img} onClick={e => {
        // e.preventDefault();
        console.log("template", i, "selected");
        props.setMode('Order');
        console.log("clicked", props.mode);
      }}
      alt="card template"/>
    })
  )
}



class OrderList {
  constructor() {
    this.list = [];
    this.count = 0;
    this.size = -1;
    this.name = "나만의 명함";
    this.added = false;
    console.log("gen");
  }

  add() {
    if (!this.added){
      this.count++;
      this.size++;
      this.list.push(
        {
          id : this.count,
          name : this.name,
          date : "20221202",
          amount : 1000
        }
      )

      console.log("count :", this.count);
      this.added = true;
    }
  }

  get() { return this.list[this.size]; }
}


function Order(props) {
  return (
    <div>
      <div>상품명 {props.name}</div>
      <div>주문번호 {props.id}</div>
      <div>주문일시 {props.date}</div>
      <p>
        <select name="payment" 
        defaultValue="CreditCard" 
        onChange={e =>{
          console.log(e.target.value);
          props.setPayment(e.target.value);
        }}>
          <option value="CreditCard">신용/체크카드</option>
          <option value="CashTransfer">계좌이체</option>
        </select>
      </p>

      <hr></hr>

      <div>총 결제 금액 {props.amount}</div>

      <button class="py-2 px-6 font-bold rounded-lg shadow-md bg-yellow-200 hover:bg-yellow-300"
      onClick={e => {
        e.preventDefault();
        props.setMode('Home');
        console.log("previous");
      }}>
        이전으로
      </button>

      <button class="py-2 px-6 font-bold rounded-lg shadow-md bg-blue-200 hover:bg-blue-300"
      onClick={e => {
        e.preventDefault();
        props.setMode('Checkout');
        console.log("next");
      }}>
        다음으로
      </button>
    </div>
  )
}

function Checkout(props) { 
  const cardList = [
    "신한카드",
    "하나카드",
    "농협카드",
    "국민카드",
    "삼성카드",
    "현대카드"
  ]

  // function showCardList() {
  //     return (
  //         cardList.map((card, i) => {
  //             <option value="CreditCard">{card}</option>
  //         })
  //     )
  // }

  return (
    <div class="mt-10 max-w-xl mx-auto">
      <button class="py-2 px-6 font-bold rounded-lg shadow-md bg-yellow-200 hover:bg-yellow-300"
      onClick={e => {
        e.preventDefault();
        props.setMode('Order');
        console.log("previous");
      }}>
        이전으로
      </button>

      <button class="py-2 px-6 font-bold rounded-lg shadow-md bg-blue-200 hover:bg-blue-300"
      onClick={e => {
        e.preventDefault();
        props.setMode('Checkout');
        console.log("next");
      }}>
        결제하기
      </button>
    </div>
  )
}


function App() {
  const [mode, setMode] = useState('Home');
  const [login, setLogin] = useState('Login');
  const [orderList, setOrderList] = useState(new OrderList());
  const [payment, setPayment] = useState('CreditCard');
  let content = null;
  
  console.log("mode :", mode);
  
  if (mode === 'Home') {
    content = (
      <div>
        <RenderTemplate mode={mode} setMode={setMode}></RenderTemplate>
        <h2 className="text-center font-bold text-2xl text-gray-700">
          템플릿을 선택해주세요
        </h2>
      </div>
    );
  } else if (mode === 'Order') {
    orderList.add();
    content = (
      <Order 
      setMode={setMode} 
      setLogin={setLogin}
      setPayment={setPayment}
      id={orderList.get().id}
      name={orderList.get().name}
      date={orderList.get().date}
      amount={orderList.get().amount}
      ></Order>
    );
    console.log("payment :", payment);
  } else if (mode === 'Checkout') {
    content = (
      <Checkout
      setMode={setMode} 
      setLogin={setLogin}
      setPayment={setPayment}
      ></Checkout>
    )
  } 

  return (
    <div className="h-100% ml-8 mr-8 mt-8 md-8 bg-yellow-100 px-5 pt-10 ">
      <button onClick={e => {
        e.preventDefault();
        setLogin('Logout');
        console.log("Logout");
      }}>Logout</button>
      {content}
    </div>
  );
}

export default App;
