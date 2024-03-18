function loanSanctionPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let loanSanctioned = Math.random() > 0.5;

      if (loanSanctioned) {
        resolve("Loan sanctioned");
      } else {
        reject("Loan not sanctioned");
      }
    }, 3000);
  });
}

loanSanctionPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
