import "./Banner.css"
import ScrollVelocity from "../ReactBits/ScrollVelocity"

export default function Banner() {
  return (
    <>
      <div>
        <ScrollVelocity
          texts={['Web Developer', 'Designer Guitarist', 'Data Scientist']}
          velocity={60}
          className=""
        />
      </div>
    </>
  )
}
