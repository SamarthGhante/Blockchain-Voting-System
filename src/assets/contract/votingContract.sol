// SPDX-License-Identifier: UNLICENCED
pragma solidity >=0.4.22 <0.9.0;

contract nvotingContract {
    
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(address => bool) public voters;

    mapping(uint => Candidate) public candidates;
    Candidate[] public candidateArray; 
    uint public candidatesCount;

    event votedEvent (
        uint indexed _candidateId
    );

    address public owner;
    constructor () {
        owner = msg.sender;
        addCandidate("Samarth Ghante");
        addCandidate("Kanishk Kumar");
    }

    function addCandidate(string memory _name) public {
        require(msg.sender == owner);
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
        candidateArray.push(Candidate(candidatesCount, _name, 0)); 
    }

    function vote (uint _candidateId) public {
        require(!voters[msg.sender]);
        require(_candidateId > 0 && _candidateId <= candidatesCount);
        voters[msg.sender] = true;
        candidates[_candidateId].voteCount ++;
        emit votedEvent(_candidateId);
    }

    function getCandidates() public view returns (Candidate[] memory) {
        return candidateArray;
    }
}
