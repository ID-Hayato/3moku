let x=0;
const mas = document.querySelectorAll('.mas')
const mark = document.querySelectorAll('.mark')
const taan=document.querySelector('#taan')
for(let i=0;i<mas.length;i++){
mas[i].addEventListener('click',()=>{
    console.log(i)
    if(x%2===0){
     mark[i].classList.add('maru')
     taan.textContent='×のターン'
    }else{
     mark[i].classList.add('batu')
     taan.textContent='〇のターン'
    }
    x++;
})
}