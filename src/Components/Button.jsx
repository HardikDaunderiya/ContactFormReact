/* eslint-disable react/prop-types */
const Button = ({bg,width,logo,text,textcolor}) => {

  return (
    <div>
      <button className=" text-white  h-[44px] items-center justify-center flex gap-3 rounded-md" style={{
        backgroundColor:bg,
        width:width,
        color:textcolor,
      }}>
        <img src={logo} />
        <h1>{text}</h1>
      </button>
    </div>
  );
};

export default Button;
