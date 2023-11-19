import { useState } from "react";
import Wallet from "./components/Wallet/Wallet.js";
import Leaderboard from "./components/leaderboard/Leaderboard.js"
import Vote from "./components/Vote/Vote.js"

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

  // const [account,setAccount]=useState({
  //   currentAccount: null
  // })

  // const saveAccount=(account)=>{
  //   setAccount(account);
  // }

  return(
    <>
    <div className="main">
      <Wallet saveState={saveState}></Wallet>
      <Leaderboard state={state} />
      </div>
    </>
  );
}



export default App;