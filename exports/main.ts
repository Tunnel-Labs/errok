export {
	errAsync,
	fromPromise,
	fromSafePromise,
	okAsync,
	ResultAsync,
} from '../utils/result-async.ts';
export { $try, Err, err, fromThrowable, Ok, ok, Result } from '../utils/result.ts';

import type { Err, Ok } from '../utils/result.ts';
export type TryOk<T> = (value: T) => Ok<T, never>;
export type TryErr<E> = (error: E) => Err<never, E>;
