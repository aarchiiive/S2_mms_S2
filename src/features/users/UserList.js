import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { deleteUser } from "./userSlice";
import t1 from "../../templates/template1.jpg";
import html2canvas from "html2canvas";
import { QRCodeSVG } from 'qrcode.react';

const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((store) => store.users);
  // const [fontColor, ]

  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  const onCapture = (id) => {
    const can = document.getElementById(id);
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
    link.click();
    document.body.removeChild(link);
  };

  const getURL = (id) => {
    return "localhost:3000/view-card/" + id;
    // return "https://220.117.120.96:3000";
  }

  const updateUsersList = () => {
    for (let i = 0; i < users.length; i++) {
      if (!users[i].purchased) {
        dispatch(deleteUser({ id : users[i].id }));
      }
    }
  }

  const renderCard = () =>
    users.map((user) => (
      <div class="shadow-lg">
        <div id={user.id} className="relative">
          <div className="flex m-auto items-center" key={user.id}>
            <div class="flex absolute z-20 scale-[0.9] right-12 bg-origin-border border-4 border-white" id="hide">
              <QRCodeSVG value={getURL(user.id)}/>
            </div>

            <div className="flex absolute z-40 p-8">
              <div className="pl-2">
                <img
                  className="h-28 w-auto rounded-md hover:opacity-70"
                  alt="업로드 이미지"     
                  src={user.image}
                  onClick={e => {
                    navigate("/view-card/" + user.id);
                  }}
                ></img>
                <div className="pt-2">
                  <h3 className={"font-bold text-lg " + user.mainColor}>{user.name}</h3>
                  <p className={"font-normal " + user.subColor}>{user.memo}</p>
                  <h3
                    className={"font-normal " + user.subColor}
                    data-html2canvas-ignore="true"
                  >
                    {user.time + "에 생성됨"}
                  </h3>
                </div>
              </div>
        
              <div className="z-30 gap-8 pl-4 flex m-auto" data-html2canvas-ignore="true">
                <Link to={`/edit-user/${user.id}`}>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={"h-6 w-6 shadow-md rounded-md font-bold " + user.hoverColor + " " + user.strokeColor}
                      fill="none"
                      viewBox="0 0 24 24"
                      // stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </button>
                </Link>
                <button onClick={() => handleRemoveUser(user.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={"h-6 w-6 shadow-md rounded-md font-bold " + user.hoverColor + " " + user.strokeColor}
                    fill="none"
                    viewBox="0 0 24 24"
                    // stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
                <button
                  className={"shadow-md rounded-md font-bold " + user.hoverColor}
                  onClick={() => onCapture(user.id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg"
                  className={"h-6 w-6 " + user.fillColor + " " + user.strokeColor}
                  viewBox="0 0 20 20"> 
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        
                </button>
              </div>
            </div>
            <img
              className=" w-full h-full m-device z-20 justify-between rounded-md"
              alt="명함 템플릿"
              src={user.template}
            ></img>
            <img
              className="absolute z-10 rounded-md"
              data-html2canvas-ignore="true"
              alt="명함 템플릿"
              src={user.template}
            ></img>
          </div>
        </div>
      </div>
    ));
  

  return (
    <div className="h-screen">
      {updateUsersList()}
      <div className="text-center">
        {/* <Link to="/add-user">
          <Button className="">명함 만들기</Button>
        </Link> */}
        <button className="transition ease-in-out animate-bounce delay-100 hover:scale-110 bg-yellow-200  py-2 px-6 my-10 shadow-lg rounded-md font-bold shadow-yellow-500/50 hover:bg-yellow-300"
          onClick={() => {navigate("/add-user")}}
        >
          명함 만들기
        </button>
      </div>
      <div class="pt-10">
        <div class="box-border backdrop-contrast-125 h-auto w-[1000px] m-auto p-12 border-2 rounded-md">
           <div className="grid gap-4 md:grid-cols-2">
            {users.length ? (
              renderCard()
            ) : (
              <p className="text-center col-span-2 text-gray-700 font-bold m-3 ">
                만든 명함이 없어요
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
