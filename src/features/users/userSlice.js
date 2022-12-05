import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const date = new Date();
      const editDate =
        date.getFullYear() +
        "년 " +
        (date.getMonth() + 1) +
        "월" +
        date.getDate() +
        "일 " +
        ("0" + date.getHours()).slice(-2) +
        ":" +
        ("0" + date.getMinutes()).slice(-2)+'에 수정됨';
      const { id, name, phone, addr, SNS, position,email,time ,memo} = action.payload;
      const existingUser = state.find(user => user.id === id);
      if(existingUser) {
        existingUser.name = name;
        existingUser.phone = phone;
        existingUser.addr = addr;
        existingUser.SNS = SNS;
        existingUser.position = position;
        existingUser.email = email;
        existingUser.time= editDate;
        existingUser.memo = memo;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if(existingUser) {
        return state.filter(user => user.id !== id);
      }
    },
    addTemplate: (state, action) => {
      const { id, template, templateName } = action.payload;
      const existingUser = state.find(user => user.id === id);
      console.log(existingUser);
      if (existingUser) {
        existingUser.template = template;
        existingUser.templateName = templateName;
      }
    },
    addPayment: (state, action) => {
      const { id, payment } = action.payload;
      const existingUser = state.find(user => user.id === id);
      console.log(existingUser);
      if (existingUser) {
        existingUser.payment = payment;
      }
    },
    addPurchased: (state, action) => {
      const { id, purchased } = action.payload;
      const existingUser = state.find(user => user.id === id);
      console.log(existingUser);
      if (existingUser) {
        existingUser.purchased = purchased;
      }
    }
  }
});

export const { addUser, editUser, deleteUser, addTemplate, addPayment, addPurchased } = userSlice.actions;
export default userSlice.reducer;