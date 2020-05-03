export default function i18n(language: string): any {
    if (language.includes("es")) {
        return require("./es.json");
    }

    return require("./en.json");
}
