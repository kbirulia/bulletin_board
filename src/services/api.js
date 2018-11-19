class Api {
    baseUrl = '//localhost:3003/';

    async fetch(url, options) {
        if (options && (options.method === 'POST' || options.method === 'PUT')) {
            // eslint-disable-next-line no-param-reassign
            options.headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            };
        }
        const response = await fetch(`${this.baseUrl}${url}`, options);

        return response.json();
    }
}

export default Api;
