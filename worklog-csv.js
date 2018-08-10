const nickname = "";
const from = "2018-07-28";
const to = "2018-09-11";
const atlassian = "your-atlassian";

const isMine = worklog => {
  return worklog.author.key === nickname;
};

const issueToCSV = issue => {
  const key = issue.key;
  const worklog = issue.fields.worklog;
  if (worklog.maxResults <= worklog.total) {
    console.log(`Manually check ${key}!`);
  }

  let summary = 0;

  worklog.worklogs.filter(isMine).map(worklog => {
    summary += worklog.timeSpentSeconds;
  });
  console.log(`${key},${summary}`);
};

const toCSV = data => {
  data.issues.map(issue => issueToCSV(issue));
};

const requestBody = {
  fields: ["worklog"],
  jql: `worklogAuthor in ('${nickname}') and worklogDate >= '${from}' and worklogDate < '${to}'`,
  maxResults: 1000
};

fetch(`https://${atlassian}.atlassian.net/rest/api/2/search`, {
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  },
  method: "post",
  body: JSON.stringify(requestBody)
})
  .then(response => response.json())
  .then(data => toCSV(data));
