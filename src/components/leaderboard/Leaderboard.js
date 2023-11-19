import Web3 from "web3";
import { useState, useEffect } from "react";
import './Leaderboard.css'; // Import your CSS file
import Vote from "../Vote/Vote.js";

const Leaderboard = ({ state }) => {
    const [candidates, setCandidates] = useState([]);
    const [selectedCandidate, setSelectedCandidate] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const { contract } = state;

            if (!contract) {
                return;
            }

            const totalCandidates = await contract.methods.candidatesCount().call();
            console.log(totalCandidates);
            //tableElement.style.display = 'block';

            const candidatesData = [];
            for (let i = 1; i <= totalCandidates; i++) {
                const candidate = await contract.methods.candidates(i).call();
                candidate && candidatesData.push({
                    id: candidate[0],
                    name: candidate[1],
                    voteCount: candidate[2],
                });
            }
            //console.log(candidatesData);
            setCandidates(candidatesData);
        }
        fetchData();
    }, [state]);


    return (
        <>
            <div className="body">
                <div className="table">
                    <div className="table_header">
                        <h1>Leaderboard</h1>
                    </div>
                    <div className="table_body">
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Candidate Name</th>
                                    <th>Votes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {candidates.map((candidate) => (
                                    <tr key={candidate.id}>
                                        <td>{candidate.id}</td>
                                        <td>{candidate.name}</td>
                                        <td><strong>{candidate.voteCount}</strong></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Vote candidates = {candidates} state={state}/>
        </>
    );
};

export default Leaderboard;