const app = {
  init(selectors) {
    this.flicks = []
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)
    this.template = document.querySelector(selectors.templateSelector)

    document
      .querySelector(selectors.formSelector)
      .addEventListener(
        'submit', 
        this.handleSubmit.bind(this)
      )
  },

  favFlick(flick, ev) {
    const listItem = ev.target.closest('.flick')
    flick.fav = !flick.fav

    if (flick.fav) {
      listItem.classList.add('fav')
    } else {
      listItem.classList.remove('fav')
    }
  },

  removeFlick(flick, ev) {
    // remove from the DOM
    const listItem = ev.target.closest('.flick')
    listItem.remove()

    // remove from the array
    const i = this.flicks.indexOf(flick)
    this.flicks.splice(i, 1)
  },

//moves thre flicks up the list
  upFlick(flick, ev){
    const listItem  = ev.target.closest('.flick')
    this.list.insertBefore(listItem, listItem.previousSibling)
  },
  


  //moves the flicks down the list
  downFlick(flick, ev){
    const listItem  = ev.target.closest('.flick')
this.list.insertBefore(listItem, listItem.nextSibling.nextSibling)
  },



  renderListItem(flick) {
    const item = this.template.cloneNode(true)
    item.classList.remove('template')
    item.dataset.id = flick.id
    item
      .querySelector('.flick-name')
      .textContent = flick.name

    item
      .querySelector('button.remove')
      .addEventListener(
        'click', 
        this.removeFlick.bind(this, flick)
      )

    item
      .querySelector('button.fav')
      .addEventListener(
        'click', 
        this.favFlick.bind(this, flick)
      )
    item
      .querySelector('button.up')
      .addEventListener(
        'click', 
        this.upFlick.bind(this, flick)
      )
item
      .querySelector('button.down')
      .addEventListener(
        'click', 
        this.downFlick.bind(this, flick)
      )


    return item
  },

  handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
      id: this.max + 1,
      name: f.flickName.value,
      fav: false,
    }

    this.flicks.unshift(flick)

    const listItem = this.renderListItem(flick)
    this.list
      .insertBefore(listItem, this.list.firstElementChild)

    this.max ++
    f.reset()
  },
}

app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
  templateSelector: '.flick.template',
})





















































// const app = {
//   init(selectors) {
//       this.flicks = []
//     this.max = 0
//     this.list = document.querySelector(selectors.listSelector)

//     document
//       .querySelector(selectors.formSelector)
//       .addEventListener(
//         'submit', 
//         this.handleSubmit.bind(this)
//       )
//   },

//   renderListItem(flick) {
//     const item = document.createElement('li')
//     item.textContent = flick.name
//     item.style.backgroundColor = "lightgrey"
//     const favButton = document.createElement('button')
//     const delButton = document.createElement('button')
//     //favButton.getAttribute('id', 'f$(flick.id)')
//     //favButton.getAttribute('id', 'f$(flick.id)')
//     favButton.textContent = 'fav'
//     delButton.textContent = 'delete'
//     favButton.style.backgroundColor = 'red'
//     delButton.style.backgroundColor = 'yellow'
//     delButton.style.color = "black"
//     favButton.style.color = "black"
//     favButton.style.position = 'absolute'
//     delButton.style.position = 'absolute'
//     favButton.style.right = '230px'
//     delButton.style.right = '290px'
//     favButton.style.height = '25px'
//     favButton.style.width = '60px'
//     delButton.style.height = '25px'
//     delButton.style.width = '60px'
//     favButton.addEventListener('click', ()=>{
//         if(item.style.backgroundColor == 'lightgrey') {
//             item.style.backgroundColor = 'gold'}
//             else{item.style.backgroundColor = 'lightgrey'}})
        
    
    
//     delButton.addEventListener('click', ()=>{item.parentNode.removeChild(item)})
//     item.appendChild(favButton)
//     item.appendChild(delButton)
//     return item
//   },

//   handleSubmit(ev) {
//     ev.preventDefault()
//     const f = ev.target
//     const flick = {
//       id: this.max + 1,
//       name: f.flickName.value,
//     }

//     const listItem = this.renderListItem(flick)
//     this.list.insertBefore(listItem, this.list.firstElementChild)
//     this.flicks[flick.id - 1] = flick.Name
//     this.max ++
//   },

//   faved(){
 
//   }
// }



// app.init({
//   formSelector: 'form#flick-form',
//   listSelector: '#flick-list',
// })