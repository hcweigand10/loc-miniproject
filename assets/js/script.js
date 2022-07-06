
var searchInputEl = document.getElementById("search-input")
var formatInputEL = document.getElementById("format-input")
var searchBtnEl = document.getElementById("search-btn")

searchBtnEl.addEventListener("click", getParams)


// getParams
function getParams (event) {
  event.preventDefault()
  var searchTerm = searchInputEl.value
  var format = formatInputEL.value
  if (searchTerm === "") {
    alert("please enter something")
    return
  }
  apiSearch(searchTerm, format)
}


// apiSearch
function apiSearch(search, format) {
  var requestUrl = "https://www.loc.gov/"
  requestUrl = requestUrl + format + "/?fo=json&q=" + search

  fetch(requestUrl) 
  .then( function (response) {
    if (!response.ok) {
      console.log("error")
    } else {
      return response.json()
    }

  })
  .then(function (response) {
    if (response) {
      printData(response)
    }
  })

}

// printData
function printData(data) {
  // console.log(data.results[2])
  for (let i = 0; i < 10; i++) {
    const element = data.results[i];
    const contentCard = document.createElement("div")
    contentCard.setAttribute("class", "card mb-3 p-3 bg-light")
    const contentTitle = document.createElement("h3")
    contentTitle.textContent = `Title: ${element.title}`
    const contentDate = document.createElement("h4")
    contentDate.textContent = `Date: ${element.date}`
    // const contentBody = document.createElement("p")
    contentCard.append(contentTitle, contentDate)
    document.getElementById("results-content").append(contentCard)
    
  }
}