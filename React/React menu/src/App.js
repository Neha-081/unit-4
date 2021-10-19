
import './App.css';
import { Singlebtn } from './components/Single'

//by 8 components
import { Contact } from './components/Contact'
import { Download } from './components/Download'
import { Help } from './components/Help'
import { Home } from './components/Home'
import { Join } from './components/Join'
import { Login } from './components/Login'
import { Search } from './components/Search'
import { Setting } from './components/Setting'

function App() {
  return <>
  <div className="div1">
    <Join name="JOIN US"></Join>
    <Login name="LOGIN"></Login>
    <Search name="SEARCH"></Search>
    <Home name="HOME"></Home>
    </div> 
    <div className="div2">
    <Setting name="SETTINGS"></Setting>
    <Contact name="CONTACT US"></Contact>
    <Help name="HELP"></Help>
    <Download name="DOWNLOAD"></Download>
    </div>
    </>

   
}


//by single component
function App(){
  return <>
  <div className="div1">
  <Singlebtn name="JOIN" classstyle="join"></Singlebtn>
  <Singlebtn name="LOGIN" classstyle="login"></Singlebtn>
  <Singlebtn name="SEARCH" classstyle="search"></Singlebtn>
  <Singlebtn name="HOME" classstyle="home"></Singlebtn>
  </div>
  <div className="div2">
  <Singlebtn name="SETTING" classstyle="setting"></Singlebtn>
  <Singlebtn name="CONTACT US" classstyle="contact"></Singlebtn>
  <Singlebtn name="HELP" classstyle="help"></Singlebtn>
  <Singlebtn name="DOWNLOAD" classstyle="download"></Singlebtn>
  </div>
  </>
}




export default App;
