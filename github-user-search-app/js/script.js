const form = document.querySelector(".search-form");
const body = document.body;

form.addEventListener("submit", function (event) {
  console.log(event);
  event.preventDefault();
});

const profilePicture = document.querySelector(".profile-picture");
const githubName = document.querySelector(".name-github");
console.log(githubName);
const username = document.querySelector(".tag");
const bio = document.querySelector("h2");

const joined = document.querySelector(".joined");
// const dateString = results.created_at;
// const rawDate = dateString.split("T"[0]);
// const formattedDate = new Date(rawDate).toLocaleDateString("en-US", {
//   day: "numeric",
//   month: "long",
//   year: "numeric",
// });
// console.log(formattedDate);

const repos = document.querySelector(".repos p");
const followers = document.querySelector(".followers p");
const following = document.querySelector(".following p");
const locationElement = document.querySelector(".location");
const locationParagraph = locationElement.querySelector("p");
console.log(locationParagraph.textContent);

const twitter = document.querySelector(".twitter");
const twitterParagraph = twitter.querySelector("p");

const website = document.querySelector(".website");
const websiteParagraph = website.querySelector("a");

const company = document.querySelector(".company");
const companyParagraph = company.querySelector("p");

function changeAccount(results) {
  profilePicture.src = results.avatar_url;
  if (results.name === null) {
    githubName.textContent = results.login;
  } else {
    githubName.textContent = results.name;
  }
  username.textContent = results.login;
  username.href = results.html_url;
  if (results.bio === null) {
    bio.textContent = "This profile has no bio";
  } else {
    bio.textContent = results.bio;
    bio.classList.remove("not-available");
  }
  const dateString = results.created_at;
  const rawDate = dateString.split("T")[0];
  const formattedDate = new Date(rawDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  joined.textContent = `Joined ${formattedDate}`;
  repos.textContent = results.public_repos;
  followers.textContent = results.followers;
  following.textContent = results.following;
  if (results.location === null) {
    locationElement.style.opacity = "0.75";
    locationParagraph.textContent = "Not available";
  } else {
    locationParagraph.textContent = results.location;
  }
  if (results.twitter_username === null) {
    twitter.style.opacity = "0.75";
    twitterParagraph.textContent = "Not available";
  } else {
    twitterParagraph.textContent = results.twitter_username;
  }
  websiteParagraph.textContent = results.html_url;
  if (results.company === null) {
    company.style.opacity = "0.75";
    companyParagraph.textContent = "Not available";
  } else {
    companyParagraph.textContent = results.company;
  }
}

async function makeApiCall() {
  try {
    const inputInfo = document.querySelector(".stretch-input").value;

    const url = "https://api.github.com/users/";

    const fullURL = url + inputInfo;
    const response = await fetch(fullURL);

    const results = await response.json();

    changeAccount(results);

    console.log(results);
    console.log(results.login);
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", makeApiCall);
