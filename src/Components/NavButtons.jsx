function NavButtons(props) {
  return (
    <>
      <button className="text-white px-4 py-2 font-bold hover:scale-105 transition-all duration-300 shadow-2xl rounded-lg border border-white hover:bg-[#5c5b5b] ">
        {props.buttonText}
      </button>
    </>
  );
}

export default NavButtons;
