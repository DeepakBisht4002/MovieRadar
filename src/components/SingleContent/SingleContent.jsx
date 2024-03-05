import React from 'react'
import { img_300, unavailable } from "../../config/config"
import './SingleContent.css'
import Badge from '@mui/material/Badge';
import ContentModal from '../ContentModal/ContentModal';


function SingleContent({ id, poster, title, date, media_type, vote_average }) {
    return (
        <ContentModal media_type={media_type} id={id}>
            <Badge badgeContent={Number(vote_average.toFixed(1))} color={vote_average > 7 ? 'primary' : 'secondary'}>
            </Badge>
            <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
            <b className="title">{title}</b>
            <span className='subtitle'>{media_type === 'tv' ? "Tv Series" : "Movie"}
                <span className='subtitle'>{date}</span>
            </span>
        </ContentModal>
    )
}

export default SingleContent
