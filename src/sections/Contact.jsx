import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("From submitted:", formData);
      await emailjs.send(
        "service_23y9r7d",
        "template_contact-port",
        {
          from_name: formData.name,
          to_name: "Shreyas",
          from_email: formData.email,
          to_email: "shreyasl9819@gmail.com",
          message: formData.message,
        },
        "g7drWYM6CK6G3OGuk"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "You message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Somthing went wrong!");
    }
  };
  return (
    <section className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col lg:flex-row items-start justify-center gap-10 max-w-5xl mx-auto p-5">
        <div className="flex flex-col items-center justify-center lg:w-1/3 w-full border border-white/10 rounded-2xl bg-primary p-5">
          <div className="flex flex-col items-start w-full gap-5 mb-10">
            <h2 className="text-heading">Let's have a Chat</h2>
            <p className="font-normal text-neutral-400 text-justify">
              Whether you're looking to build a new cloud native solution, perform a migration of existing on-prem architecture or brewing something new with a cup of coffee, I'm here to assist!
            </p>
          </div>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="feild-label">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="field-input field-input-focus"
                placeholder="John Doe"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="feild-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="field-input field-input-focus"
                placeholder="example@email.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="feild-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                type="text"
                rows="5"
                className="field-input field-input-focus"
                placeholder="Share your thoughts..."
                autoComplete="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
            >
              {!isLoading ? "Ping Me" : "Pinging..."}
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center justify-center lg:w-2/3 w-full border border-white/10 rounded-2xl bg-primary shadow-xl overflow-hidden">
          <div className="p-4 w-full">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/fFwOYtOv7S9kWisZXifxY"
              width="100%"
              style={{ height: "703px", borderRadius: "0.75rem" }}
              frameBorder="0"
              title="Portfolio Pal - Ask Shreyas"
              className="rounded-lg shadow-inner"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;