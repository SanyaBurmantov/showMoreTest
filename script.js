const wrap = document.querySelector('[data-js=main]')

const firstText = wrap.innerText
let closedText = false


if(wrap.textContent.length > 350){
    closedText = true
    rerenderBlock()
}

function rerenderBlock(){
    const myBtn = document.createElement('button')
    if(closedText){
        wrap.innerText = wrap.innerText.slice(0, 140)+' ...'
        myBtn.textContent = 'нука покажи'
    } else {
        wrap.innerText =  firstText
        myBtn.textContent = 'Уберите это, боже'
    }
    wrap.appendChild(myBtn);
    myBtn.addEventListener('click', () => {
        closedText = !closedText
        rerenderBlock()

    })
}

