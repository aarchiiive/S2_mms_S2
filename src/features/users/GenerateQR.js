import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {QRCodeSVG} from 'qrcode.react';
import { Container } from "postcss";

const GenerateQR = () => {
  const url = "localhost:3000/bussiness-card";

  return (
    <div class="mt-8 grid justify-items-stretch">
      <div class="justify-self-center ...">
        <QRCodeSVG value={url} />
      </div>
      <h1 class="mt-8 justify-self-center ...">명함이 생성되었습니다!</h1>
    </div>
  )
}

export default GenerateQR;