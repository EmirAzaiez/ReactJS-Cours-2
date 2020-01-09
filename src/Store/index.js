import { createStore } from 'redux'

import Movies from '../Movies'

const initState = {
    user_role: 1,
    movies: Movies
}

const reducer = (state = initState, action) => {

    if (action.type === 'CHANGE_CURRENTPAGE') {

        return {
           ...state,
            currentPage: action.data.currentPage
        }

    } else if (action.type === 'ADD_MOVIE') {

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

    }

    return state
}

const store = createStore(reducer)

export default store