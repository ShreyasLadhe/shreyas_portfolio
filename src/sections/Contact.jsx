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
          to_name: "Shreyas Ladhe",
          from_email: formData.email,
          to_email: "hello@shreyas-shack.tech",
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
      <div className="flex flex-col lg:flex-row items-start justify-center gap-10 max-w-7xl mx-auto p-6">
        <div className="flex flex-col items-center justify-center lg:w-1/2 w-full border border-white/10 rounded-2xl bg-primary p-6">
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
    <div className="flex flex-col lg:w-1/2 w-full border border-white/10 rounded-2xl bg-primary shadow-xl overflow-hidden">
      <div className="p-7 md:p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-white">Connect with me</h3>
          <p className="text-neutral-400 mt-1">Prefer a quick ping? Find me here.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="https://github.com/ShreyasLadhe"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-5"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
              <img src="/assets/socials/github.svg" alt="GitHub" className="h-7 w-7" />
            </span>
            <div className="flex-1">
              <p className="text-white font-medium">GitHub</p>
              <p className="text-xs text-neutral-400">Explore my projects and code</p>
            </div>
            <span className="text-neutral-400 group-hover:text-white transition-colors">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/shreyasladhe"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-5"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
              <img src="/assets/socials/linkedIn.svg" alt="LinkedIn" className="h-7 w-7" />
            </span>
            <div className="flex-1">
              <p className="text-white font-medium">LinkedIn</p>
              <p className="text-xs text-neutral-400">Let’s connect professionally</p>
            </div>
            <span className="text-neutral-400 group-hover:text-white transition-colors">↗</span>
          </a>
          <a
            href="https://hashnode.com/@nimbusarchitect"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-5"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
              <img src="/assets/socials/hashnode.svg" alt="Hashnode" className="h-7 w-7" />
            </span>
            <div className="flex-1">
              <p className="text-white font-medium">Hashnode</p>
              <p className="text-xs text-neutral-400">Read my blogs and guides</p>
            </div>
            <span className="text-neutral-400 group-hover:text-white transition-colors">↗</span>
          </a>
          <a
            href="mailto:hello@shreyas-shack.tech"
            className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-5"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-white/90">
                <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5A2.25 2.25 0 0 1 22.5 6.75v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75Z" />
                <path d="M2.533 6.79a.75.75 0 0 1 1.027-.257l7.44 4.464a2.25 2.25 0 0 0 2 0l7.44-4.464a.75.75 0 1 1 .77 1.284l-7.44 4.463a3.75 3.75 0 0 1-3.44 0L2.79 7.817a.75.75 0 0 1-.257-1.026Z" className="opacity-90" />
              </svg>
            </span>
            <div className="flex-1">
              <p className="text-white font-medium">Email</p>
              <p className="text-xs text-neutral-400">hello@shreyas-shack.tech</p>
            </div>
            <span className="text-neutral-400 group-hover:text-white transition-colors">↗</span>
          </a>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
};

export default Contact;