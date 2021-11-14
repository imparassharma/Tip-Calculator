
const btns = document.querySelector(".col");

const share = Array.from(btns.children);
console.log(share)



function getshare(){
    share.forEach((btn,index)=>{
        btn.addEventListener("click",function(){
            share.forEach((btn)=>{
                btn.classList.remove("active");
            })
            if(btn.id!="input-share"){
                var btn_value = btn.innerHTML.replace("%","");
                btn.classList.toggle("active");
                console.log(btn_value)
                return btn_value;
            }
            else{
                btn_value = getinputshare();
                btn.addEventListener("click",function(){
                    btn.classList.toggle("active-input");
                    console.log(btn_value)
                    return btn_value;
                })
            }
    
        })
    })
}


function getinputshare(){
    return document.getElementById("input-share").value;
}

function getbill(){
    var bill_value = document.getElementById("bill").value;
    console.log(bill_value)
    return bill_value;
}


function getpeople(){
    var people_value = document.getElementById("people").value;
    console.log(people_value)
    return people_value;
}



function tipcalculate(){
    var a = getbill();
    var b = getshare();
    var c = getpeople();
    var tip_amount = (a*b)/(100*c);
    console.log(tip_amount)
}

const reset = document.getElementById("reset");

reset.addEventListener("click",function(){
    tipcalculate();
})

