// ES6
// await는 async function 안에서만 수행 가능
async function getInfo() {
  const user = await getUser(1);
  const repo = await getRepo(user.githubID);
  const commit = await getCommit(repo.commitID);
  console.log(commit);
}

getInfo();

// IIFE (Immediately Invoked Function Expression) 방식
// 함수 이름을 주지 않고 바로 한 번만 호출하고 싶을 때 사용함
(async function() {
  try {
    const user = await getUser(1);
    const repo = await getRepo(user.githubID);
    const commit = await getCommit(repo.commitID);
    console.log(commit);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("connect released");
  }
})();

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
