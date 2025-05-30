// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SkillProof is ERC721, Ownable {
    mapping(uint256 => bytes32) private _proofHashes;

    constructor() ERC721("SkillProof Credential", "SKILL") {}

    // Mint a new credential
    function mint(address to, uint256 tokenId, bytes32 proofHash) external onlyOwner {
        _safeMint(to, tokenId);
        _proofHashes[tokenId] = proofHash;
    }

    // Get proof hash for a token
    function getProofHash(uint256 tokenId) external view returns (bytes32) {
        require(_exists(tokenId), "Token does not exist");
        return _proofHashes[tokenId];
    }

    // Override transfer functions to make tokens soulbound (non-transferable)
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override {
        require(from == address(0), "Token is soulbound and cannot be transferred");
        super._beforeTokenTransfer(from, to, tokenId);
    }

    // Disable approval functionality
    function setApprovalForAll(address operator, bool approved) public virtual override {
        revert("Token is soulbound and cannot be approved");
    }

    function approve(address to, uint256 tokenId) public virtual override {
        revert("Token is soulbound and cannot be approved");
    }
}