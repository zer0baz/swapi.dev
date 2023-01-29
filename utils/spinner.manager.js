import ora from 'ora';

export class SpinnerManager {
  start(message) {
    this.currentSpinner = ora(message).start();
  }

  stop() {
    if (this.currentSpinner) {
      this.currentSpinner.stop();
    }
  }
}