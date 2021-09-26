import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import he from 'he';

class NewGame extends Component {
    state = {
        category: "",
        difficulty: "",
        numberOfQuestions: ""
    };

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        const BASE_URL = "https://opentdb.com/api.php?";
        const BACKEND_URL = "http://localhost:3001/games"
        let NEW_GAME_URL;

        if (this.state.category === "") {
            NEW_GAME_URL = `${BASE_URL}amount=${this.state.numberOfQuestions}&difficulty=${this.state.difficulty}&type=multiple`;
        } else {
            NEW_GAME_URL = `${BASE_URL}amount=${this.state.numberOfQuestions}&category=${this.state.category}&difficulty=${this.state.difficulty}&type=multiple`;
        }

        fetch(`${NEW_GAME_URL}`).then(resp => resp.json()).then(resp => {
            let configObject = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
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
                                "correct_answer": he.decode(result.correct_answer),
                                "incorrect_answers": result.incorrect_answers.map(answer => he.decode(answer))
                            }
                        })
                    }
                })
            }
            fetch(`${BACKEND_URL}`, configObject).then(resp => resp.json()).then(game => console.log(game))
        })
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
            </div>
        )
    }
}

export default NewGame;