import React, { useRef } from 'react'
import Card from '../components/Card'
import { Globe } from '../components/Globe'
import CopyEmailButton from '../components/CopyEmailButton'
import { Frameworks } from '../components/Frameworks'
import RedirectCredlyButton from '../components/RedirectCredlyButton'
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
                        <Card style={{ rotate: "75deg", top: "10%", left: "20%" }} img="assets/logos/ccp.png" containerRef={grid2Container} />
                        <Card style={{ rotate: "75deg", top: "10%", left: "40%" }} img="assets/logos/aif.png" containerRef={grid2Container} />
                        <Card style={{ rotate: "25deg", top: "70%", left: "85%" }} img="assets/logos/azure.svg" containerRef={grid2Container} />
                        <Card style={{ rotate: "-30deg", top: "40%", left: "80%" }} text="Serverless" containerRef={grid2Container} />
                        <Card style={{ rotate: "40deg", top: "65%", left: "35%" }} text="Docker" containerRef={grid2Container} />
                        <Card style={{ rotate: "25deg", top: "20%", left: "55%" }} img="assets/logos/github.svg" containerRef={grid2Container} />
                        <Card style={{ rotate: "25deg", top: "60%", left: "20%" }} img="assets/logos/git.svg" containerRef={grid2Container} />
                        <Card style={{ rotate: "25deg", top: "70%", left: "60%" }} img="assets/logos/react.svg" containerRef={grid2Container} />
                        <Card style={{ rotate: "20deg", top: "10%", left: "70%" }} text="DevOps" containerRef={grid2Container} />
                        <Card style={{ rotate: "-55deg", top: "55%", left: "0%" }} text="ClickUp" containerRef={grid2Container} />
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
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                        <p className="text-center headtext">Want to connect and know more about me?</p>
                        <RedirectCredlyButton />
                        <CopyEmailButton />
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
              <h3 className="text-2xl font-semibold mb-4 text-white">Certifications</h3>
              <div className="flex flex-wrap justify-center gap-8 w-full">
                {certifications.map((cert, idx) => {
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
                        className="flex flex-col items-center bg-black/30 rounded-lg p-4 min-w-[180px] max-w-[220px] transition-transform hover:scale-105 hover:bg-black/50 shadow-md"
                      >
                        <img src={cert.logo} alt={cert.name + ' logo'} className="w-16 h-16 object-contain mb-2 rounded" />
                        <span className="font-bold text-lg text-white text-center">{cert.name}</span>
                        <span className="text-sm text-indigo-200 text-center">{cert.issuer}</span>
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
            {/* End Certifications Block */}
        </section>
    )
}

export default About