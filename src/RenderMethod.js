import React, { Component } from 'react'

export default class RenderMethod extends Component {
    render() {
        console.log("Render Method!", this.props)
        return (
            <>
                <h1>Render Method !</h1>
                {this.props.name}

            </>
        )
    }
}
