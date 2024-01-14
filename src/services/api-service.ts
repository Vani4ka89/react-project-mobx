import axios, {AxiosResponse} from "axios";

import {baseURL} from "../constants/urls";

export type IRes<T> = Promise<AxiosResponse<T>>;

export const apiService = axios.create({baseURL});