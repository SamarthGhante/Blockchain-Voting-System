//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.22 <0.9.0;

contract votingContract {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(address => bool) public voters;
    Candidate[] candidates;
    uint public candidatesCount;

//Event
    event votedEvent (
        uint indexed _candidateId
    );

    constructor () {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }

    function addCandidate (string memory _name) public {
        candidatesCount ++;
        candidates.push(Candidate(candidatesCount, _name, 0));
    }

    function vote (uint _candidateId) public {
        require(!voters[msg.sender]);

        require(_candidateId > 0 && _candidateId <= candidatesCount);

        voters[msg.sender] = true;

        candidates[_candidateId].voteCount ++;

        emit votedEvent(_candidateId);
    }

    function getCandidates() public view returns(Candidate[] memory) {
        return candidates;
    }
}
