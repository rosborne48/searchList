let allItems = [
  // Item 1
  {
    name: 'Osborne',
    link: 'https://google.com?person=osborne'
  },
  // Item 2,
  {
    name: 'Morrison',
    link: 'https://google.com?person=morrison'
  },
]

// Build list items from items array
function generateList(items, empty=false) {

  // Get list parent element 
  var list = document.getElementById("myUL");

  // Clear list
  list.innerHTML = '' 

  if(empty) {
    list.innerHTML = ''
    return
  }

  items.forEach(item => {
    // Create List item
    var element = document.createElement('li')
    // Create inner link item
    var link = document.createElement('a')

    // Set values on link item
    link.textContent = item.name
    link.href = item.link
    link.target = '_blank'

    // Attach link to list item
    element.appendChild(link)
    // Attach list item to list
    list.appendChild(element)
  })
}

// generateList(allItems)




function filterList() {
  // Declare variables
  var input = document.getElementById("myInput");
  var empty = !input.value.length

  var filteredItems = allItems.filter(item => {
    return item.name.toUpperCase().indexOf(input.value.toUpperCase()) > -1
  })

  generateList(filteredItems, empty)
}
