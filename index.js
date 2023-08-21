function disableButton(value) {
    var button = document.getElementById(value);
    button.disabled = true;
}
 disableButton("Make_puchase_btn")
disableButton("apply_btn")

let sum = 0
let serial = 0
function clicked(value){
    const Item_price_txt = value.childNodes[7].childNodes[0].innerText
    const Item_price_txtValue = parseFloat(Item_price_txt)
    sum += Item_price_txtValue
    const Total_price = document.getElementById("TotalPrice")
    const FinalPayment_balance = document.getElementById("final_balance")
    Total_price.innerText = sum
    FinalPayment_balance.innerText = sum

    if(sum >0){
        var button = document.getElementById("Make_puchase_btn");
        button.disabled = false;
    }
    if(sum >=200){
        var button = document.getElementById("apply_btn");
        button.disabled = false;
        document.getElementById("apply_btn").addEventListener('click',function(){
            const Promo_code_name = document.getElementById("code_btn").innerText
            const promo_field_text = document.getElementById("promo_field")
            if(promo_field_text.value === Promo_code_name){
                const Discount = document.getElementById("discountPrice")
                const Get_discount_balance = (20/100) * Total_price.innerText
                Discount.innerText = Get_discount_balance.toFixed(2)
                const a = Total_price.innerText - Get_discount_balance
                FinalPayment_balance.innerText = a.toFixed(2)
            }
        })
    }

    const remove_item = document.getElementById("display_div")
    remove_item.innerHTML = ''
    const ItemName = value.childNodes[5].innerText
    const display_name = document.getElementById("selected_items")
    const createNewElement = document.createElement('div')
    serial+= 1
    createNewElement.innerHTML = `<p  class="text-black font-medium text-base">${serial} .  ${ItemName}</p>`
    //const ItemName = value.childNodes[5].innerText
    //createNewElement.innerText = ItemName
    display_name.appendChild(createNewElement)

}

function Gohome(){
    window.location.href = "index.html"
}
