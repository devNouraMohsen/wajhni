import axios from "axios";

export interface FetchResponse<T>{
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '7e8d0831140844688866bf3a4e115da7'
    }
});