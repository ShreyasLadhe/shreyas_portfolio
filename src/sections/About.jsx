import React, { useRef } from 'react'
import Card from '../components/Card'
import { Globe } from '../components/Globe'
import CopyEmailButton from '../components/CopyEmailButton'
import { Frameworks } from '../components/Frameworks'
import RedirectCredlyButtonAWS from '../components/RedirectCredlyButtonAWS'
import RedirectCredlyButtonGCP from '../components/RedirectCredlyButtonGCP'
import { certifications } from '../constants'
import ConfettiExplosion from 'react-confetti-explosion';
import { useState } from 'react';

const About = () => {
  const grid2Container = useRef()
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img src="assets/cloud-pov.png" alt="cloud-pov" className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2]" />
          <div className="z-10">
            <p className="headtext">Hi I'm Shreyas Ladhe</p>
            <p className="subtext">Over the last year I am actively working on developing my cloud and DevOps skills to deliver dynamic cloud-native applications</p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div className="flex items-center justify-center w-full h-full" ref={grid2Container}>
            <p className="flex items-end text-5xl text-gray-500">Cloud Expertise</p>
            <Card style={{ rotate: "12deg", top: "8%", left: "18%" }} img="assets/logos/ccp.png" containerRef={grid2Container} />
            <Card style={{ rotate: "12deg", top: "12%", left: "8%" }} img="assets/logos/aws-saa.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-18deg", top: "15%", left: "42%" }} img="assets/logos/aif.png" containerRef={grid2Container} />
            <Card style={{ rotate: "30deg", top: "65%", left: "82%" }} img="assets/logos/OCIF.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-22deg", top: "68%", left: "74%" }} img="assets/logos/ociaa.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-35deg", top: "38%", left: "78%" }} text="Serverless" containerRef={grid2Container} />
            <Card style={{ rotate: "25deg", top: "60%", left: "30%" }} text="Docker" containerRef={grid2Container} />
            <Card style={{ rotate: "-12deg", top: "22%", left: "58%" }} img="assets/logos/github.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "18deg", top: "58%", left: "16%" }} img="assets/logos/git.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-8deg", top: "73%", left: "56%" }} img="assets/logos/react.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "10deg", top: "12%", left: "68%" }} text="DevOps" containerRef={grid2Container} />
            <Card style={{ rotate: "20deg", top: "42%", left: "48%" }} text="Solutions Architecture" containerRef={grid2Container} />
            <Card style={{ rotate: "-40deg", top: "50%", left: "6%" }} text="ClickUp" containerRef={grid2Container} />

          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">I'm based in Mumbai, and open to remote work <strong>Worldwide</strong></p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full p-4">
            {/* Main heading with elegant styling */}
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-white tracking-wide">
                Want to connect and know more about me?
              </h3>
            </div>
            
            {/* Buttons container with better spacing and layout */}
            <div className="flex flex-col items-center gap-3 w-full max-w-sm">
              {/* Credly Profile Buttons */}
              <div className="flex flex-col gap-2 w-full">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <RedirectCredlyButtonAWS />
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <RedirectCredlyButtonGCP />
                </div>
              </div>
              
              {/* Divider */}
              <div className="flex items-center w-full my-1">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                <span className="px-3 text-xs text-gray-400 font-medium">OR</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
              </div>
              
              {/* Email Button */}
              <div className="relative group w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <CopyEmailButton />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-3 right-3 w-12 h-12 bg-white/5 rounded-full blur-sm"></div>
            <div className="absolute bottom-3 left-3 w-10 h-10 bg-white/5 rounded-full blur-sm"></div>
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Expertise</p>
            <p className="subtext">I specialize in cloud tools like AWS, GCP, Docker,etc including variety of bleeding edge development tools like NextJs and more to build scalable cloud native applications.</p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
      {/* Certifications Block */}
      <div className="w-full my-8 p-6 rounded-xl bg-gradient-to-r from-indigo via-primary to-storm shadow-lg flex flex-col items-center">
        <h3 className="text-2xl font-semibold mb-8 text-white">Certifications</h3>
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
          {/* AWS Section */}
          <div className="flex-1 rounded-3xl p-8 shadow-2xl flex flex-col items-center border border-[#FF9900]/40 relative overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, rgba(24,28,47,0.85) 0%, rgba(35,43,77,0.85) 60%, rgba(58,43,95,0.85) 100%)',
                 backdropFilter: 'blur(12px)',
                 WebkitBackdropFilter: 'blur(12px)',
                 boxShadow: '0 4px 32px 0 rgba(35,43,77,0.25), 0 0 0 1.5px #FF990055 inset',
               }}>
            {/* Animated stars overlay */}
            <div className="pointer-events-none absolute inset-0 z-0" style={{background: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08) 0, transparent 60%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.06) 0, transparent 70%)'}} />
            <div className="flex items-center gap-2 mb-6 z-10">
              <span className="text-2xl font-semibold text-[#FF9900] tracking-wide font-sans" style={{textShadow: '0 2px 8px #232B4D88, 0 1px 0 #fff2'}}>Amazon Web Services</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 w-full">
              {certifications.filter(cert => cert.issuer.toLowerCase().includes('amazon')).map((cert, idx) => {
                const [isExploding, setIsExploding] = useState(false);
                return (
                  <div
                    key={cert.name + idx}
                    className="relative"
                    onMouseEnter={() => setIsExploding(true)}
                    onMouseLeave={() => setIsExploding(false)}
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center bg-gradient-to-br from-[#232F3E]/80 to-[#38475A]/80 rounded-xl p-5 min-w-[180px] max-w-[220px] transition-transform hover:scale-105 hover:shadow-2xl border border-[#FF9900]/20"
                    >
                      <img src={cert.logo} alt={cert.name + ' logo'} className="w-16 h-16 object-contain mb-2 rounded" />
                      <span className="font-bold text-lg text-white text-center">{cert.name}</span>
                      <span className="text-sm text-[#FF9900] text-center" dangerouslySetInnerHTML={{ __html: cert.issuer }} />
                      <span className="text-xs text-gray-300 mt-1">{cert.date}</span>
                    </a>
                    {isExploding && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
                        <ConfettiExplosion
                          particleCount={80}
                          duration={2200}
                          width={300}
                          force={0.6}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          {/* Oracle Section */}
          <div className="flex-1 rounded-3xl p-8 shadow-2xl flex flex-col items-center border border-[#F80000]/20 relative overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, rgba(43,34,58,0.85) 0%, rgba(77,35,77,0.85) 60%, rgba(58,43,95,0.85) 100%)',
                 backdropFilter: 'blur(12px)',
                 WebkitBackdropFilter: 'blur(12px)',
                 boxShadow: '0 4px 32px 0 rgba(77,35,77,0.18), 0 0 0 1.5px #B2222255 inset',
               }}>
            {/* Animated stars overlay */}
            <div className="pointer-events-none absolute inset-0 z-0" style={{background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.07) 0, transparent 60%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.05) 0, transparent 70%)'}} />
            <div className="flex items-center gap-2 mb-6 z-10">
              <span className="text-2xl font-semibold text-[#B22222] tracking-wide font-sans" style={{textShadow: '0 2px 8px #4D234D88, 0 1px 0 #fff2'}}>Oracle Cloud Infrastructure</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 w-full">
              {certifications.filter(cert => cert.issuer.toLowerCase().includes('oracle')).map((cert, idx) => {
                const [isExploding, setIsExploding] = useState(false);
                return (
                  <div
                    key={cert.name + idx}
                    className="relative"
                    onMouseEnter={() => setIsExploding(true)}
                    onMouseLeave={() => setIsExploding(false)}
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center bg-gradient-to-br from-[#F8F6F0]/80 to-[#C7B299]/80 rounded-xl p-5 min-w-[180px] max-w-[220px] transition-transform hover:scale-105 hover:shadow-2xl border border-[#B22222]/20"
                    >
                      <img src={cert.logo} alt={cert.name + ' logo'} className="w-16 h-16 object-contain mb-2 rounded" />
                      <span className="font-bold text-lg text-[#1A2233] text-center">{cert.name}</span>
                      <span className="text-sm text-[#B22222] text-center" dangerouslySetInnerHTML={{ __html: cert.issuer }} />
                      <span className="text-xs text-gray-700 mt-1">{cert.date}</span>
                    </a>
                    {isExploding && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
                        <ConfettiExplosion
                          particleCount={80}
                          duration={2200}
                          width={300}
                          force={0.6}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* End Certifications Block */}
    </section>
  )
}

export default About