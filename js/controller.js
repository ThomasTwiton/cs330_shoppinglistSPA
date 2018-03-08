myshoppinglist = new ShoppingList()
myshoppinglist.subscribe(redrawTable)

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

function onCheck() {
    myshoppinglist.checkBought()
}