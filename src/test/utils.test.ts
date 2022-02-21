import { Utils } from "../app/utils";

describe('Utils test suite', () => {
    test('first test', () => {
        const result = Utils.toUpperCase('abc');
        expect(result).toBe('ABC');;
    });

    test('parse simple URL', () => {
        const parsedUrl = Utils.parseUrl('http://localhost:5601/');
        expect(parsedUrl.href).toBe('http://localhost:5601/');
        expect(parsedUrl.port).toBe('5601');
        expect(parsedUrl.protocol).toBe('http:');
        expect(parsedUrl.query).toEqual({});;
    });

    test('parse URL with Query', () => {
        const expectedQuery = { 'user': 'user', 'password': 'test'};
        const parsedUrl = Utils.parseUrl('http://localhost:5601?user=user&password=test');
        expect(parsedUrl.query).toEqual(expectedQuery);;
    })
});