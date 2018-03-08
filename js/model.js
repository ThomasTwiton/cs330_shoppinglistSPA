class Subject {
    constructor(){
        this.handlers= []
    }

    subscribe(fn) {
        this.handlers.push(fn)
    }

    unsubscribe(fn) {
        this.handlers = this.handlers.filter(
            function(item){
                if (item !== fn){
                    return item;
                }
            }
        )
    }

    publish(msg, someobj) {
        var scope = someobj || window;
        for (let fn of this.handlers){
            fn(scope,msg)
        }
    }
}

class ShoppingList extends Subject{
    constructor(){
        super()
        this._items = []
        this._olditems = []
    }

    get items(){
        return this._items
    }

    addItem(newitem) {
        this._items.push(newitem)
        this.publish("newitem_addedto_shoppinglist", this)
    }

    checkBought() {
        this.publish("somethingbought?", this)
    }
}

class Item{
    constructor(name, qty, priority, store, section, price){
        this._name = name
        this._qty = qty
        this._priority = priority
        this._store = store
        this._section = section
        this._price = price
        this._bought = false
    }
    get name(){
        return this._name
    }
    get qty(){
        return this._qty
    }
    get priority(){
        return this._priority
    }
    get store(){
        return this._store
    }
    get section(){
        return this._section
    }
    get price(){
        return this._price
    }

    get bought(){
        return this._bought
    }

    set bought(nv){
        this._bought = nv
    }
}