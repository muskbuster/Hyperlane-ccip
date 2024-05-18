import axios from 'axios';
import { ethers } from 'ethers';
import { RPCCall } from '@chainlink/ccip-read-server';

type CipherTextResult = {
  ciphertext: string; // The actual ciphertext returned by the server
};

class CiphertextService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getCiphertext(hash: string): Promise<string> {
    const url = `${this.baseUrl}/token?hash=${hash}`;
    const response = await axios.get<CipherTextResult>(url);

    if (response.status !== 200) {
      throw new Error(`Error fetching ciphertext: ${response.statusText}`);
    }

    // Ensure that the returned ciphertext is a string
    return response.data.ciphertext;
  }

  // Adjusted handler method to match expected signature
  async handler(args: ethers.utils.Result, req: RPCCall): Promise<Array<any>> {
    const hash = args[0]; // Assuming the hash is the first argument
    console.log(`Fetching ciphertext for hash: ${hash}`);
    const ciphertext = await this.getCiphertext(hash);
    return [ciphertext];
  }
}

export { CiphertextService, CipherTextResult };
