const validifelse = (pass) => {
  if (pass.length >= 7) return 'Strong';
  else return 'Weak';
};

const validTrinary = (pass) => {
  return pass.length >= 7 ? 'Strong' : 'Weak';
};

const validiAnd = (pass) => {
  if (pass && pass.length >= 7) return 'Strong';
  else return 'Weak';
};

const validiAdvanced = (pass) => {
  return pass.length > 7 && /[A-Z]+/.test(pass)
    ? 'Very Strong'
    : pass.length == 7
    ? 'Strong'
    : pass.length < 7
    ? 'Weak'
    : null;
};

console.log(validiAdvanced('samert'));
