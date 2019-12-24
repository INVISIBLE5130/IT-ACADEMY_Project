let num = 0;
let images = ["img/women.png", "img/man.png"];

let elems = document.getElementsByTagName('img');
for(let i=0; i<elems.length; i++) elems[i].style.width='500px';

function next() {
    let slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    document.getElementById('slider').className === 'man' ? document.getElementById('slider').className = "women" :
    document.getElementById('slider').className = "man";
    
    slider.src = images[num];
}

function prev() {
    let slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    document.getElementById('slider').className === 'man' ? document.getElementById('slider').className = "women" :
    document.getElementById('slider').className = "man";
    
    slider.src = images[num];
};

$(window).scroll(function(){
	let scroll = $(window).scrollTop(),
	dh = $(document).height(),
	wh = $(window).height(),
	scrollPercent = (scroll / (dh-wh)) * 100;
	$('#progressbar').css('height', scrollPercent + '%');
})
