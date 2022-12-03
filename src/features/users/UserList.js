import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { deleteUser } from "./userSlice";
import 종이질감 from "../../templates/종이질감.jpg";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  const renderCard = () =>
    users.map((user) => (
      <div className ="relative">
          <img
            className="absolute w-full h-full mdevice justify-between rounded-md"
            alt="명함 템플릿"
            src={종이질감}
          ></img>
        <div
          className="w-full h-full flex items-center justify-between"
          key={user.id}
        >
          <div className = "z-10 p-5">
            <img
              className="h-24 w-auto rounded-md"
              alt="업로드 이미지"
              src={user.image}
            ></img>

            <h3 className="font-bold text-lg text- text-gray-700">
              {user.name}
            </h3>
            <p className="font-normal text-gray-600">{user.memo}</p>
            <h3 className="font-normal text-gray-600">{user.time}</h3>
          </div>
          <div className="z-10 flex gap-4 mr-5">
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
