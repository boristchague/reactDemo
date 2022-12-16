import React, {useState} from "react";


const AddSongComponent = () => {

    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [album, setAlbum] = useState('');
    const [lyric, setLyric] = useState('');


    const handleSongAdding  = (e) => {

        e.preventDefault();

        const song = { title, duration, album, lyric}


    }

}