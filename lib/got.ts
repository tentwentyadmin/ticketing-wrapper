/**
 * Wrapper function over got
 */

import got, { Got, OptionsOfTextResponseBody, Response, HTTPError } from 'got';

export class Rest {
    private instance: Got;

    constructor(endPoint: string, channelID: string,token: string, username: string, password: string,  apiKey: string) {

        this.instance = got.extend({
            prefixUrl: `${endPoint}/${channelID}`,
            responseType: 'json',
            headers: {
                // Authorization: secret,
                // Accept: 'application/json',
                Accept: 'application/json',
                APIKey: apiKey,
                Authorization: token
            },
        });
    }

    async get(url: string, options?: OptionsOfTextResponseBody): Promise<object | Error> {
        try {
            const response = (await this.instance.get(url, options)) as Response<Object>;
            return response.body;
        } catch (error) {
            throw new Error(error);
        }
    }

    async post(url: string, options?: OptionsOfTextResponseBody): Promise<Response> {
        try {
            const response = await this.instance.post(url, options);
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async put(url: string, options?: OptionsOfTextResponseBody): Promise<Response> {
        try {
            const response = (await this.instance.put(url, options)) as Response<Object>;
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete(url: string, options?: OptionsOfTextResponseBody): Promise<Response> {
        try {
            const response = await this.instance.delete(url, options);
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }
}
