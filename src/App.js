
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
import Confirm from "./features/users/Confirm";

function App() {
  return (
    <div className=" bg-yellow-100 px-5 pt-10 ">
      <h1 className="mb-10 text-center font-bold text-4xl text-gray-700">명함을 낳아줘</h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/confirm/:id" element={<Confirm />}/>
        <Route path="/view-templates/:id" element={<ViewTemplates />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/checkout-credit-card/:id" element={<CreditCard />} />
        <Route path="/checkout-cash-transfer/:id" element={<CashTransfer />} />
        <Route path="/bussiness-card/:id" element={<BussinessCard />} />
        <Route path="/generate-qr/:id" element={<GenerateQR />} />
      </Routes>
    </div>
  );
}

export default App;