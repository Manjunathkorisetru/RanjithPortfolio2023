function NavButtons(props) {
  return (
    <button className="text-white bg-[#5c5b5b] px-4 py-2 font-bold hover:scale-110 transition-all duration-300 shadow-2xl rounded-lg">
      {props.buttonText}
    </button>
  );
}

export default NavButtons;
