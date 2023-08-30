const wrap = document.querySelector('[data-js=main]')
const hidder = document.querySelector('[data-js=loader]')
way1()
function way1() {
    const firstText = wrap.innerText;
    let closedText = false;

    if (wrap.textContent.length > 350) {
        closedText = true
        setTimeout(() => rerenderBlock(), 1000)
    }
    function rerenderBlock(){
        // const myBtn = document.createElement('button');
        // if(closedText){
        //     wrap.innerText = wrap.innerText.slice(0, 400) + ' ...'
        //     myBtn.textContent = 'нука покажи';
        // } else {
        //     wrap.innerText =  firstText
        //     myBtn.textContent = 'Уберите это, боже'
        // }
        // wrap.appendChild(myBtn);
        // myBtn.addEventListener('click', () => {
        //     closedText = !closedText
        //     rerenderBlock()
        // })
        hidder.classList.remove('test2')
        hidder.classList.add('test1')

        setTimeout(() => hidder.classList.add('height0'), 1000)
    }
}



