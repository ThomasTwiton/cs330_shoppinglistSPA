class Item{
    constructor(name, qty, priority, store, section, price){
        this._name = name
        this._qty = qty
        this._priority = priority
        this._store = store
        this._section = section
        this._price = price
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
    //helper function for having something to iterate over when constucting rows of our table
    buildItemArray() {
        let myarray = []
        myarray.push(this._name)
        myarray.push(this._qty)
        myarray.push(this._store)
        myarray.push(this._section)
        myarray.push(this._price)
        return myarray
    }
} 

class ShoppingList{
    constructor(){
        this._items = []
    }

    additem(item) {
        this._items.push(item)

        let mytable = document.querySelector("#list")
        let myrow = document.createElement("tr")
        let checkbox = document.createElement("td")
        checkbox.innerHTML = "<input type=checkbox />"
        myrow.appendChild(checkbox)
        mytable.appendChild(myrow)

        let myarray = item.buildItemArray()

        for(let i=0; i<5; i++){        
            let newcell = document.createElement("td")
            newcell.innerHTML = myarray[i]
            myrow.appendChild(newcell)       
        }
        if (item.priority == "High"){
            myrow.classList.add("danger")
        } 
        if (item.priority == "Medium"){
            myrow.classList.add("warning")
        } 
        if (item.priority == "Low"){
            myrow.classList.add("success")
        }         
    }
}

function onclick() {
    //let mytable = document.querySelector("#list")

    let iteminput = document.querySelector("#item")
    let qtyinput = document.querySelector("#quantity")
    let storeinput = document.querySelector("#store")
    let sectioninput = document.querySelector("#section")
    let priceinput = document.querySelector("#price")
    let priorityinput = document.querySelector("#priority")

    let myitem = new Item(iteminput.value, qtyinput.value, priorityinput.value, storeinput.value, sectioninput.value, priceinput.value)
    let myshoppinglist = new ShoppingList()
    myshoppinglist.additem(myitem)

    /* let myarray = [iteminput, qtyinput, storeinput, sectioninput, priceinput]
    let myrow = document.createElement("tr")
    let checkbox = document.createElement("td")
    checkbox.innerHTML = "<input type=checkbox />"
    myrow.appendChild(checkbox)
    mytable.appendChild(myrow)
    for(let i=0; i<5; i++){        
        let newcell = document.createElement("td")
        newcell.innerHTML = myarray[i].value
        myrow.appendChild(newcell)       
    }
    if (priorityinput.value == "High"){
        myrow.classList.add("danger")
    } 
    if (priorityinput.value == "Medium"){
        myrow.classList.add("warning")
    } 
    if (priorityinput.value == "Low"){
        myrow.classList.add("success")
    }  */
}
