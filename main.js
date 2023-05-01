let toggle = document.querySelectorAll(".pick-child")
let toggle2 = document.querySelectorAll(".p-2-check")
let toggleParent = document.querySelector(".selections")


if (document.querySelector(`input[type='radio']:checked`)){
    toggle2[0].style.backgroundColor = "hsl(217, 100%, 97%)"
}

for (let i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener("click",()=>{
        if (document.querySelector(`input[name='one']:checked`)){
            toggle[i].style.backgroundColor = "hsl(217, 100%, 97%)"
        } else if (document.querySelector(`input[name='one']`)) {
            toggle[i].style.backgroundColor = "white"
        }
    });





}
toggle2[0].addEventListener("click",()=>{
    if (document.querySelector(`input[type='radio']:checked`)){
        toggle2[2].style.backgroundColor = "white"
        toggle2[2].style.border = "1px solid #ddd"

        toggle2[1].style.backgroundColor = "white"
        toggle2[1].style.border = "1px solid #ddd"

        toggle2[0].style.backgroundColor = "hsl(217, 100%, 97%)"
        toggle2[0].style.border = "1px solid hsl(243, 100%, 62%)"
    } 
});
toggle2[1].addEventListener("click",()=>{
    if (document.querySelector(`input[type='radio']:checked`)){
        toggle2[2].style.backgroundColor = "white"
        toggle2[2].style.border = "1px solid #ddd"

        toggle2[0].style.backgroundColor = "white"
        toggle2[0].style.border = "1px solid #ddd"

        toggle2[1].style.backgroundColor = "hsl(217, 100%, 97%)"
        toggle2[1].style.border = "1px solid hsl(243, 100%, 62%)"
    }
});
toggle2[2].addEventListener("click",()=>{
    if (document.querySelector(`input[type='radio']:checked`)){
        toggle2[1].style.backgroundColor = "white"
        toggle2[1].style.border = "1px solid #ddd"

        toggle2[0].style.backgroundColor = "white"
        toggle2[0].style.border = "1px solid #ddd"

        toggle2[2].style.backgroundColor = "hsl(217, 100%, 97%)"
        toggle2[2].style.border = "1px solid hsl(243, 100%, 62%)"
    }
});
// checkbox toggle





let sideNumbers= document.getElementById("side").children
let contentChild = document.querySelector(".content")
let nextBtn = document.getElementById("next")
let backBtn = document.getElementById("back")
let inputs = document.querySelectorAll(".input input")

let countNextBtn = 0




for (let p = 0; p < contentChild.children.length; p++) {
    contentChild.children[p].style.display = 'none'
    }


// contentChild.appendChild(contentChild.children[countNextBtn])




contentChild.children[0].style.display = 'flex'
nextBtn.addEventListener("click",(e)=>{
    e.preventDefault()


    for (let a = 0; a < 3; a++) {
        // console.log(inputs[a].value)
        if (inputs[a].value == "") {
        let errorInp = document.createElement("label")
    errorInp.className = "error-field"
    errorInp.innerHTML = "This Field Is Required"
            errorInp.setAttribute("for",inputs[a].id)
            document.querySelectorAll(".labels")[a].append(errorInp)
            if (document.querySelectorAll(".labels")[a].children.length > 2) {
                document.querySelectorAll(".labels")[a].lastChild.remove()
            }
            backBtn.onclick(false)
        }

    }

    countNextBtn += 1

    if (countNextBtn > 3) {
        document.querySelector(".btns").style.display = "none"
        contentChild.children[4].style.display = "flex"
        contentChild.children[3].style.display = "none"
        } else{
        document.querySelector(".btns").style.display = "flex"
        }


    
    if (countNextBtn == 3) {
        nextBtn.textContent = "confirm"
        nextBtn.style.backgroundColor = "hsl(243, 100%, 62%)"
    } else{
        nextBtn.textContent = "Next Step"
        nextBtn.style.backgroundColor = "hsl(213, 96%, 18%)"
    }
    

    if (countNextBtn == 0) {
        backBtn.style.display = "none"
    }else{
        backBtn.style.display = "inline"
    }




    if (countNextBtn === 4){
        countNextBtn = 4
    }else{
        countNextBtn
    }
    sideNumbers[countNextBtn].children[0].classList.add("active-num")
    for (let i = 0; i < sideNumbers.length; i++) {
        sideNumbers[i].children[0].classList.remove("active-num") - sideNumbers[countNextBtn].children[0].classList.add("active-num")
    }
    for (let l = 0; l < contentChild.children.length; l++) {
        contentChild.children[l].style.display = 'none';
        contentChild.children[countNextBtn].style.display = 'flex'
        }
})





backBtn.addEventListener("click",()=>{
    

    countNextBtn -= 1


    if (countNextBtn > 3) {
        document.querySelector(".btns").style.display = "none"
        contentChild.children[4].style.display = "flex"
        contentChild.children[3].style.display = "none"
        } else{
        document.querySelector(".btns").style.display = "flex"
        }

    if (countNextBtn == 3) {
        nextBtn.textContent = "confirm"
        nextBtn.style.backgroundColor = "hsl(243, 100%, 62%)"
    } else{
        nextBtn.textContent = "Next Step"
        nextBtn.style.backgroundColor = "hsl(213, 96%, 18%)"
    }
    


    if (countNextBtn == 0) {
        backBtn.style.display = "none"
    }else{
        backBtn.style.display = "inline"
    }



    if (countNextBtn === 0){
        countNextBtn = 0
    } else{
        countNextBtn
    }

    sideNumbers[countNextBtn].children[0].classList.add("active-num")
    for (let i = 0; i < sideNumbers.length; i++) {
        sideNumbers[i].children[0].classList.remove("active-num") - sideNumbers[countNextBtn].children[0].classList.add("active-num")
    }
    for (let l = 0; l < contentChild.children.length; l++) {
        contentChild.children[l].style.display = 'none';
        contentChild.children[countNextBtn].style.display = 'flex'
        }
})

if (countNextBtn == 0) {
    backBtn.style.display = "none"
}else{
    backBtn.style.display = "inline"
}


if (countNextBtn == 3) {
    nextBtn.textContent = "confirm"
    nextBtn.style.backgroundColor = "hsl(243, 100%, 62%)"
} else{
    nextBtn.textContent = "Next Step"
    nextBtn.style.backgroundColor = "hsl(213, 96%, 18%)"
}


if (countNextBtn > 3) {
    document.querySelector(".btns").style.display = "none"
    contentChild.children[3].style.display = "flex"
    contentChild.children[4].style.display = "none"
    } else{
    document.querySelector(".btns").style.display = "flex"
    }












let ll = document.getElementById("tel")
ll.addEventListener("input",()=>{ 
        ll.value = ll.value.replaceAll(/[a-z]/ig,"")
})









// monthly yearly checkbox


let MYCheck = document.getElementById("checkID")
let labelMo = document.querySelector(".mo")
let prices = document.querySelectorAll(".prices .cost")
let checkMore = document.querySelectorAll(".pick-child .checkmore")
labelMo.style.color = "hsl(213, 96%, 18%)"

let freeMon = document.querySelectorAll(".freeMon")


MYCheck.addEventListener("input",()=>{


    if (MYCheck.checked == false) {
        labelMo.style.color = "hsl(213, 96%, 18%)"
        prices[0].innerHTML = `$9/mo`
        prices[1].innerHTML = `$12/mo`
        prices[2].innerHTML = `$15/mo`

        for (let q = 0; q < freeMon.length; q++) {
            freeMon[q].style.display = "none"
        }


        checkMore[0].innerHTML = `$1/mo`
        checkMore[1].innerHTML = `$2/mo`
        checkMore[2].innerHTML = `$2/mo`
    } else{
        labelMo.style.color = "hsl(231, 11%, 63%)"
        prices[0].innerHTML = `$90/yr`
        prices[1].innerHTML = `$120/yr`
        prices[2].innerHTML = `$150/yr`

for (let e = 0; e < freeMon.length; e++) {
    freeMon[e].style.display = "block"
}



        checkMore[0].innerHTML = `$10/yr`
        checkMore[1].innerHTML = `$20/yr`
        checkMore[2].innerHTML = `$20/yr`
    }
})