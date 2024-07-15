import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("VeniMadhav");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="ml-4">
          <div className="mt-6 ">
            <label
              htmlFor="name"
              className="absolute my-[-12px] mx-[10px] bg-white py-0 px-[10px] "
            >
              NAME
            </label>
            <input
              type="text"
              name="Name"
              id="name"
              className="border border-black w-[440px] h-[50px]"
            />
          </div>
          <div className="mt-6 ">
            <label
              htmlFor="E-mail"
              className="absolute my-[-12px] mx-[10px] bg-white py-0 px-[10px] "
            >
              E-mail
            </label>
            <input
              type="text"
              name="E-mail"
              id="E-mail"
              className="border border-black w-[440px] h-[50px]"
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="Text"
              className="absolute my-[-12px] mx-[10px] bg-white py-0 px-[10px] "
            >
              Text
            </label>
            <input
              type="text"
              name="Text"
              id="Text"
              className="border border-black w-[440px] h-[50px]"
            />
          </div>
          <div className="flex justify-end w-[440px]">
            <button className="bg-black text-white w-[220px] h-[44px] rounded-md gap-[10px] mt-6 ">
              Submit
            </button>
          </div>
        </div>
      </form>
      <div>{name + " " + email + " " + text}</div>
    </div>
  );
};

export default Form;
