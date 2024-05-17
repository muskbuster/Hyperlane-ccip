// This is the ABI for the ProofsService.
// This is used to 1) Select the function 2) encode output
const CipherTextABI = [
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_message",
				"type": "bytes32"
			}
		],
		"name": "getCipher",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "_meta",
				"type": "bytes"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
  
  export { CipherTextABI };
  