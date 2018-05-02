import React, { Component } from "react"

export default class ComponentBox extends Component {
    state = {
        name: '',
        body: '',
    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleBodyChange = event => {
        this.setState({
            body: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.insertComment(this.state)
    }

    render() {
        return (
            <div className="new_comment">
                <form onSubmit={this.handleSubmit}>
                    <h3>Adicionar novo comentário</h3>
                    <div>
                        <label htmlFor="name">Seu nome</label>
                        <input
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            type="text"
                            className="user_input"
                            id="name"
                        />
                    </div>
                    <div>
                        <label htmlFor="body">Seu Comentário</label>
                        <textarea
                            value={this.state.body}
                            onChange={this.handleBodyChange}
                            id="body"
                            className="comment_box"
                        />
                    </div>
                    <button>Comentar</button>
                </form>
            </div>
        )
    }
}