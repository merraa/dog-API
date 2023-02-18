const dogImageDiv = document.getElementById('dogImage');
const btn = document.getElementById('button');

fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json()).then(json => {
     dogImageDiv.innerHTML = `<img src="${json.message}"height = 300 width= 300">` 
  })

btn.onclick = () => {
  fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json()).then(json => {
     dogImageDiv.innerHTML = `<img src="${json.message}"height = 300 width= 300">` 
  })
}
