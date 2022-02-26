
import { UrlWithParsedQuery, parse } from "url";

/* istanbul ignore next */
export class Utils {
    
    public static toUpperCase(str: string): string {
        return str.toUpperCase();
    }

    public static parseUrl(url: string): UrlWithParsedQuery {
        if (!url) {
            throw new Error('Empty url...');
        }
        return parse(url, true);
    }
}