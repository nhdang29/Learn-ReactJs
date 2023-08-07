import React from 'react';
import {youtubeData} from './data'
import YoutubeItem from './YoutubeItem';

const YoutubeList = (props) => {
    return (
        <div className='youtube-list'>
            {youtubeData.map((item)=>{
                return (
                    <YoutubeItem 
                        key = {item.key}
                        image = {item.image}
                        title = {item.title}
                        author = {item.author}
                        avatar = {item.avatar}
                    />
                );
            })}
        </div>
    );
};

export default YoutubeList;