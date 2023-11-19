import { useState } from "react";
import Wallet from "./components/Wallet/Wallet.js";
import Leaderboard from "./components/leaderboard/Leaderboard.js";
import Footer from "./components/footer/Footer.js";

function App(){
  const [state, setState]=useState({
    web: null,
    contract: null,
    accounts: null
  })
  const saveState=(state)=>{
    console.log(state);
    setState(state);
  }


  return(
    <>
    <div className="main">
      <Wallet saveState={saveState}></Wallet>
      <Leaderboard state={state} />
      <Footer></Footer>
      </div>
    </>
  );
}



export default App;