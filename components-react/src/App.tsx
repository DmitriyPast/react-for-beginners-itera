import './intro.json';
import './App.css';
import info from "./intro.json";
import React, { Component, PureComponent } from 'react';
//import { type } from '@testing-library/user-event/dist/type';

const App = () => (
    <div className="App">
      <AppHeader />
      <UserName data={info.name} />
      <UserBio data={info.bio}/>
      <UserContacts data={info.contacts} />
    </div>
  );

class AppHeader extends PureComponent {
  render() {
    return <h1 className="header">About me</h1>
  }
}

type JsonStr = {
  data: string;
}

type JsonArr = {
  data: Array<string>;
}

class UserName extends React.Component<JsonStr> {
  render() {
    return (
    <div>
      <h3>name:</h3>
      <p>&emsp;{this.props.data}</p>
      <br></br>
    </div>
    )
  }
}

const UserBio: React.FC<JsonArr> = (props) => (
  <div>
    <h3>Short desc:</h3>
    {info.bio.map((line, i) => (
      <p>&emsp;{line}</p>
    ))}
    <br></br>
  </div>
)

function UserContacts(props: { data: string}) {
  return (
  <div>
    <h3>Contacts: <del>{info.contacts}</del></h3>
    <UNDERVERSE />
  </div>
  )
}

class UNDERVERSE extends /*glitch*/Component {
  render() {
    return (
      <div className="OVERWRITE" title="XXX XXX XX XX">
        &emsp;XXX XXX XX XX
      </div>
    )
  }
}

export default App;