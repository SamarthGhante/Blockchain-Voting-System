import { useState } from "react";
import "./UpdateCandi.css"

const UpdateCandi = ({ state }) => {



    const [input, setInput] = useState('');
    const [candidates, setCandidates] = useState([]);

    const saveCandidates = (arr) => {
        setCandidates(arr);
    }

    // const storeInput = () => {
    //     const inputField = document.getElementById('textInput');
    //     const storedInput = inputField.value;
    //     setInput(storedInput)
    //     input && AddCandi();
    // }


    const { contract } = state;
    const { accounts } = state;

    if (!contract) {
        return;
    }

    const AddCandi = async () => {
        const currentAcc = await accounts[0];
        console.log(currentAcc);
        const admin = "0x6F37A129C3fa9a244177F970427b4Ef4a767252c";

        if (currentAcc !== admin) {
            alert("Only Admin Can Add Candidates!");
        } else {

            const inputField = document.getElementById('textInput');
            const storedInput = await inputField.value;
            if (!storedInput) {
                return;
            }
            console.log(storedInput)
            const currentAccount = accounts[0];
            alert("Great, Press Ok To continue!");

            const transaction = await contract.methods.addCandidate(storedInput).send({ from: currentAccount });
            console.log('Transaction is done:', transaction);
            alert("The Candidate Is Added!");
        }


    }

    return (
        <>
            <div className="input-button-container">
                <div className="text_btn">
                    <h3 className="h3">Add Candidate!</h3>
                    <input type="text" id="textInput" className="custom-input" />
                    <button onClick={AddCandi} className="custom-button">Click to Store</button>
                </div>
            </div>

        </>
    );
}

export default UpdateCandi;
