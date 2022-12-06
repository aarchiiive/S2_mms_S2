import { useSelector } from "react-redux";
import Button from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { QRCodeSVG } from 'qrcode.react';

const Confirm = () => {
  const params = useParams();
  const navigate = useNavigate();
  const users = useSelector((store) => store.users);

  return (
    <div className="m-auto mt-10 h-screen">
      <div class="box-border backdrop-contrast-125 h-[560px] w-[1000px] m-auto p-4 border-2 rounded-md">
        <div className="py-4">
          <h3 className="text-center text-gray-600 text-2xl mb-10">
            명함 최종 확인 단계입니다
          </h3>
          <h3 className="text-center text-gray-600 text-2xl mb-10">
            명함을 생성하려면 결제를 진행해주세요
          </h3>
          <div className="m-auto w-96 drop-shadow-lg">
            <div className="">
              <div id="imageWrapper" className="relative">
                <div
                  className="absolute m-auto h-auto rounded-md flex w-full p-5"
                  key={users[users.length - 1].id}
                >
                  <div className="z-10 pl-6 mt-3">
                    <img
                      // className="h-[100px] w-auto border-[2px] border-double border-white rounded-md"
                      className="h-[100px] w-auto rounded-md"
                      alt="업로드 이미지"
                      src={users[users.length - 1].image}
                    ></img>
                    <h3 className={"font-bold pt-2 text-lg " + users[users.length - 1].mainColor}>
                      {users[users.length - 1].name}
                    </h3>
                    <p className={"font-normal " + users[users.length - 1].subColor}>
                      {users[users.length - 1].memo}
                    </p>
                  </div>
                </div>
                <div class="flex absolute scale-75 blur py-12 right-10" id="hide">
                  <QRCodeSVG value={"google.com"} />
                </div>
                <img
                  className="w-96 h-[220px] justify-center rounded-md"
                  alt="명함 템플릿"
                  src={users[users.length - 1].template}
                  // src={paper}
                ></img>
                <div className="flex gap-4"></div>
              </div>
            </div>
          </div>
          <div className="py-4 w-1/3 m-auto justify-between flex">
            <Button onClick={() => navigate("/view-templates/" + params.id)}>
              이전
            </Button>
            <Button onClick={() => navigate("/order/" + params.id)}>결제</Button>
            {/* <button
              className="bg-yellow-200  py-2 px-6 my-10 shadow-md rounded-md font-bold hover:bg-yellow-300"
              onClick={onCapture}
            >
              클릭
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;