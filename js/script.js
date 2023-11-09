
var allProducts = document.querySelectorAll(".pro")
                    

var div = document.querySelector(".product")
var btns = document.querySelector("#btns")
var totalPrice = 0
var text = document.getElementById("text1")

allProducts.forEach(function (item) {
    item.onclick = function () {
        totalPrice += +(item.getAttribute("price"))
    }
})
btns.onclick = function () {
    text.style.display="block"
    text.innerHTML = totalPrice + "$"
}
