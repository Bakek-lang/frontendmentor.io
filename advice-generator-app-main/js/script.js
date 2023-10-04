// const advice = document.querySelector(".advice-section p");
// const url = "https://api.adviceslip.com/advice";

// async function makeApiCall() {
//   const response = await fetch(url);

//   const results = await response.json();
//   advice.innerHTML = `" ${results.slip.advice}"`;
//   console.log(results.slip.advice);
// }

// makeApiCall();

const iconDice = document.querySelector(".svg-container");

const originalIconDice = iconDice.innerHTML;
const hoverIconDice = `<svg xmlns="http://www.w3.org/2000/svg" width="144" height="144" viewBox="0 0 144 144" fill="none">
<g filter="url(#filter0_d_0_80)">
  <circle cx="72" cy="72" r="32" fill="#53FFAA"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M64 60H80C82.2081 60.0025 83.9975 61.7919 84 64V80C83.9975 82.2081 82.2081 83.9975 80 84H64C61.7919 83.9975 60.0025 82.2081 60 80V64C60.0025 61.7919 61.7919 60.0025 64 60ZM66 76.5C66 77.3284 66.6716 78 67.5 78C68.3284 78 69 77.3284 69 76.5C69 75.6716 68.3284 75 67.5 75C66.6716 75 66 75.6716 66 76.5ZM67.5 69C66.6716 69 66 68.3284 66 67.5C66 66.6716 66.6716 66 67.5 66C68.3284 66 69 66.6716 69 67.5C69 68.3284 68.3284 69 67.5 69ZM70.5 72C70.5 72.8284 71.1716 73.5 72 73.5C72.8284 73.5 73.5 72.8284 73.5 72C73.5 71.1716 72.8284 70.5 72 70.5C71.1716 70.5 70.5 71.1716 70.5 72ZM76.5 78C75.6716 78 75 77.3284 75 76.5C75 75.6716 75.6716 75 76.5 75C77.3284 75 78 75.6716 78 76.5C78 77.3284 77.3284 78 76.5 78ZM75 67.5C75 68.3284 75.6716 69 76.5 69C77.3284 69 78 68.3284 78 67.5C78 66.6716 77.3284 66 76.5 66C75.6716 66 75 66.6716 75 67.5Z" fill="#202733"/>
<defs>
  <filter id="filter0_d_0_80" x="0" y="0" width="144" height="144" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset/>
    <feGaussianBlur stdDeviation="20"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.327053 0 0 0 0 1 0 0 0 0 0.66593 0 0 0 1 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_80"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_80" result="shape"/>
  </filter>
</defs>
</svg>`;

let isHovered = false;

iconDice.addEventListener("mouseenter", function () {
  if (!isHovered) {
    iconDice.innerHTML = hoverIconDice;
    isHovered = true;
  }
});

iconDice.addEventListener("mouseleave", function () {
  if (isHovered) {
    iconDice.innerHTML = originalIconDice;
    isHovered = false;
  }
});

iconDice.addEventListener("click", function () {
  const advice = document.querySelector(".advice-section p");
  const url = "https://api.adviceslip.com/advice";
  const idNumber = document.querySelector("h1");

  async function makeApiCall() {
    const response = await fetch(url);

    const results = await response.json();
    advice.innerHTML = `"${results.slip.advice}"`;
    console.log(results.slip.advice);
    idNumber.textContent = `ADVICE #${results.slip.id}`;
  }

  makeApiCall();
});
