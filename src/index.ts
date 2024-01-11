export {
	errAsync,
	fromPromise,
	fromSafePromise,
	okAsync,
	ResultAsync,
} from './result-async.js';
export { $try, Err, err, fromThrowable, Ok, ok, Result } from './result.js';

import type { Err, Ok } from './result.js';
export type TryOk<T> = (value: T) => Ok<T, never>;
export type TryErr<E> = (error: E) => Err<never, E>;
