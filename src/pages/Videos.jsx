import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import Youtube, { search } from '../api/youtube';
import FakeYoutube from '../api/fakeYoutube';
import { useYoutubeApi } from '../context/YoutubApiContext';

export default function Videos() {

    const {keyword} = useParams();
    const { youtube } = useYoutubeApi();

    // fetch는 서버에서 일단 값을 받아오면 무조건 then 성공이라고 파악합닏.
    // 200번 말고 400번이여도 일단 400이라는 값이 들어 왔으니 then
    // 으로 넘어 가므로 400번대는 에러라고 throw을 통해서 수동적으로 처리를 해줘야 합니다.

    // axios 사용하기 https://github.com/axios/axios
    // response로 성공 데이터가 바로 전달이 되므로 fetch처럼 json으로
    // 변경 할 필요가 없습니다.
    // 200번만 then으로 들어 옵니다.

    // fetch code
    // const { isLoading, error, data : videos } = useQuery(['videos', keyword], async () => {
    //     return fetch(`/data/${keyword ? 'search' : 'popular'}.json`).then(res => res.json()).then(data => data.items)
    // });

    // axios code
    // const { isLoading, error, data : videos } = useQuery(['videos', keyword], () => {
    //     const youtube = new Youtube();
    //     return youtube.search(keyword);
    // })

    const { isLoading, error, data : videos } = useQuery(['videos', keyword], () => {
        return youtube.search(keyword);
    })

    return (
        <>
            <div>
                Videos {keyword ? `🔍${keyword}` : `🔥`}
            </div>
            {isLoading && <p>Loading....</p>}
            {error && <p>{'An error has occurred: ' + error.message}</p>}
            { videos && <ul>
                { videos.map(video => <VideoCard key={video.id} video={video}/>)}
                </ul>}
        </>
    );
}

