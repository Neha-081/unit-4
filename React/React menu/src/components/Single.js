import '../App.css';
function Singlebtn({name,classstyle}){
    return <div>
       <button  className={classstyle}>{name}</button>
    </div>
}
export{Singlebtn};