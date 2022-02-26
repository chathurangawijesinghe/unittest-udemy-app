import { Utils } from "../app/utils";

describe('Utils test suite', () => {
    beforeAll(() => {
        console.log('before all');
    });

    beforeEach(() => {
        console.log('before each');
    });

    afterAll(() => {
        console.log('after all');
    });

    afterEach(() => {
        console.log('after each');
    });

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
        const expectedQuery = { 'user': 'user', 'password': 'test' };
        const parsedUrl = Utils.parseUrl('http://localhost:5601?user=user&password=test');
        expect(parsedUrl.query).toEqual(expectedQuery);;
    });

    test('test invalid url', () => {
        function throwError() {
            Utils.parseUrl('');
        }

        expect(throwError).toThrow('Empty url...');
    });

    test('test invalid url with arrow function', () => {
        expect(() => { Utils.parseUrl('') }).toThrow('Empty url...');
    });

    test.only('test invalid url with try catch', () => {
        try{
            Utils.parseUrl('');
        }catch(error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', 'Empty url...');
        }
    });
});