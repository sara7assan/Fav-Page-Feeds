import Description from "../feed/Description"
import Posts from "../feed/Posts"
import data from "../../data/data"

function Feeds() {
  return (
    <div className="feeds">
        <Description />
        <Posts data={data}/>
    </div>
  )
}

export default Feeds