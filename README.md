# Trivia Time

Trivia Time is a fun and informative app that grabs questions from [Open Trivia Database](https://opentdb.com/api_config.php) and creates a custom trivia game using a React frontend and persists user data with a Rails API backend.

## Installation

Fork and clone this repo.

Run 'bundle install' in the 'trivia-time-backend' directory, start up your PostgreSQL server, and run 'rake db:setup' to create database.

Move to the 'trivia-time-frontend' directory and run 'npm install'.

The rails server is set to port 3001 and the react server is the default port 3000 to avoid conflicts. Run both servers to start up the application.

## Usage

On startup the user must create an account or sign in. Once logged in the user can start a new game or view their overall stats. From the new game screen the user can select the category of questions, their difficulty, and the amount of questions they would like in their game. The user must select both a difficulty and number of questions to start the game. Once the game has started the user can answer the trivia questions by selecting their answer from the list of multiple choice options. Once all the questions are answered the user then can click on 'Finish Game' to view the game summary.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)