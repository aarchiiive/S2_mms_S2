import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { deleteUser } from "./userSlice";
import t1 from "../../templates/template1.jpg";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  const color = (t) => {
    console.log("template name :", t);
    if (t === "t1") {
      return "w-full h-48 bg-red-200 p-5 flex items-center justify-between"
    } else if (t === "t2") {
      return "w-full h-48 bg-blue-200 p-5 flex items-center justify-between"
    } else if (t === "t3") {
      return "w-full h-48 bg-amber-200 p-5 flex items-center justify-between"
    } else if (t === "t4") {
      return "w-full h-48 bg-green-200 p-5 flex items-center justify-between"
    }
  }

  const renderCard = () =>
    users.map((user) => (
      // <div
      //   // className={"w-auto h-48 bg-" + user.templateName + " bg-fixed md:bg-contain p-5 flex items-center justify-between"}
      //   className={"w-auto h-48 bg-t4 bg-contain bg-center p-5 flex items-center justify-between"}
      //   // class={getTemplate(user)}
      //   // style={"background-image: URL(" + user.template + ")"}
      //   key={user.id}
      // >
      
      <div
        className={color(user.templateName)}
        key={user.id}
      >
        <div>
          <img
            className="h-24 w-auto rounded-md"
            alt="업로드 이미지"
            src={user.image}
          ></img>

          <h3 className="font-bold text-lg text- text-gray-700">{user.name}</h3>
          <p className="font-normal text-gray-600">{user.memo}</p>
          <h3 className="font-normal text-gray-600">{user.time}</h3>
        </div>
        <div className="flex gap-4">
          <Link to={`edit-user/${user.id}`}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              className="h-6 w-6"
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
        </div>
      </div>

      // <Box user={user}></Box>
    ));

  return (
    <div>
      <div className="text-center">
        <Link to="/add-user">
          <Button>명함 만들기</Button>
        </Link>
      </div>
      <div className="h-screen grid gap-5 md:grid-cols-2">
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
