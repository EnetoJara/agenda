export function isEmpty<V> (value: V): boolean {
    if (value === undefined) return true;
    if (value === null) return true;
    if (Array.isArray(value) && value.length === 0) return true;
    if (typeof value === "string" && value.trim().length === 0) return true;
    if (typeof value === "object" && Object.keys(value).length === 0) return true;

    return false;
}
