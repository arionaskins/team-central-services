function range(int) {
  const arr = [];
  for (let num = 0; num < int; num += 1) {
    arr.push(num);
  }
  return arr;
}

function getRandomIntInclusive(min, max) {
  const min1 = Math.ceil(min);
  const max1 = Math.floor(max);
  return Math.floor(Math.random() * (max1 - min1 + 1) + min1); // The maximum is inclusive and the minimum is inclusive
}

// get and produce search results
function createSearch(term, data) {
  $('#search').on('click', async (e) => {
    e.preventDefault();
    // return search results list
  });
}

// get json data and return bar chart data list
function prepareData(serverJson) { // process your restaurants here!
  createSearch(serverJson); // search button event listener
  const have = document.createElement('p');
  have.className = 'title is-uppercase is-centered';
  have.textContent = 'Our data: ';
  $('.container').append(have);
  for (let obj = 0; obj < serverJson.length; obj += 1) { 
    const payee = serverJson[obj].payee_name;
    const agency = serverJson[obj].agency;
    const zip = serverJson[obj].zip_code;
    const amount = serverJson[obj].amount;
    const description = serverJson[obj].payment_description;

    // div append just to see/check api data is present
    const API = document.createElement('div');
    API.innerHTML = `<h4><span class='is-size-4'>payee:  </span>${payee}</h4>
                      <p><span class='is-size-4'>agency:  </span>${agency}</p>
                      <p><span class='is-size-4'>zip:  </span>${zip}</p>
                      <p><span class='is-size-4'>amount:  </span>${amount}</p> 
                      <p><span class='is-size-4'>description:  </span>${description}</p>
                      <p>----------------</p>
                      <br>`;
    $('.container').append(API);
  }
}

// create bar chart
function generateChart(chartData) {

}

// generate button click -- run server
$('#generate').on('click', async (e) => {
  e.preventDefault();
  const div = $(e.target).serializeArray();
  fetch('/api', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(div),
  }) 
    .then((fromServer) => fromServer.json())
    .then((jsonFromServer) => prepareData(jsonFromServer))
    .catch((err) => {
      console.log(err, 'error');
    });
});    
