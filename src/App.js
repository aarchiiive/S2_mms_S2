
import { Route, Routes } from "react-router-dom";
import AddUser from "./features/users/AddUser";
import EditUser from "./features/users/EditUser";
import UserList from "./features/users/UserList";
import ViewTemplates from './features/users/ViewTemplates';
import Order from './features/users/Order';
import CreditCard from './features/users/CreditCard';
import CashTransfer from './features/users/CashTransfer';
import GenerateQR from './features/users/GenerateQR';
import BussinessCard from './features/users/BussinessCard';
import Confirm from './features/users/Confirm';

function App() {
  return (
    <div className=" bg-yellow-100 px-5 pt-10 ">
      <h1 className="mb-10 text-center font-bold text-4xl text-gray-700">명함을 낳아줘</h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/confirm" element={<Confirm />}/>
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/view-templates" element={<ViewTemplates />} />
        <Route path="/order" element={<Order />} />
        <Route path="/checkout-credit-card" element={<CreditCard />} />
        <Route path="/checkout-cash-transfer" element={<CashTransfer />} />
        <Route path="/bussiness-card" element={<BussinessCard />} />
        <Route path="/generate-qr" element={<GenerateQR />} />
      </Routes>
    </div>
  );
}

export default App;