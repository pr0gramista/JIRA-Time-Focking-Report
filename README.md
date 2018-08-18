# JIRA-Time-Focking-Report

Wanna some report you little sneaky dev? GUESS WHAT?

**WE DON'T HAVE ONE**

## This is what I have to say:

https://www.youtube.com/watch?v=hA9aPEDk5ek

## But there is hope

```
fetch('https://<put your shit here>.atlassian.net/rest/api/2/search')
  .then(response=>response.json())
  .then‌​(data=>{ console.log(data); })
```

Yes! There is API which you _can_ use. This is point where the code is NEEDED!

## How to use this thing

Just copy `worklog-csv.js`, open developer tools in your browser, fill some of the top fields like nickname and dates and finally run this baby. You should get CSV in the format of: issue name, issue slug and time in seconds you logged.
