import React from 'react';
import { useState } from "react";
import Header from '../header/Header';
import Leaderboard from '../leaderboard/Leaderboard';
import Wallet from '../Wallet/Wallet';
import UpdateCandi from '../updateCandidate/UpdateCandi';
import "./Admin.css"


const Admin = () => {

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
            <div className="admin-note">
                <p className='admin-welcome'>Welcome Admin!</p>
            </div>
            <Wallet saveState={saveState}></Wallet>
            <Header></Header>
            <UpdateCandi state={state}></UpdateCandi>

            <Leaderboard state={state}></Leaderboard>

        </>
    );




};

export default Admin;