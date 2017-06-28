const app = {
  init(selectors) {
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)

    document
      .querySelector(selectors.formSelector)
      .addEventListener(
        'submit', 
        this.handleSubmit.bind(this)
      )
  },

  renderListItem(flick) {
    const item = document.createElement('li')
    item.textContent = flick.name
    const favButton = document.createElement('button')
    favButton.textContent = 'fav'
    favButton.style.backgroundColor = 'cornflowerblue'
    favButton.style.left = '40px'
    item.appendChild(favButton)
    return item
  },

  handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
      id: this.max + 1,
      name: f.flickName.value,
    }

    const listItem = this.renderListItem(flick)
    this.list.appendChild(listItem)
    this.flicks[flick.id - 1] = flick.Name
    this.max ++
  },
}

app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
})