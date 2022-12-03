
const Button = ({ onClick, children }) => {
  return (
    <button className="bg-yellow-200  py-2 px-6 my-10 shadow-md rounded-md font-bold hover:bg-yellow-300"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button