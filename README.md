# 365 Challenges JS

This repository was created to host the challenge of a "Full Year of Javascript".
The main idea is to solve one challenge per day, the challenges has to be small,
and they must solve one single problem, usually they will be a single function.

# List of Challenges



## How to post one challenge

We will keep the repository organized so every blank challenge will be in the branch **master**.

The challenges will be available at the repository in a folder with their numbers.
For example, the first test will be in the folder with name `challenge-001`.
So if you want to post one blank challenge you just have to create one folder with the structure below:

### 1 - Create in your local repository a Branch `blank`

After Starred this repository ;), fork and create a branch `blank`.

### 2 - Write a REDME file for your challenge

You have to write a `README.md` file, containing the header of the challenge. The header must have clean instructions of the solution of the challenge.

### 3 - A name of the file

The file with the name of the challenge fox example `factorial.js`

### 4 - The test file for the challenge

The test for the respective challenge wrote with the same name `factorial.test.js` (this will help us when we will write the test of the challenges).

Even in a blank challenge we must have the tests written, because the tests will guide in the challenge solution, because the challenge will be solved when the all the test's pass, so is really important to have test all cases.

## Tests

We Will use Jest with chai to test our challenges with TDD/ BDD. But the sintax is practically the same if you use `mocha` or other one.

Se the documentation here:
* [Jest](https://facebook.github.io/jest/)
* [Chai](http://chaijs.com/)

The test environment is already installed on the project to see ir running just execute the command:

```{r, engine='bash'}
npm run test:watch
```

In the test mode you can type the `p` key and write a regex with the file that you want to test, for example to test `factorial.js` file just type `factorial`, and the jest will run the test of that single file.
