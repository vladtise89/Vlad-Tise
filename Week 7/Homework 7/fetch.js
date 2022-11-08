var root = "https://jsonplaceholder.typicode.com";

// fetch(root + "/posts/1", {
//   method: "GET",
// })
//   .then(function (response) {
//     console.log("received response", response);
//     return response.json();
//   })
//   .then(function (jsonResp) {
//     console.log("final data structure", jsonResp);
//   });

fetch(root + "/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
})
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResp) {
    console.log(jsonResp);
  });

fetch(root + "/posts/101", {
  method: "PUT",
  body: JSON.stringify({
    id: 101,
    title: "fooooooo",
    body: "barrrrr",
    userId: 1,
  }),
})
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResp) {
    console.log(jsonResp);
  });
