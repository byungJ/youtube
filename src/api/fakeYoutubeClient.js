import axios from 'axios';

export default class FakeYoutubeClient {

    async search({params}) {
        return params.relatedToVideoId ? axios.get('/data/related.json') : axios.get('/data/search.json');
    }

    async videos() {
        console.log('테스트를 해보겠습니다.~')
        return axios.get('/data/popular.json');
    }

    async channels() {
        return axios.get('/data/channel.json');
    }
}