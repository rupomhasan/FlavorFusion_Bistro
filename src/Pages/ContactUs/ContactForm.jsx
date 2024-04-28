import ReCAPTCHA from "react-google-recaptcha";
import SectionTitle from "../../Components/Shared/Title/SectionTitle";
import { GrSend } from "react-icons/gr";
const ContactForm = () => {



  const onChange = (e) => {
    console.log(e);
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <SectionTitle subheading="send us a Message" heading="Contact Form" />
      <div className="bg-base-300 mx-4 p-10 rounded">
        <form>
          <div className="space-y-5">
            <div className="flex w-full gap-5 ">
              <div className="space-y-2 w-full">
                <span className="text-lg font-black">Name</span>
                <input
                  type="text"
                  placeholder="Enter your name rounded"
                  className="w-full px-4 py-1 block rounded"
                />
              </div>
              <div className="space-y-2 w-full">
                <span className="text-lg font-black">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email "
                  className="w-full px-4 py-1 block rounded"
                />
              </div>
            </div>
            <div className="space-y-2 w-full">
              <span className="text-lg font-black">Phone Number</span>
              <input
                type="email"
                placeholder="Enter your phone number "
                className="w-full px-4 py-1 block rounded"
              />
            </div>
            <div className="space-y-2 w-full">
              <span className="text-lg font-black">Message</span>
              <textarea
                rows="7"
                placeholder="Write your message here . . . "
                className="w-full px-4 py-1 block rounded"
              />
            </div>
            <ReCAPTCHA
              onChange={onChange}
              sitekey="6Lc1c8kpAAAAAJCLvJRJAL7csBp1Z5RozZk6_5YU"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="btn text-xl uppercase px-10 bg-gradient-to-r from-[#835d23] to-[#ecb04f] text-white"
              >
                Send Message <GrSend />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
