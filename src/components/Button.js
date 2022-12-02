
const Button = ({ onClick, children }) => {
  return (
    <button className="bg-yellow-200 font-bold py-2 px-6 my-10 rounded "
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button