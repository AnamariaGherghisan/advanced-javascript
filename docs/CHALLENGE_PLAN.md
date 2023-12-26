# Lesson Plan for Challenges

## Things to consider

- Read through the entire problem statement in the given README.md file with the entire group.

- Clearly define a plan of action which includes the name of the function you are going to test and what parameters the function is going to accept.

- Create an `index.js` file and an `index.test.js` file.

- Complete the pseudo test cases in the `index.test.js` file i.e. unit tests with only titles and an empty test function.

- An initial test should look like this

  ```javascript
  it("sample test title", () => {
    // your test function is defined here
  });
  ```

- Adopt this method of writing pseudo tests until you have some acceptance criteria completed or all acceptance criteria. You can use the red green testing approach to ensure that you are encouraging Test Driven Development (TDD).

- Go over all your test cases and try to spot further edge cases and add test cases for them, thereby increasing your confidence in your test.

- Repeat the same steps if you decide to define functions in separate modules where each module will contain their relative test files. For instance, if you have a `math.js` file that contains some math functions create a test file for the module `math.test.js` where you will write tests for those functions defined in `math.js`.

- Keep the conversation engaging and allow for people to suggest titles for tests and encourage them to think about possible test cases.

- Challenge people by asking them questions like what happens if I pass in something else, hinting towards edge cases, and would we need a test to increase our confidence in our tests.

- Once you have all the pseudo test cases or a sub-set of pseudo test cases you can encourage the group to complete writing the tests for test cases defined.

- Once the group has completed writing the tests encourage the group to complete the code to pass the written tests.

- Check in regularly to see if they all have passing and ask them collectively which tests were hard to pass.

- Keep track of time during the planning and also ensure you give the group adequate amount of time to complete the challenge.

- Allow your teaching assistants to go around the room to check on people's progress and try not to give the answer straight away and encourage the individuals to come to the answer by asking more questions or encouraging them to try and understand the error from their respective error messages.
