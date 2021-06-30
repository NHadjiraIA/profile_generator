const readline = require('readline');
const answers = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  answers.push(answer);
  rl.question("What's an activity you like doing?", (answer) => {
    answers.push(answer);
    rl.question("What do you listen to while doing that?", (answer) => {
      answers.push(answer);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        answers.push(answer);
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          answers.push(answer);
          rl.question("Which sport is your absolute favourite?", (answer) => {
            answers.push(answer);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              answers.push(answer);
              console.log(" %s loves listening to %s while %s, devouring %s for %s, prefers %s over any other sport, and is amazing %s",answers[0],answers[2], answers[1], answers[4], answers[3], answers[5], answers[6]);
              rl.close();
            });
          });
        });
      });
    });
  });
});
