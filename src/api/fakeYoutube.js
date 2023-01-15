import axios from 'axios';

export default class FakeYoutube {
    constructor() {

    }

    async search(keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    }

    async #searchByKeyword() {
        return axios.get(`/data/search.json`).then((res) => res.data.items)
        .then((items) => items.map
        ((item) => ({...item, id: item.id.videoId})))
    }

    #mostPopular() {
        return axios.get(`/data/popular.json`).then((res) => res.data.items);
    }
}