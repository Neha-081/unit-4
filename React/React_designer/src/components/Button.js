import '../App.css'
function Button({url,head,para,cal1,cal2,cal3,dollar,strike,btn,url1,url2}){
    return <div className="maindiv">
        <img src={url}/>
        <h2 className="head">{head}
        <img src={url1} className="url1"/>
        <img src={url2} className="url2"/>
        </h2>
        <p className="para">{para}</p>
        <div className="flexdiv">
            <p>{cal1}</p>
            <p>{cal2}</p>
            <p>{cal3}</p>
        </div>
    
            <div className="dollar">
            <h1>{dollar}</h1>
            <h2 className="strike"><strike>{strike}</strike></h2>
            <button className="btn">{btn}</button>
            </div>
      
    </div>
}
export{Button};