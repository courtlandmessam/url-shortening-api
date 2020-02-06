console.log("Hey Im working");

let linkLog = [];

fetch(`https://rel.ink/api/links/`, {
    method: 'post',
    headers: {
     "Content-type": "application/json; charset=UTF-8"
   },
    body: '{"url": "https://developers.google.com/web/updates/2015/03/introduction-to-fetch"}'
  })
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    linkLog.push(data);
    console.log(linkLog);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });
