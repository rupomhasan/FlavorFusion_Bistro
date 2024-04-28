import Cover from "../../Components/Common/Cover/Cover";
import contactCoverBg from "../../assets/contact/banner.jpg";
import ContactForm from "./ContactForm";
import Location from "./Location";

const ContactUs = () => {
  return (
    <div>
      <Cover
        title="Contact"
        img={contactCoverBg}
        message="Would you like to tyr a dish"
      />
      <Location />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
