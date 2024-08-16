import "./EdExp.css"
import TimeLine from "./TimeLine/TimeLine"
import education from "../../education"
import experience from "../../experience"

export default function EdExp() {
  return (
    <div className="edexp">
        {/* <div className="portfoliohead">
            <p>Personal Description</p>
            <h1>My Portfolio</h1>
        </div> */}
        
        <div className="timelines">
            <TimeLine head="Experience" data={experience}/>
            <TimeLine head="Education" data={education}/>
        </div>

    </div>
  )
}
