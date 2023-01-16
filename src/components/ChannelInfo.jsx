import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubApiContext';

export default function ChannelInfo({ id, name}) {

    const { youtube } = useYoutubeApi();
    const { isLoading, error, data : url } = useQuery(['channel', id], () => {
        return youtube.channelImageURL(id);
    })


    return (
        <div>
            {url && <img src={url} alt={name}/>}
            <p>{name}</p>
        </div>
    );
}

