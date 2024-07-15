import ContactForm from "./ContactForm";

const Body = () => {
  return (
    <>
      <div >
        <div  className="mt-[72px] ml-[188px]">
          <h1 className="text-3xl">CONTACT US</h1>
        </div>
        <div>
          <h3 className="text-s mt-[24px] ml-[188px] leading-[24px]">
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.{" "}
          </h3>
        </div>
        <div className="flex justify-center items-center ">
          <div className="mr-10"><ContactForm/></div>
          <div> <img src="public\Images\Service.jpg"/></div>
        </div>
      </div>
    </>
  );
};

export default Body;
