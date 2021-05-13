const image_1 = document.getElementsByClassName('image_1')[0];
const image_2 = document.getElementsByClassName('image_2')[0];
const image_3 = document.getElementsByClassName('image_3')[0];
const images_box = [image_1, image_2, image_3];
const bullet = document.getElementsByTagName('span');
const index = images_box.length - 1;
let slide = 0;

/*the function bellow is responsable to do the selected bullet's color change and the change of
image showed on the screen*/
function slideBullet(i){
    for(x = 0; x <= index; x++){
        bullet[x].className = bullet[x].className.replace('active', '');
        images_box[x].className = images_box[x].className.replace(' show fade','');
    }

    bullet[i].className+='active';
    images_box[i].className+=' show fade';
}

/*the function bellow is responsable to call the function slideBullet, that makes the change of
image showed on screen and also the bullet's color correspondent to it, once the function
bellow is called the function slideBullet happens to be called automactly every 2 seconds and middle
*/
function sliderOn(slide){
    slideStart = setInterval(()=>{
        slideBullet(slide);
            if(slide < index){
                slide++;
                }else{
                slide = 0;
            }
    }, 2500);
}
sliderOn(slide);

/*bellow we have 2 loopings, the first looping that appears is responsable to add a click's event
to all bullets, the click will finish the slide change animation, and this event have another
looping inside it that is responsable to verify which image is been showing on screen, check
what image is with display different of none, when the image showed on screen is identified
its checked whats the index of next image and send this index to slideOn function when it is called
to restart the automatic change of slides  */ 
for(i = 0; i <= index; i++){
    bullet[i].addEventListener('click', ()=>{
        clearInterval(slideStart);

        for(i = 0; i <= index; i++){
            display = window.getComputedStyle(images_box[i]).getPropertyValue('display');
            if(display != 'none'){
                slide = i;
                slide < index ? slide++ : slide = 0;
                sliderOn(slide);
            }
        }
    });
}