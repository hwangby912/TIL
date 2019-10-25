console.log("code start!");
const user = getUser(1);
// const repo = getRepo(user);
// const commit = getCommits(repo);
// console.log(commit);

// user를 찾아서, repo를 찾아서, commit을 찾고 싶어!

getUserCallback(1, user => {
  console.log("user finding");
  getRepo(user.githubID, repo => {
    console.log("repo finding");
    getCommits(repo.commitsID, commit => {
      console.log("commit finding");
      console.log(commit);
    });
  });
});
console.log(user);
console.log("code end!");
const users = [{ id: 1, githubID: "Hwang" }, { id: 2, githubID: "Shin" }];
function getUser(id) {
  //DB에 접속해서 유저를 찾는 함수
  let user;
  setTimeout(() => {
    user = users.find(user => user.id === id);
  }, 2000);
  return user;
}
function getUserCallback(id, callback) {
  setTimeout(() => {
    const user = users.find(user => user.id === id);
    callback(user);
  }, 2000);
}
function getRepo(githubID, callback) {
  const repos = [
    { githubID: "Hwang", commitsID: 1 },
    { githubID: "Shin", commitsID: 2 }
  ];
  setTimeout(() => {
    const repo = repos.find(repo => repo.githubID === githubID);
    callback(repo);
  }, 2000);
}
function getCommits(commitID, callback) {
  const commits = [
    { commitsID: 1, contents: "Hello" },
    { commitsID: 2, contents: "Bye" }
  ];
  setTimeout(() => {
    const commit = commits.find(commit => commit.commitsID === commitID);
    callback(commit);
  }, 2000);
}
