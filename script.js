
const btns = document.querySelector(".col");

const share = Array.from(btns.children);
console.log(share)

const error = document.querySelector(".error");


let share_value;
share.forEach(btn=>{
    btn.addEventListener("click",function(){
        share.forEach((btn)=>{
            btn.classList.remove("active");
        })
        if(btn.id!="input-share"){
            let btn_value = btn.innerHTML.replace("%","");
            btn.classList.toggle("active");
                share_value = btn_value;
         }
        else{
            if(btn.style.backgroundColor != "hsl(172, 74%, 63%)"){
                error.classList.add("show");
            }
            btn_value = getinputshare();
            btn.addEventListener("click",function(){
                btn.classList.add("active-input");
                share_value = btn_value;
                error.classList.remove("show");
            })
        }  
    })
        
})


function getinputshare(){
    return document.getElementById("input-share").value;
}

function getbill(){
    let bill_value = document.getElementById("bill").value;
    return bill_value;
}


function getpeople(){
    let people_value = document.getElementById("people").value;
    return people_value;
}


const tip_perperson = document.getElementById("tip-amount");
const bill_perperson = document.getElementById("total-bill");

function tipcalculate(){
    let a = getbill();
    console.log(a);
    let b = share_value;
    console.log(b);
    let c = getpeople();
    console.log(c);
    let tip_amount = (a*b)/(100*c);
    console.log(tip_amount)

    let total_bill = (tip_amount+parseInt(a)/c);

    tip_perperson.innerHTML = "$"+tip_amount.toFixed(2);
    bill_perperson.innerHTML = "$"+total_bill.toFixed(2);
}

const reset = document.getElementById("reset");

reset.addEventListener("click",function(){
    if(reset.innerHTML!= "Calculate"){
        location.reload();
    }
    else{
        tipcalculate();
        reset.innerHTML = "Reset";
    }
})


