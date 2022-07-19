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
          <div class="card" id="card${templenum}">
            <div class="card-body">
            <img src="images/${templenum}.webp" alt="Image of ${result["Name"]}">
              <div class="card-text">
                <h5 class="name">${result["Name"]}</h5>
                <p class="address">${result["Address"]}</p>
                <p class="phone">${result["Phone"]}</p>
                <p class="closures">${result["Closures"]}</p>
                <p class="services">${result["Services"]}</p>
                <p class="history">${result["History"]}</p>
                
              </div>
            </div>
          </div>
        `;
      
        // Append newyly created card element to the container
        container.innerHTML += content;
      })
    
  })