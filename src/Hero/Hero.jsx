import "./Hero.css"
import SplitText from "../ReactBits/SplitText"
import DotGrid from "../ReactBits/DotGrid"

export default function Hero() {

    return (
        <div className='wrapper hero' id='hero'>

            <div className="herobg">
                <DotGrid
                    dotSize={2}
                    gap={8}
                    baseColor={"#1a1a1a"}
                    activeColor="#4c1aff"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
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
                    <button className="button">
                        Resume
                    </button>
                    <button className="button">
                        About Me
                    </button>
                </div>


            </div>
        </div>
    )
}