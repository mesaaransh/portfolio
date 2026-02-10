import "./Hero.css"
import SplitText from "../ReactBits/SplitText"
import DotGrid from "../ReactBits/DotGrid"
import LightPillar from "../ReactBits/LightPillar"

export default function Hero() {

    return (
        <div className='wrapper hero' id='hero'>

            <div className="herobg">
                <LightPillar
                    topColor="#5227FF"
                    bottomColor="#FF9FFC"
                    intensity={0.7}
                    rotationSpeed={0.3}
                    glowAmount={0.002}
                    pillarWidth={3}
                    pillarHeight={0.4}
                    noiseIntensity={0.5}
                    pillarRotation={110}
                    interactive={false}
                    mixBlendMode="screen"
                    quality="high"
                />
                {/* <DotGrid
                    dotSize={2}
                    gap={2}
                    baseColor={"#1a1a1a"}
                    activeColor="#4c1aff"
                    proximity={0}
                    shockRadius={0}
                    shockStrength={0}
                    resistance={0}
                    returnDuration={0}
                /> */}
            </div>

            <div className="herointro">
                <h1>
                    <SplitText
                        text="Saaransh Gupta"
                        className=""
                        delay={100}
                        duration={2}
                        ease="power3.out"
                        splitType="words"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                </h1>

                <p>
                    <SplitText
                        text="Building scalable solutions, crafting immersive experiences, and innovating with AI-driven full-stack development"
                        className=""
                        delay={100}
                        duration={2}
                        ease="power3.out"
                        splitType="words"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                </p>

                <div className="btnGroup">
                    <a href="./resume.pdf" target="_blank">
                        <button className="button">
                            Resume
                        </button>
                    </a>
                    <a href="#about">
                        <button className="button">
                            About Me
                        </button>
                    </a>
                </div>


            </div>
        </div>
    )
}