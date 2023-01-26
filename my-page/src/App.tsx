import './intro.json';
import './App.css';
import info from "./intro.json";

const App = () => (
    <div className="App">
      <h1 className="header">About me</h1>
      <h3>name:</h3>
      <p>&emsp;{info.name}</p>
      <br />
      <h3>Short desc:</h3>
      <DescArticle />
      <br />
      <h3>Contacts: <del>{info.contacts}</del></h3>
      <p className="OVERWRITE">&emsp;<b>XXX XXX XX XX</b></p>
    </div>
  );

const DescArticle = () => (
  <div>
    {info.bio.map((line, i) => (
      <p>&emsp;{line}</p>
    ))}
  </div>
)

export default App;