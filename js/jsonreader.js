const output = document.getElementById('output')
const cardholder = document.getElementById('accordion')
const container = document.getElementById('accordion');

fetch('templedata.json')
.then(response => response.json())
  .then(data => {
    data.forEach((result, templenum) => {
        // Create card element
        const card = document.createElement('div');
        card.classList = 'card-body';
      
        // Construct card content
        const content = `
          <div class="card">
            <div class="card-body">
            <img src="images/${templenum}.webp" alt="Image of ${result["Name"]}">
              <h5>${result["Name"]}</h5>
              <p>${result["Address"]}</p>
              <p>${result["Phone"]}</p>
              <p>${result["Closures"]}</p>
              <p>${result["Services"]}</p>
              <p>${result["History"]}</p>
            </div>
          </div>
        `;
      
        // Append newyly created card element to the container
        container.innerHTML += content;
      })
    
  })