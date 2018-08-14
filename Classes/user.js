function User(name) {
    //Instance Variables
    this.name = null;
    this.health = 100;
    this.level = 0;
    this.damage = null;
    this.inventory = {}

    //Methods
    this.addInventory = function(item) {
        this.inventory.item = item
    }

    this.getInventory = function() {
        return this.inventory
    }

    this.getHealth = function() {
        return this.health;
    }

    this.setHealth = function(health) {
        this.health = this.health + health;
    }

}

module.exports = User