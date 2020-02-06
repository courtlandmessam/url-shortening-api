console.log("Hey Im working");

fetch(`https://rel.ink/api/links/`, {
    method: 'post',
    headers: {
     "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
   },
    body: {"url": "https://developers.google.com/web/updates/2015/03/introduction-to-fetch"}
  })
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });
