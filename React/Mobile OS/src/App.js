// import logo from './logo.svg';
import './App.css';
import { List } from './components/Button'

function App() {
  return <div><h2>Mobile Operating System</h2> <ul>
    <List name="Android"></List>
    <List name="Blackberry"></List>
    <List name="iPhone"></List>
    <List name="Windows Phone"></List>
  </ul> 
  <h2>Mobile Manufactures</h2> <ul>
    <List name="Samsung"></List>
    <List name="HTC"></List>
    <List name="Micromax"></List>
    <List name="Apple"></List>
  </ul> 
  </div>
  

   
}

export default App;
