import {Card} from './Card';
import '../App.css'

export const Dom=({heading,color,date,subheading,devices,url})=>{
    return (<div style={{background:color}} className="maindiv">
      <div className="flex">
      <h3>{date}</h3>
       <img src={url} />
      </div>
     
       <p className="case">Case Study</p>
 <h1>{heading}</h1>
 <h1>{subheading}</h1>
 <h3>{devices}</h3>

    </div>)
}
