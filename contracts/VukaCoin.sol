pragma solidity ^0.5.16;

import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Capped.sol";
import "@openzeppelin/contracts/ownership/Ownable.sol";

contract VukaCoin is ERC20Detailed, ERC20Capped, Ownable {
constructor()
ERC20Detailed("Vuka Coin", "VC", 4)
ERC20Capped(10000000000)
payable public {}
}