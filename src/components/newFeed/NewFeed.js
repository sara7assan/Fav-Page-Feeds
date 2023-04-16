import Feeds from "./Feeds";
import SectionLeft from "./SectionLeft";
import SectionRight from "./SectionRight";

export default function NewFeed(){
    return (
        <div className="container">
            <div className="content">
               <SectionRight />
                <Feeds />
                <SectionLeft /> 
            </div>
            
        </div>
    )
}