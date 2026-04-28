'use client';

import { useState } from 'react';

export default function LikeButton() {
    const [like, setLike] = useState(0);
    function handleClick() {
        setLike(like + 1);
    }
    return (
        <button onClick={handleClick}>
            {like} Likes
        </button>
    );
}