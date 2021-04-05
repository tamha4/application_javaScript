var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display");
var countDisplay = document.body.querySelector(".count");
var btn = document.body.querySelector(".btn");
var count = 0;
var pages = [
  {
    title: "Home",
    content: "Home"
  },
  {
    title: "About",
    content: "About",
    name: "none"
  },
  {
    title: "Interact",
    content: "Interact"
  }
];

for (var i = 0; i < pages.length; i++) {
  createPage(pages[i]);
}

function createPage(pg) {
  var button = document.createElement("button");
  button.addEventListener("click", function () {
    contentWrite(pg.content, pg.title);
  });
  button.innerHTML = pages[i].title;
  nav.appendChild(button);
}

function homePage() {
  display.innerHTML = "<h1>Home</h1>";
  btn.style.display = "none";
  document.body.querySelector("p").style.display = "none";
}

function aboutPage() {
  btn.style.display = "none";
  document.body.querySelector("p").style.display = "none";
  display.innerHTML = "";
  var header1 = document.createElement("h1");
  header1.innerHTML = "About";
  display.appendChild(header1);
  var header = document.createElement("h3");
  header.innerHTML = "Zach";
  display.appendChild(header);
}
function counts() {
  count += 1;
  document.body.querySelector("p").style.display = "block";
  document.body.querySelector(".count").innerHTML = count;
}
function interactPage() {
  display.innerHTML = "";
  var header = document.createElement("h1");
  header.innerHTML = "Interact";
  display.appendChild(header);
  btn.style.display = "block";
  count.style.display = "block";
  btn.addEventListener("click", counts);
}

function contentWrite(wd, pg) {
  if (wd === "Home") {
    homePage();
  } else if (wd === "About") {
    aboutPage();
  } else {
    interactPage();
  }
}

contentWrite(pages[0].content, "Home");