import { useState } from "react";

const App = () => {
  // const [state, setState] = useState({ isAdmin: false, userName: "Olga" });
  // const { isAdmin } = state;

  // const assignAdmin = () => {
  //   setState({ ...state, isAdmin: true }); // CORRECT
  // };

  const [state, setState] = useState({ isAdmin: false, user: "DimaLoser69" });
  const { user, isAdmin } = state;
  const assignAdmin = () => {
    setState({ ...state, isAdmin: true })
  }

  // const assignAdmin = () => {
  //   setState({ isAdmin: true }); // WRONG
  // };
  console.log("Test Desu");

  // const assignAdmin = () => {
  //   state.isAdmin = true; // VERY WRONG
  //   setState(state);
  // };
  const Foot = () => {
    const Stomp = isAdmin? "Now go BAN everyone ;-]" : "Ha - ha !";
    return (
    <p>{Stomp}</p>
    );
  };

  return (
    <>//total git idiot
      <h1>Hello {user}, you is {isAdmin ? "SUPER ADMIN" : "a loser"}</h1>
      <button onClick={assignAdmin}>Assign admin</button>
      <Foot />
    </>
  );
};

export default App;
