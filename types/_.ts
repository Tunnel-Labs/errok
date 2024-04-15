export type IsNull<T> = [T] extends [null] ? true : false;

export type IsUnknown<T> = unknown extends T // `T` can be `unknown` or `any`
 ? IsNull<T> extends false // `any` can be `null`, but `unknown` can't be
	 ? true :
	false :
	false;
