myshoppinglist = new ShoppingList()
myshoppinglist.subscribe(redrawTable)
savedlist = localStorage.getItem("savedlist")
restoreList(savedlist)

function onClick() {
    let iteminput = document.querySelector("#item")
    let qtyinput = document.querySelector("#quantity")
    let storeinput = document.querySelector("#store")
    let sectioninput = document.querySelector("#section")
    let priceinput = document.querySelector("#price")
    let priorityinput = document.querySelector("#priority")

    let myitem = new Item(iteminput.value, qtyinput.value, priorityinput.value, storeinput.value, sectioninput.value, priceinput.value)
    myshoppinglist.addItem(myitem)
}

function onCheck(check) {
    myshoppinglist.checkBought(check)
}

function sort(property) {
    myshoppinglist.reorderitems(property)
}

function restoreList(savedlist){
    if(savedlist != null){
        itemdict = JSON.parse(savedlist)
        for(let i = 0; i < itemdict.length; i++){
            item = itemdict[i]
            restoreditem = new Item(item._name, item._qty, item._priority, item._store, item._section, item._price, item._bought)
            myshoppinglist._items.push(restoreditem)
            redrawTable(myshoppinglist, "initialize")
        }
    }
    
}