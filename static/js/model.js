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

    checkBought(check) {
        this._items[check].bought = !(this._items[check].bought)
        this.publish("somethingbought?", this)
    }

    reorderitems(property) {
        this._items.sort(function(a, b){
            if (property == "name"){
                if (a.name < b.name){
                    return -1
                }
                if (a.name > b.name){
                    return 1
                }
            }

            if (property =="bought"){
                if (a.bought == true && b.bought == false){
                    return 1
                } if (a.bought == false && b.bought == true){
                    return -1
                } else { return 0}
            }

            if (property=="qty"){
                return b.qty - a.qty
            }

            if (property=="store"){
                if (a.store < b.store){
                    return -1
                }
                if (a.store > b.store){
                    return 1
                }
            }

            if (property=="section"){
                if (a.section < b.section){
                    return -1
                }
                if (a.section > b.section){
                    return 1
                }
            }

            if (property=="price"){
                return b.price - a.price
            }
        })
        
        this.publish("sortby_" + property, this)
    }
}

class Item{
    constructor(name, qty, priority, store, section, price, bought){
        this._name = name
        this._qty = qty
        this._priority = priority
        this._store = store
        this._section = section
        this._price = price
        this._bought = bought
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
    }get bought(){
        return this._bought
    }

    set bought(nv){
        this._bought = nv
    }
}