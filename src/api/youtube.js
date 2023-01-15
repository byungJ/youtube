import axios from 'axios';

export async function search(keyword) {
    return axios.get(`/data/${keyword ? 'search' : 'popular'}.json`).then((res) => res.data.items);
}