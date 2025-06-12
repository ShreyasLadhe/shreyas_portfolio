import React, { useRef } from 'react'
import Card from '../components/Card'
import { Globe } from '../components/Globe'
import CopyEmailButton from '../components/CopyEmailButton'
import { Frameworks } from '../components/Frameworks'
import RedirectCredlyButton from '../components/RedirectCredlyButton'

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
                        <div className="flex gap-4">
                            <img className="mt-3 w-25" src="/assets/logos/ccp.png" alt="ccp logo" />
                            <img className="mt-3 w-25" src="/assets/logos/aif.png" alt="aif logo" />
                        </div>
                    </div>
                    <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                        <Frameworks />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About