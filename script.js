// fetching the github repo
fetch("https://api.github.com/users/sagar-code/repos")
  .then((response) => response.json())
  .then((data) =>
    data.forEach((element) => {
      // creating tag for html
      let li = document.createElement("li");
      let img = document.createElement("img");
      let div = document.createElement("div");
      let span1 = document.createElement("span");
      let span2 = document.createElement("span");
      let a = document.createElement("a");

      // catching the ul
      let ul = document.getElementById("myList");

      // appending inner tag for div
      div.append(span1, span2);

      // appending inner tag in li
      li.append(img, div, a);

      // setting attribute
      img.setAttribute("src", "images/icons8-project-64.png");
      img.setAttribute("alt", "pic");
      img.setAttribute("class", "repoImg");

      div.setAttribute("class", "info");
      span1.setAttribute("id", "id");
      span1.textContent = element.id;
      span2.setAttribute("class", "name");
      span2.textContent = element.name;

      a.setAttribute("class", "button");
      let url = element.html_url;
      a.setAttribute("href", url);
      a.setAttribute("target", "_blank");
      a.textContent = "Visit Project";

      //   appending li to ul
      ul.append(li);
    })
  );

//   remove the loading after the data is fetched
document.getElementById("mainContainer").hidden = false;
document.getElementById("loading").hidden = true;
