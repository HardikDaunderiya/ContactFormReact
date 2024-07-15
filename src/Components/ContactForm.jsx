import Button from "./Button";
import Form from "./Form";
const ContactForm = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div>
          <div className="flex items-center width-[472px] justify-between mt-5">
            <Button
              text="VIA SUPPORT CHAT"
              logo="public/Images/Message.png"
              bg="black"
              textcolor="white"
              width="220px"
            />
            <Button
              text="VIA CALL"
              logo="public/Images/Phone.png"
              bg="black"
              textcolor="white"
              width="220px"
            />
          </div>
          <div className="mt-5 border border-black">
            <Button
              text="VIA EMAIL FORM"
              logo="public/Images/Email.png"
              bg="white"
              textcolor="black"
              width="472px"
            />
          </div>
          <Form />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
