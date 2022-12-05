import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { deleteUser } from "./userSlice";
import { useNavigate, useParams } from "react-router-dom";
import html2canvas from "html2canvas";

const Confirm = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  const onCapture = () => {
    const can = document.getElementById("imageWrapper");
    html2canvas(can).then((canvas) => {
      onSaveAs(canvas.toDataURL("image/png"), "명함.png");
    });
  };

  const onSaveAs = (uri, filename) => {
    console.log("onSaveAs");
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    // link.download = false;
    link.click();
    document.body.removeChild(link);
  };

  console.log(users[users.length - 1]);
  return (
    <div className="m-auto mt-10 h-screen">
      <h3 className="text-center text-gray-600 text-2xl mb-10">
        명함 최종 확인 단계입니다
      </h3>
      <h3 className="text-center  text-gray-600 text-2xl mb-10">
        명함을 생성하려면 결제를 진행해주세요
      </h3>

      <div className="m-auto w-96 ">
        <div id="imageWrapper" className="relative">
          <div 
            className="absolute m-auto h-auto rounded-md flex w-full p-5"
            key={users[users.length - 1].id}
          >
            <div className="z-10 p-5" >
              <img
                className="h-24 w-auto rounded-md"
                alt="업로드 이미지"
                src={users[users.length - 1].image}
              ></img>
              <h3 className="font-bold text-lg text-gray-700">
                {users[users.length - 1].name}
              </h3>
              <p className="font-normal text-gray-600">
                {users[users.length - 1].memo}
              </p>
            </div>
          </div>
          <img
            className="w-96 h-auto justify-center rounded-md"
            alt="명함 템플릿"
            src={users[users.length - 1].template}
          ></img>
          <div className="flex gap-4"></div>
        </div>
      </div>

      <div className="mt-10 w-1/3 m-auto justify-between flex">
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
  );
};

export default Confirm;