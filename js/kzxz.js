window.onload=function () {
    let hidd=document.querySelector('.hidden');
    let hea=document.querySelector('.header');
    let dc=document.querySelector('.cdtop')
    window.onscroll=function () {
        let tabs=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
        if(tabs>hea.offsetTop){
            animate(hidd,{top:0},200);
            dc.style.display='none';

        }
        else {
            animate(hidd,{top:-50},200);
            dc.style.display='block';
        }
    }
}