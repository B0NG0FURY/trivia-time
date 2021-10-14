import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import he from 'he';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { BASE_URL } from '../api/baseUrl';

class NewGame extends Component {
    state = {
        category: "",
        difficulty: "",
        numberOfQuestions: ""
    };

    componentDidMount() {
        this.props.dispatch({ type: "REMOVE_GAME" });
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        if (this.state.difficulty === "" || this.state.numberOfQuestions === "") {
            this.setState({
                ...this.state,
                errors: "You must select both a difficulty and the number of questions to start."
            });
        } else {
            let NEW_GAME_URL;

            if (this.state.category === "") {
                NEW_GAME_URL = `${BASE_URL}amount=${this.state.numberOfQuestions}&difficulty=${this.state.difficulty}&type=multiple`;
            } else {
                NEW_GAME_URL = `${BASE_URL}amount=${this.state.numberOfQuestions}&category=${this.state.category}&difficulty=${this.state.difficulty}&type=multiple`;
            }


            fetch(`${NEW_GAME_URL}`).then(resp => resp.json()).then(resp => {
                const token = localStorage.getItem("jwt");

                function normalize(answer) {
                    return answer.split(",").join(" ").split(" ").filter(word => word !== "").join(" ");
                }

                let configObject = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        "category": {
                            "name": this.state.category === "" ? "Random"
                                    : resp["results"][0]["category"].split(": ").pop()
                        },
                        "game": {
                            "difficulty": resp["results"][0]["difficulty"],
                            "questions_attributes": resp["results"].map(result => {
                                return {
                                    "text": he.decode(result.question),
                                    "correct_answer": normalize(he.decode(result.correct_answer)),
                                    "incorrect_answers": `{${result.incorrect_answers.map(answer => normalize(he.decode(answer)))}}`
                                    // "correct_answer": he.decode(result.correct_answer).split(", ").join(" "),
                                    // // "incorrect_answers": `{${result.incorrect_answers.map(answer => he.decode(answer).split(", ").join(" ")).join()}}`
                                }
                            })
                        }
                    })
                }
                console.log(configObject);
                this.setState({
                    ...this.state,
                    redirect: `/user/${this.props.user.id}/game`,
                    configObject: configObject
                });

                // fetch(`${BACKEND_URL}`, configObject).then(resp => resp.json()).then(game => console.log (game))
            })
        }
    }

    redirect = () => {
        return <Redirect
                    to={{
                        pathname: this.state.redirect,
                        state: { configObject: this.state.configObject }
                    }}
                />
    }

    render() {
        return(
            <div className="new-game">
                <h3>Start A New Game</h3>
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" name="category" onChange={this.handleOnChange}>
                            <option>Select Category</option>
                            <option value="">Random</option>
                            <option value="9">General Knowledge</option>
                            <option value="10">Books</option>
                            <option value="11">Film</option>
                            <option value="12">Music</option>
                            <option value="14">TV</option>
                            <option value="15">Video Games</option>
                            <option value="17">Science/Nature</option>
                            <option value="21">Sports</option>
                            <option value="23">History</option>
                            <option value="25">Art</option>
                            <option value="27">Animals</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Difficulty</Form.Label>
                        <Form.Control as="select" name="difficulty" onChange={this.handleOnChange}>
                            <option>Select Difficulty</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Number Of Questions</Form.Label>
                        <Form.Control as="select" name="numberOfQuestions" onChange={this.handleOnChange}>
                            <option>Select Amount</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Control type="submit" style={{backgroundColor: "blue", color: "white"}} value="Start Game" />
                </Form>

                {this.state.redirect ? this.redirect() : null}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return { game: state.game }
}

export default connect(mapStateToProps)(NewGame);