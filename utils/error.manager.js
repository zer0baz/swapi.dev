import { spinnerManager } from '../global.js';

export class ErrorManager {
  static throwSwappiError(message) {
    spinnerManager.stop();

    console.log('\nAn error occured:', message);
    process.exit();
  }
}