const product = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        amount: 0,
        kkal: 200,
        get Summ() {
            return this.amount * this.price
        },
        get KkalSum() {
            return this.amount * this.kkal
        }
    },
    freshBurger: {
        name: 'GAMBURGER FRESH',
        price: 20500,
        amount: 0,
        kkal: 300,
        get Summ() {
            return this.amount * this.price
        },
        get KkalSum() {
            return this.amount * this.kkal
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        amount: 0,
        kkal: 450,
        get Summ() {
            return this.amount * this.price
        },
        get KkalSum() {
            return this.amount * this.kkal
        }
    },
}

const plusOrMinus = document.querySelectorAll('.main__product-btn ')
for (let i = 0; i < plusOrMinus.length; i++) {
    plusOrMinus[i].addEventListener('click', function () {
        func(this)
    })
}
function func(element) {
    let parent = element.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        num = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price'),
        kkal = parent.querySelector('.main__product-kcall'),
        attribute = element.getAttribute('data-symbol')
    if (attribute == '+' && product[parentId].amount < 10) {
        product[parentId].amount++
    }
    else if (attribute == '-' && product[parentId].amount > 0) {
        product[parentId].amount--
    }
    num.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].Summ
    kkal.innerHTML = product[parentId].KkalSum
}

const timer = document.querySelector('.header__timer-extra'),
    lvl = document.querySelector('.header__timer')
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function color() {
    let r = random(0, 255)
    let g = random(0, 255)
    let b = random(0, 255)
    return "rgb(" + r + "," + g + "," + b + ")"
}

function time() {
    if (timer.innerHTML < 80) {
        timer.innerHTML++
        lvl.style.color = color()
        setTimeout(() => {
            time()
        }, 30);
    } else if (timer.innerHTML < 100) {
        timer.innerHTML++
        lvl.style.color = color()
        setTimeout(() => {
            time()
        }, 100);
    }
}
time()

const info = document.querySelectorAll('.main__product-info'),
    view__close = document.querySelector('.view__close'),
    view = document.querySelector('.view')
for (let i = 0; i < info.length; i++) {
    info[i].addEventListener('dblclick', function () {
        view.classList.add('active')
        click(this)
    })
}

function click(el) {
    const parent = el.closest('.main__product'),
        classImg = parent.querySelector('.main__product-img'),
        imgAtt = classImg.getAttribute('src'),
        viewImg = document.querySelector('.view img')
    viewImg.setAttribute('src', imgAtt)
}
view__close.addEventListener('click', () => {
    view.classList.remove('active')
})


const addCart = document.querySelector('.addCart'),
    receipt = document.querySelector('.receipt'),
    receiptWindow = document.querySelector('.receipt__window'),
    receiptWindowOut = document.querySelector('.receipt__window-out'),
    receiptWindowBtn = document.querySelector('.receipt__window-btn'),
    notChosen = document.querySelector('.unactive')

addCart.addEventListener('click', function () {
   
   
    receipt.style = `display:block`
    setTimeout(() => {
        receipt.style.opacity = '1'
        receiptWindow.style = `top:15%;`
    }, 100);
    const bought = Object.values(product).filter(index=> index.amount )
    let total = ''
    let delievery = ''
    let itog = 0

    for (let i = 0; i < bought.length; i++) {
        if (bought[i].amount > 0) {
            total += `    
            <div class="receipt_product">
           <span>${i + 1}</span>
           <div class="receipt_name">${bought[i].name}</div>
           <div class="receipt_amount">${bought[i].amount} X ${bought[i].price}</div>
           <div class="receipt__total">= ${bought[i].Summ}</div>
           <div class="receipt_KkalSumm"> = ${bought[i].KkalSum} Kkal</div>

           </div>`


           itog += bought[i].Summ
           
        }
    }
    
    delievery = `
    <h3 class="free"> Доставка бесплатная - вы наш сотый клиент!</h3>
    `
   if ( itog > 0) {
    receiptWindowOut.innerHTML = `${total} <h4 class="itog">Итоговая сумма:  ${itog} summ<\h4> \n ${delievery}`
  
   }


})




function reloadConfirm() {
        window.location.reload();
        
   
}