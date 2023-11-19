import Web3 from "web3";
import { useState, useEffect } from "react";
import ContractJSON from "./Contract.json"
import './Wallet.css';


const Wallet = ({ saveState }) => {
    const [account, setAccount] = useState({
        account: null
    });
    const [connected, setConnected] = useState(false);
    useEffect(() => {

        const connectWallet = async () => {
            try {
                const { ethereum } = window;
                window.ethereum.on("chainChanged", () => {
                    window.location.reload();
                });

                window.ethereum.on("accountsChanged", () => {
                    window.location.reload();
                });

                if (ethereum) {
                    const ABI = ContractJSON.abi;
                    const web3 = new Web3(window.ethereum);
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const contract = new web3.eth.Contract(
                        ABI,
                        "0x52Ee3604bd80dcF50eD81C7E9467c28E15b2b3c9"
                    );
                    const accounts = await web3.eth.getAccounts();
                    setAccount(accounts);
                    setConnected(true);
                    saveState({ web3: web3, contract: contract, accounts: accounts });

                } else {
                    alert("Please Install Metamask");
                }

            } catch (error) {
                console.log(error);
            }
        };

        connectWallet();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    //{connected ? "Connected to:" : "Please connect your MetaMask Wallet!"} 
    // Empty dependency array ensures it runs only once
    return (
        <>
            <div className="header">
                {connected ? (
                    <h3 className="connectStatus">Connected Account = {account[0]}</h3>
                ) : (
                    <h3 className="connectStatus">Please connect your account!</h3>
                )}
                <button className="connectStatus" style={{ display: 'none' }}>Click Me</button>
            </div>

        </>
    )



    // ...rest of your component code
};

export default Wallet;
