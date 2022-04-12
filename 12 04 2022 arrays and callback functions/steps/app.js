// Instructions
// Write a function that has one argument, a positive integer.
// Lets call it N.
// The function should console log a step shape.
// With N levels using the # character. Make sure the step has
// spaces on the right hand side if empty!
// Note:
// Examples:
// steps(2)
// ‘# ‘
// ‘##’

const steps = (N) => {
  for (let i = 1; i <= N; i++) {
    console.log('#'.repeat(i));
  }
};
// steps(2);
// steps(5);
steps(10);
