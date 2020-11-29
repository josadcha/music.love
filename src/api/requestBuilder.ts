import axios, {
    AxiosError,
    AxiosPromise,
    AxiosRequestConfig,
    AxiosResponse,
} from 'axios';

export type HTTPMethod =
    'get'
    | 'post'
    | 'delete'
    | 'put'
    | 'patch';

export interface JsonBody {
    // tslint:disable-next-line no-any
    [key: string]: any;
}

export interface Request {
    method: HTTPMethod;
    url: string;
    body?: JsonBody;
}

const buildRequest = (request: Request) => {
    const { body, method, url } = request;

    const contentType = body instanceof FormData
        ? 'multipart/form-data'
        : 'application/json';

    const defaultHeaders = {
        'content-type': contentType,
    };

    const requestConfig: AxiosRequestConfig = {
        baseURL: 'backend',
        data: body,
        headers: defaultHeaders,
        method,
        url,
    };

    return requestConfig;
};

export const defaultResponse: Partial<AxiosError['response']> = {
    status: 500,
    data: {
        error: 'Server error',
    },
};

export const formatError = (responseError: AxiosError) => {
    const response = responseError.response || defaultResponse;
    const errors = (response.data && (response.data.errors || [response.data.error])) || [];

    return {
        code: response.status,
        message: errors,
    };
};

export const makeRequest = async (request: Request) => {
    const requestConfig = buildRequest(request);

    return new Promise((resolve, reject) => {
        const axiosRequest: AxiosPromise = axios(requestConfig);
        axiosRequest
            .then((response: AxiosResponse) => {
                resolve(response.data);
            })
            .catch((error: AxiosError) => {
                reject(formatError(error));
            });
    });
};
