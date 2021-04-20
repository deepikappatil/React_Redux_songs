import { combineReducers } from 'redux'

//Return a static list of songs
const songsReducer = () => {
    return [
        {
            title: 'No Scrubs',
            duration: '4:05'
        },
        {
            title: 'Marcarena',
            duration: '2:30'
        },
        {
            title: 'All Star',
            duration: '3:15'
        },
        {
            title: 'I Want it That Way',
            duration: '1:45'
        }
    ]
}

//Allow user to select a very specific song once they click on the select button
const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})