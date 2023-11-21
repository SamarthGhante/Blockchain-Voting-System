import { useState, useEffect } from "react";
import './Leaderboard.css'; 
import CandidatesData from "../candidates/Candidatesdata.js";

const Leaderboard = () => {

    const [candidates, setCandidates] = useState([]);

    const saveCandidates= (arr) => {
        setCandidates(arr);
    }

    return (
        <>
        <CandidatesData saveCandidates={saveCandidates}/>
        
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
            {/* <Vote candidates = {candidates} state={state}/> */}
        </>
    );
};

export default Leaderboard;