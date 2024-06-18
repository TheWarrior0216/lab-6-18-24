export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }
  get someHTMLTemplate() {
    return `
    <div class="col-4">
            <div>
              <div class="card text-center bg-dark text-light" onclick="app.SnacksController.buySnack('${this.name})"
                role="button">
                <img class="card-img-top" src="${this.imgUrl}"
                  alt="Title" />
                <div class="card-body">
                  <h4 class="card-title">${this.name}</h4>
                  <p class="card-text">${this.price}</p>
                </div>
              </div>
            </div>
          </div>`
  }
}