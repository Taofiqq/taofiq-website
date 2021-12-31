const Button = ({ buttons, filter }) => {
  console.log(buttons);
  return (
    <div>
      {buttons.map((item, i) => {
        return (
          <button onClick={() => filter(item)} key={i}>
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Button;
