import youtubeAPI from '../services/youtubeAPI'

export function reducerSuggestions(state = {}, action) {
    if (action.type === 'UPDATE') {
            return   youtubeAPI.nextPage(action.payload);
        
    }
}