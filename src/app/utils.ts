
import { UrlWithParsedQuery, parse } from "url";

export class Utils {
    public static toUpperCase(str: string): string{
        return str.toUpperCase();
    }

    public static parseUrl(url: string): UrlWithParsedQuery {
        return parse(url, true);
    }
}