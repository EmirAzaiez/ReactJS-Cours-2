import { createStore } from 'redux'

import Movies from '../Movies'

const initState = {
    user_is_logged: false,
    movies: Movies
}

const reducer = (state = initState, action) => {

    if (action.type === 'ADD_MOVIE') {

        state.movies.push({
            id: action.data.id,
            title: action.data.title,
            category: action.data.category,
            image: action.data.image
        })

        return {
            ...state,
            movies: state.movies
        }

    } else if (action.type === 'CONNECT_USER') {

        return {
            ...state,
            user_is_logged: true
        }

    }

    return state
}

const store = createStore(reducer)

export default store