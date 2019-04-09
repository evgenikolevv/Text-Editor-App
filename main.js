 var editor = edit.document;
 editor.designMode = "on";



 
 const styleText = document.querySelector('#style-text');

 // style the fonts
 const fonts = document.querySelectorAll('select.font-change > option');
    for (let i = 0; i < fonts.length; i++){
        fonts[i].style.fontFamily = fonts[i].value;
}


//constants of buttons
const Bold = document.querySelector('.bold');
const Italic = document.querySelector('.italic');
const underline = document.querySelector('.underline');
const unorderedList = document.querySelector('.unordered-list');
const orderedList = document.querySelector('.ordered-list');
const alignLeft = document.querySelector('.align-left');
const alignCenter = document.querySelector('.align-center');
const alignRight = document.querySelector('.align-right');
const link = document.querySelector('.link');
const insertImage = document.querySelector('.image');
const fontColor = document.querySelector('.font-color');
const fontChange = document.querySelector('.font-change');
const fontSize = document.querySelector('.font-size');

Bold.addEventListener('click', function(){
    editor.execCommand('Bold', false,null);
    changeColor(Bold);
});

Italic.addEventListener('click', function(){
    editor.execCommand('Italic', false,null);
    changeColor(Italic);
});

underline.addEventListener('click', function(){
    editor.execCommand('Underline', false,null);
    changeColor(underline);
});

unorderedList.addEventListener('click',function(){
    editor.execCommand('InsertUnorderedList', false,"newOL");
    changeColor(unorderedList);
});


orderedList.addEventListener('click',function(){
    editor.execCommand('InsertOrderedList', false,"newOL" + Math.round(Math.random() * 1000));
    changeColor(orderedList);
});

alignLeft.addEventListener('click',function(){
    editor.execCommand('justifyLeft', false, null);
    changeColor(alignLeft);
});

alignCenter.addEventListener('click',function(){
    editor.execCommand('justifyCenter', false, null);
    changeColor(alignCenter);
});

alignRight.addEventListener('click',function(){
    editor.execCommand('justifyRight', false, null);
    changeColor(alignRight);
});

link.addEventListener('click', function(){
    let url = prompt("Enter a URL", "http://");
    editor.execCommand('CreateLink', false, url);
    changeColor(link);
});

insertImage.addEventListener('click', function(){
    let url = prompt("Enter a URL", "http://");
    editor.execCommand('InsertHTML', prompt('Insert Image', false, url));
    changeColor(insertImage);

});

fontColor.addEventListener('change', function(e){
    editor.execCommand('ForeColor', false, e.target.value);
});

fontChange.addEventListener('change',function(e){
    editor.execCommand('FontName', false ,e.target.value);
});

fontSize.addEventListener('change',function(e){
    editor.execCommand('FontSize', false ,e.target.value);
});


// change color of clicked buttons
function changeColor(e){

    if (e.classList.contains('clicked')){
        
        e.classList.remove('clicked');
        e.style.animation = `click 0.5s ease-in`;
    }else{
   e.classList.add('clicked');
   e.style.animation = `click 0.5s ease`;

    }

  
}



