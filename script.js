let x = 0;
const mas = document.querySelectorAll('.mas')
const mark = document.querySelectorAll('.mark')
const taan = document.querySelector('#taan')
const marked = 'classList[1]'
console.log(taan.classList[0])
let s = true;
for (let i = 0; i < mas.length; i++) {
   


        mas[i].addEventListener('click', () => {
            console.log(i)
             if (s) {
            if (x % 2 === 0) {
                if (mark[i].classList[1] === 'batu' || mark[i].classList[1] === 'maru') {
                    console.log('は？？？')
                } else {
                    mark[i].classList.add('maru')
                    taan.textContent = '×のターン'
                    x++;
                }

            } else {
                if (mark[i].classList[1] === 'maru' || mark[i].classList[1] === 'batu') {
                    console.log('は？？？')

                } else {
                    mark[i].classList.add('batu')
                    taan.textContent = '〇のターン'
                    x++;
                }
            }


            if (
                (judgemaru(0) && judgemaru(1) && judgemaru(2)) ||
                (judgemaru(3) && judgemaru(4) && judgemaru(5)) ||
                (judgemaru(6) && judgemaru(7) && judgemaru(8)) ||
                (judgemaru(0) && judgemaru(3) && judgemaru(6)) ||
                (judgemaru(1) && judgemaru(4) && judgemaru(7)) ||
                (judgemaru(2) && judgemaru(5) && judgemaru(8)) ||
                (judgemaru(0) && judgemaru(4) && judgemaru(8)) ||
                (judgemaru(2) && judgemaru(4) && judgemaru(6))
            ) {

                taan.textContent = '〇の勝利です'
                s = false;
                console.log('はいおしまい！')
            }

            if (
                (judgebatu(0) && judgebatu(1) && judgebatu(2)) ||
                (judgebatu(3) && judgebatu(4) && judgebatu(5)) ||
                (judgebatu(6) && judgebatu(7) && judgebatu(8)) ||
                (judgebatu(0) && judgebatu(3) && judgebatu(6)) ||
                (judgebatu(1) && judgebatu(4) && judgebatu(7)) ||
                (judgebatu(2) && judgebatu(5) && judgebatu(8)) ||
                (judgebatu(0) && judgebatu(4) && judgebatu(8)) ||
                (judgebatu(2) && judgebatu(4) && judgebatu(6))
            ) {
                taan.textContent = '×の勝利です'
                s = false;
                console.log('はいおしまい！')
            }
            if (x === 9 && s) {
                taan.textContent = '引き分け！'
                s = false
            }
       } })
    
}


const judgemaru = (x,) => {
    return mark[x].classList[1] === 'maru'
}
const judgebatu = (x,) => {
    return mark[x].classList[1] === 'batu'
}

const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    console.log('押された')
    for (let i = 0; i < mark.length; i++) {
        mark[i].classList.remove('maru')
        mark[i].classList.remove('batu')
        console.log('リセット処理')
    }
    taan.textContent = '〇のターン'
    x = 0;
    s = true
})


