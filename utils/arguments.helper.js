// Utils
import { ErrorManager } from './error.manager.js';

export function getFilmIdFromArguments() {
  const args = process.argv.slice(2, process.argv.length);

  if (!args.length) {
    ErrorManager.throwSwappiError('You need an argument with a the film number.');
  }

  if (args.length > 1) {
    ErrorManager.throwSwappiError('Only one argument is needed.');
  }

  if (isNaN(args[0])) {
    ErrorManager.throwSwappiError('The argument should be a number.');
  }

  return args[0];
}