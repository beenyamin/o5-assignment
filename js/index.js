
const discount =20;
const discountPrice = document.getElementById('discount'); 
const finalPrice = document.getElementById('total')

function itemClick(target){
    const selectItem = document.getElementById('selectItem')
    const itemName = (target.childNodes[3].innerText);
    const ol = document.createElement('ol');
    ol.innerText = itemName;
    selectItem.appendChild(ol);

    const itemPrice = (target.childNodes[5].innerText.split(" ")[0]);
    const priceNumber = parseFloat(itemPrice);


    const totalPrice = document.getElementById('totalPrice');
    const priceString = totalPrice.innerText;
    const priceTotal = parseFloat(priceString);


    const price = priceTotal + priceNumber ;

    totalPrice.innerText = price;
    finalPrice.innerText = price;




    if(price > 0) {
        makePurchaseButton.removeAttribute('disabled') 
    }

    if( price >= 200  ){

        applyCouponButton.removeAttribute('disabled')
       
    }



    document.getElementById('applyCouponButton').addEventListener('click', function(){
      
    const couponValue = document.getElementById('coupon')
    const coupon = couponValue.value;

    if ( "SELL200" != coupon ){
        alert('invalid Coupon')
        return
    }



    const discountFinal = price * discount/100;
    const totalFinal = price - discountFinal;

    discountPrice.innerText = discountFinal;
    finalPrice.innerText = totalFinal;



    })

    document.getElementById('goHomeButton').addEventListener('click', function(){

        discountPrice.innerText = 0;
        finalPrice.innerText = 0;
        totalPrice.innerText = 0;
        selectItem.innerHTML = "";
        applyCouponButton.setAttribute('disabled', true)
        makePurchaseButton.setAttribute('disabled', true)


    })

}
