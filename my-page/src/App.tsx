import { type } from '@testing-library/user-event/dist/type';
import './intro.json';
//import './App.css';
import info from "./intro.json";



const App = () => (
    <div className="App" style={{padding:"5px"}}>
      <h1 style={{textAlign: "center"}}>About me</h1>
      <h3>name:</h3>
      <p>&emsp;{info.name}</p>
      <br />
      <h3>Short desc:</h3>
      <DescArticle />
      <br />
      <h3>Contacts: {info.contacts}</h3>

      
    </div>
  );

const DescArticle = () => (

  <div>
    <p>&emsp;{info.bio[0]}</p>
    <p>&emsp;{info.bio[1]}</p>
    <p>&emsp;{info.bio[2]}</p>
    <p>&emsp;{info.bio[3]}</p>
  </div>
)

export default App;