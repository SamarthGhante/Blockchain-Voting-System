import { useState } from "react";
import Header from "./components/header/Header.js";
import Wallet from "./components/Wallet/Wallet.js";
import Leaderboard from "./components/leaderboard/Leaderboard.js";
import Footer from "./components/footer/Footer.js";
import Vote from "./components/Vote/Vote.js";
import App from "./App.js";


const Home = () => {

    const [state, setState] = useState({
        web: null,
        contract: null,
        accounts: null
    })
    const saveState = (state) => {
        setState(state);
    }

    return (

        <>

            <div className="main">
                <Wallet saveState={saveState}></Wallet>
                <Header></Header>
                <Leaderboard state={state} />
                <Vote state={state}/>

                <Footer></Footer>
            </div>

        </>
    );




};

export default Home;