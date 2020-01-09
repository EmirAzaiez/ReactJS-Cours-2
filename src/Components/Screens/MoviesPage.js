import React from 'react'

import { connect } from 'react-redux'

import * as Movie from './Partials/Movie'

class MoviesPage extends React.Component {

    render() {
        return (
            <div>
                <h1>My listing</h1>
                {
                    this.props.movies.map((movie) => {
                        return <Movie.WithPicture movie={movie}></Movie.WithPicture>
                    })
                }
            </div>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(MoviesPage)