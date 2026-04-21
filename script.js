const button = document.querySelector("#button");
const text = document.querySelector("#text");

function PAYS() {
  fetch("https://restcountries.com/v3.1/all?fields=name,region,flags")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      text.innerHTML = "";

      for (let i = 0; i < data.length; i++) {
        let country = data[i];

        text.innerHTML += `
            <div>
                <img src="${country.flags.png}" width="100">
                <h3>${country.name.common}</h3>
                <p>${country.region}</p>
            </div>
        `;
      }
      text.appendChild(imgElement);
    });
}
button.addEventListener("click", PAYS);
