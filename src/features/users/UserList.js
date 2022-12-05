import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { deleteUser } from "./userSlice";
import t1 from "../../templates/template1.jpg";
import html2canvas from "html2canvas";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
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

  const color = (user) => {
    let t = user.templateName;
    console.log("template name :", t);
    if (t === "t1") {
      return "w-full h-48 bg-yellow-200 p-5 flex items-center justify-between";
    } else if (t === "t2") {
      return "w-full h-48 bg-cyan-100 p-5 flex items-center justify-between";
    } else if (t === "t3") {
      return "w-full h-48 bg-rose-200 p-5 flex items-center justify-between";
    } else if (t === "t4") {
      return "w-full h-48 bg-emerald-200 p-5 flex items-center justify-between";
    }
  };

  const getTemplate = (t) => {
    if (t === "t1") {
      return "w-full h-48 bg-yellow-200 p-5 flex items-center justify-between";
    } else if (t === "t2") {
      return "w-full h-48 bg-cyan-100 p-5 flex items-center justify-between";
    } else if (t === "t3") {
      return "w-full h-48 bg-rose-200 p-5 flex items-center justify-between";
    } else if (t === "t4") {
      return "w-full h-48 bg-emerald-200 p-5 flex items-center justify-between";
    }
  };

  const renderCard = () =>
    users.map((user) => (
      <div id={user.id} className="relative">
        <div className="flex m-auto items-center" key={user.id}>
          <div className="flex absolute z-10 p-5">
            <div>
              <img
                className="h-24 w-auto rounded-md"
                alt="업로드 이미지"
                src={user.image}
              ></img>
              <h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
              <p className="font-normal text-gray-600">{user.memo}</p>
              <h3
                className="font-normal text-gray-600"
                data-html2canvas-ignore="true"
              >
                {user.time}
              </h3>
            </div>
            <div className="z-10 gap-2 flex m-auto" data-html2canvas-ignore="true">
              <Link to={`edit-user/${user.id}`}>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shadow-md rounded-md font-bold hover:bg-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
                  className="h-6 w-6 shadow-md rounded-md font-bold hover:bg-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
                className="shadow-md rounded-md font-bold hover:bg-gray-200"
                onClick={() => onCapture(user.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20">
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                
              </button>
            </div>
          </div>

          <img
            className=" w-full h-full m-device justify-between rounded-md"
            alt="명함 템플릿"
            src={user.template}
          ></img>
        </div>
      </div>
    ));

  return (
    <div className="h-screen">
      <div className="text-center">
        <Link to="/add-user">
          <Button>명함 만들기</Button>
        </Link>
      </div>

      <div className="m-auto w-1/2 grid gap-5 md:grid-cols-2">
        {users.length ? (
          renderCard()
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-bold m-3 ">
            만든 명함이 없어요
          </p>
        )}
      </div>
    </div>
  );
};

export default UserList;
