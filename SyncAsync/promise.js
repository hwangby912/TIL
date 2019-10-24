const promise = new Promise((resolve, reject) => {
  // Async 작업
  resolve("Success!");
  reject("Fail");
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));

const getAccount = new Promise((resolve, reject) => {
  setTimeout(() => {
    const number = Math.floor(Math.random() * 100);
    if (number % 2 === 1) {
      resolve({ id: 1, balance: 1000 });
    } else {
      reject(new Error("Accounts not found"));
    }
  }, 2000);
});

getAccount
  .then(result => console.log(result))
  .catch(error => console.error(error));

function getUser(id) {
  console.log("User finding");
  const users = [
    { id: 1, githubID: "Hwang" },
    { id: 2, githubID: "Shin" }
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(user => user.id === id);
      if (user) {
        resolve(user);
      } else {
        reject(new Error("User not found"));
      }
    }, 2000);
  });
}

function getRepo(githubID) {
  console.log("Repo finding");
  const repos = [
    { githubID: "Hwang", commitID: 1 },
    { githubID: "Shin", commitID: 2 }
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const repo = repos.find(
        repo => repo.githubID === githubID
      );
      if (repo) {
        resolve(repo);
      } else {
        reject(new Error("Repo not found!"));
      }
    }, 2000);
  });
}

function getCommit(commitID) {
  console.log("commitID finding");
  const commits = [
    { commitID: 1, contents: "Hello!" },
    { commitID: 2, contents: "Bye" }
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const commit = commits.find(
        commit => commit.commitID === commitID
      );
      if (commit) {
        resolve(commit);
      } else {
        reject(new Error("commit not found"));
      }
    }, 2000);
  });
}

getUser(1)
  .then(user => getRepo(user.githubID))
  .then(repo => getCommit(repo.commitID))
  .then(commit => console.log(commit))
  .catch(err => console.log(err));
