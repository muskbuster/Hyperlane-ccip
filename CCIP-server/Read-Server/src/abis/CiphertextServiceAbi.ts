// This is the ABI for the ProofsService.
// This is used to 1) Select the function 2) encode output
const CipherTextABI = [
    'function getCipher(bytes32 _message) external view returns (bytes memory _meta)',
  ];
  
  export { CipherTextABI };
  