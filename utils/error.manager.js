export class ErrorManager {
  static throwSwappiError(message) {
    console.log('An error occured:', message);
    process.exit();
  }
}