function runWeatherApp() {
  var weatherKey = "3e20f53fb2ef40e28bf95905221510";
  var weatherBaseUrl = "https://api.weatherapi.com/v1";

  var temperatureButtonEl = document.querySelector("#temperature-button");
  temperatureButtonEl.addEventListener("click", onTemperatureButtonClick);
  var temperatureContainerEl = document.querySelector("#temperature-container");

  function onTemperatureButtonClick() {
    var queryParams = "key=" + weatherKey + "&q=Cluj";
    fetch(weatherBaseUrl + "/current.json?" + queryParams)
      .then(function (response) {
        return response.json();
      })
      .then(function (weather) {
        var myWeather = weather || {};
        var currentWeather = myWeather.current || {};
        var temperature = currentWeather.temp_c || null;
        if (temperature !== null) {
          temperatureContainerEl.style = null;
          var temperatureEl =
            temperatureContainerEl.querySelector("#temperature");
          temperatureEl.innerHTML = temperature;
        }
      });
  }
}

function runPostsApp() {
  var postsBaseUrl = "https://jsonplaceholder.typicode.com";
  var postsContainerEl = document.querySelector("#posts-container");

  function renderPostList(posts) {
    posts.forEach(function (post) {
      var postDiv = createPost(post);
      if (postDiv) {
        postsContainerEl.appendChild(postDiv);
      }
    });
  }

  function createPost(post) {
    var div = document.createElement("div");
    //post.id

    div.innerHTML = `

        <div class="post-title">
          <h2>${post.title}</h2>
          <button class="edit" data-title="${post.title}" data-body="${post.body}" data-id="${post.id}">Edit</button>
          <button class="delete" id="${post.id}">Delete</button>
        </div>
        <p class="post-body">${post.body}</p>

      `;

    return div;
  }

  fetch("https://jsonplaceholder.typicode.com" + "/posts")
    .then(function (response) {
      return response.json();
    })
    .then(function (posts) {
      renderPostList(posts);
    });
}

var pageInit = function () {
  runWeatherApp();
  runPostsApp();
};

window.addEventListener("load", function () {
  pageInit();
  setTimeout(() => {
    const arrClass = document.querySelectorAll(".delete");
    for (let i of arrClass) {
      i.addEventListener("click", (e) => {
        console.log("please delete post number" + e.target.id);
        //fetch delete
        fetch(
          "https://jsonplaceholder.typicode.com" + "/posts/" + e.target.id,
          {
            method: "DELETE",
          }
        ).then(function (response) {
          return response.json();
        });
      });
    }

    const editButton = document.querySelectorAll(".edit");
    for (let i of editButton) {
      i.addEventListener("click", (e) => {
        console.log("please edit post number" + e.target.id);
        document.querySelector("#update-modal").style.display = "block";
        console.log(e);
        const myTitle = e.target.dataset.title;
        const myBody = e.target.dataset.body;
        const myId = e.target.dataset.id;
        document.querySelector("#modaltitle").value = myTitle;
        document.querySelector("#modalbody").value = myBody;
        //closemodal
        const dialog = document.querySelector("#update-modal");
        const closeButton = document.querySelector("#closemodal");
        closeButton.addEventListener("click", () => {
          dialog.style.display = "none";
        });

        const updateButton = document.querySelector("#update");
        updateButton.addEventListener("click", () => {
          const updatedTitle = document.querySelector("#modaltitle").value;
          const updatedBody = document.querySelector("#modalbody").value;
          console.log("please update post" + e.target.id);
          //fetch update
          fetch("https://jsonplaceholder.typicode.com" + "/posts/" + myId, {
            method: "PUT",
            body: JSON.stringify({ title: updatedTitle, body: updatedBody }),
          }).then(function (response) {
            return response.json();
          });
        });
      });
    }
  }, 1000);
});
