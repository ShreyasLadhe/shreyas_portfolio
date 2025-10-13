
import { Particles } from "../components/Particles";
const Contact = () => {
  return (
    <section className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <div className="flex flex-col gap-8 max-w-7xl mx-auto p-6">
        {/* Nimbus Architect Intro */}
        <div className="border border-white/10 rounded-2xl bg-primary shadow-xl overflow-hidden">
          <div className="p-7 md:p-8">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">Meet Nimbus Architect</h2>
                <p className="text-neutral-300 mt-2 md:max-w-3xl">
                  Your AI guide to this portfolio. Nimbus understands my projects, skills, and experience, and can
                  help you navigate content or get answers fast. It can also send me an email on your behalf, just provide
                  your name, email, and message directly in the chat.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-neutral-200">Understands site content</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-neutral-200">Explains skills & projects</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-neutral-200">Sends email from chat</span>
                </div>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                    <span className="text-xs text-neutral-300">Business Enquiries:</span>
                    <span className="text-xs font-medium text-white">Do not use Nimbus for Business Enquiry. Instead recach out directly at <a href="mailto:hello@shreyas-shack.tech" className="text-blue-600 font-bold hover:underline hover:text-blue-800">hello@shreyas-shack.tech</a></span>
                  </div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <img src="/assets/nimbus.jpg" alt="Nimbus Architect" className="w-40 h-40 rounded-lg opacity-80" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full border border-white/10 rounded-2xl bg-primary shadow-xl overflow-hidden">
          <div className="p-7 md:p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-white">Connect with me</h3>
              <p className="text-neutral-400 mt-1">Prefer a quick ping? Find me here.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                  <img src="/assets/socials/gmail.svg" alt="Email" className="h-7 w-7" />
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