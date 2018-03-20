myshoppinglist = new ShoppingList()
myshoppinglist.subscribe(redrawTable)
//savedlist = localStorage.getItem("savedlist")
fetch('http://127.0.0.1:5001/getlist')
.then(function(response){return response.text()})
.then(function(text){
    console.log(text)
    let list_torestore = JSON.parse(text)
    console.log(list_torestore)
    restoreList(list_torestore)
})

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
        console.log(itemdict)
        for(let i = 0; i < itemdict.length; i++){
            item = itemdict[i]
            console.log(item)
            restoreditem = new Item(item._name, item._qty, item._priority, item._store, item._section, item._price, item._bought)
            myshoppinglist._items.push(restoreditem)
            redrawTable(myshoppinglist, "initialize")
        }
    }
    
}