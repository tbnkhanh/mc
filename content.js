let contentTitle;

function dynamicClothingSection(ob) {
  let boxDiv = document.createElement("div");
  boxDiv.id = "box";

  let boxLink = document.createElement("a");
  boxLink.href = "/mc/contentDetails.html?" + ob.id;

  let imgTag = document.createElement("img");
  imgTag.src = ob.preview;

  let detailsDiv = document.createElement("div");
  detailsDiv.id = "details";

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(ob.name);
  h3.appendChild(h3Text);

  let h4 = document.createElement("p");
  let h4Text = document.createTextNode(ob.description);
  h4.appendChild(h4Text);

  let h2 = document.createElement("h3");
  let h2Text = document.createTextNode('Giá: ' + ob.price + ' VNĐ');
  h2.style.color ='rgb(3, 94, 94)';
  h2.appendChild(h2Text);

  boxDiv.appendChild(boxLink);
  boxLink.appendChild(imgTag);
  boxLink.appendChild(detailsDiv);
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h4);
  detailsDiv.appendChild(h2);

  return boxDiv;
}

let containerClothing = document.getElementById("containerClothing");
let containerAccessories = document.getElementById("containerAccessories");

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
        containerClothing.appendChild(
          dynamicClothingSection(data[i])
        );
    }
  })
  .catch(error => {
    console.error('Error loading the JSON data:', error);
  });
