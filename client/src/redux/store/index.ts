export function store (): Promise<typeof import("./dev")> | Promise<typeof import("./prod")> {
    if (process.env.NODE_ENV === "development") {
        return import("./dev");
    }

    return import("./prod");
}
