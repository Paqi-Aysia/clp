pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract clp is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    mapping(string => uint8) hashes;

    constructor() public ERC721("Chainlink Paqi", "CLP") {}

    function awardItem(address player, string memory hash, string memory metadata)
        public
        returns (uint256)
    {

        require(hashes[hash] != 1);
        
        hashes[hash] = 1;
        
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        
        _mint(player, newItemId);
       
        _setTokenURI(newItemId, metadata);

        return newItemId;
    }
}