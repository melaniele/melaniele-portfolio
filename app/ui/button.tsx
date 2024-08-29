type ButtonProps = {
  btnName: string;
  style: string;
};

const Button: React.FC<ButtonProps> = ({ btnName, style }) => {
  return (
    <button
      className={`px-6 py-3 sm:fit border-2 font-semibold rounded-lg
                focus:ring-offset-2 focus:ring-2 focus:ring-rose 
                transition ease-in-out duration-300
                hover:scale-110 hover:font-bold 
                ${style}`}
    >
      {btnName}
    </button>
  );
};

export default Button;
