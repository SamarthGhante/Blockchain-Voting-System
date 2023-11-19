// SPDX-License-Identifier: UNLICENCED
pragma solidity >=0.4.22 <0.9.0;

contract contractVoting {
    
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(address => bool) public voters;

    mapping(uint => Candidate) public candidates;
    uint public candidatesCount;

    event votedEvent (
        uint indexed _candidateId
    );

    constructor () public {
        addCandidate("Samarth Ghante");
        addCandidate("Kanishk Kumar");
        addCandidate("Shravya Bhandary");
        addCandidate("Gaurang Chavan");
        addCandidate("Sandeep Nailwal");
        addCandidate("Elon Musk");
        addCandidate("Bill Gates");
    }

    function addCandidate (string memory _name) public {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function vote (uint _candidateId) public {
        require(!voters[msg.sender]);
        require(_candidateId > 0 && _candidateId <= candidatesCount);
        voters[msg.sender] = true;
        candidates[_candidateId].voteCount ++;
        emit votedEvent(_candidateId);
    }

    function getCandidateById(uint _candidateId) public view returns (uint, string memory, uint) {
        require(_candidateId > 0 && _candidateId <= candidatesCount);
        return (
            candidates[_candidateId].id,
            candidates[_candidateId].name,
            candidates[_candidateId].voteCount
        );
    }
}
