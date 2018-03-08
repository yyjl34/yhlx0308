window.onload=function () {
    let box=document.querySelector('.imgbox');
    let lis=document.querySelectorAll('.imgbox li');
    let btn=document.querySelectorAll('.crile .yuan');
    let n=0;
    function move() {
        n++;
        if(n>=lis.length){
            n=0;
        }
        lis.forEach(function (val,index) {
            val.classList.remove('active');
            btn[index].classList.remove('active');
        })
        lis[n].classList.add('active');
        btn[n].classList.add('active');
    }
    let t=setInterval(move,2000);
    box.onmouseenter=function () {
        clearInterval(t);
    }
    box.onmouseleave=function () {
        t=setInterval(move,2000);
    }






















}