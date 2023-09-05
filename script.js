const gallery=document.getElementsByClassName('image-gallery');
const popUp=document.getElementById('popUp');
for(let i=0;i<gallery.length;i++){
    gallery[i].addEventListener('click',()=>{
        popUp.style.display='block';
    });
}
popUp.onclick= ()=>{
    popUp.style.display='none';
}