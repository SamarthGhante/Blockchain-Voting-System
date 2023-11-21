import { useState, useEffect } from "react";
import './Header.css';
import Wallet from "../Wallet/Wallet";

const Header = () => {
// *****************
    const [account, setAccount] = useState({
        account: null
    });

    const [connected, setConnected] = useState(false);

    const saveAccount = (account) => {
        setAccount(account);
    }

    const saveConnected = (status) => {
        setConnected(status)
    }
// *******************
    


    return (<>

    <Wallet saveAccount={saveAccount} saveConnected={saveConnected}/>

        <div className="header">
            {connected ? (
                <h3 className="connectStatus">Connected Account = {account[0]}</h3>
            ) : (
                <h3 className="connectStatus">Please connect your account!</h3>
            )}
            <button className="connectStatus" style={{ display: 'none' }}>Click Me</button>
        </div>



    </>);
};

export default Header;