import { AppAction } from "@eneto/api-client";

export function listsAction<T, P> (type: T, payload: P): AppAction<T, P> {
    return {
        type,
        payload,
    };
}

export type ListsAction = typeof listsAction;
