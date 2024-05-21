import { Server } from '@chainlink/ccip-read-server';
import { CipherTextABI } from './abis/CiphertextServiceAbi';
import { CiphertextService } from './services/CiphertextService';
import * as config from './config';

// Initialize Services
const ciphertextService = new CiphertextService("https://3004-muskbuster-hyperlanecci-70mjnbls96p.ws-us114.gitpod.io");

// Initialize Server and add Service handlers
const server = new Server();

server.add(CipherTextABI, [
  { type: 'getCipher', func: ciphertextService.handler.bind(ciphertextService) },
]);

// Start Server
const app = server.makeApp(config.SERVER_URL_PREFIX);
app.listen(config.SERVER_PORT, () => {
  console.log(`Listening on port ${config.SERVER_PORT}`);
});

// Error handling for uncaught exceptions and rejections
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
});
