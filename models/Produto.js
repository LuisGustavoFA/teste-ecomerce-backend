class Produto {
    constructor(json) {
        this.id = json.id
        this.name = json.name
        this.price = json.price
        this.discount = json.discount
        this.seller = json.seller
        this.ratings = json.ratings
        this.images = json.images
        this.description = json.description
        this.category = json.category
    }
}

module.exports = Produto;