import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {QRCodeSVG} from 'qrcode.react';
import { Container } from "postcss";


const BussinessCard = () => {
  return (
    <div class="mt-8 grid justify-items-stretch">
      <img
      src="example.jpg"
      class="justify-self-center"></img>
    </div>
  )
}

export default BussinessCard;