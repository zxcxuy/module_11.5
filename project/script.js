let slide_count = 1;
const btn_leftArrow = document.querySelector('#left_arrow_nav');
const btn_rightArrow = document.querySelector('#right_arrow_nav');
const btn_firstCircle = document.querySelector('#first_circle_btn');
const btn_secondCircle = document.querySelector('#center_circle_nav');
const btn_thirdCircle = document.querySelector('#third_circle_btn');
const svg_circle1 = document.querySelector('.first_circle');
const svg_circle2 = document.querySelector('.second_circle');
const svg_circle3 = document.querySelector('.third_circle');
const btn1_header__nav = document.querySelectorAll('.header__nav_link')[0];
const btn2_header__nav = document.querySelectorAll('.header__nav_link')[1];
const btn3_header__nav = document.querySelectorAll('.header__nav_link')[2];
const img1 = document.querySelectorAll('.slider_img')[0];
const img2 = document.querySelectorAll('.slider_img')[1];
const img3 = document.querySelectorAll('.slider_img')[2];
const characteristic_text1 = document.getElementsByClassName('characteristic__item_value')[0];
const characteristic_text2 = document.getElementsByClassName('characteristic__item_value')[1];
const characteristic_text3 = document.getElementsByClassName('characteristic__item_value')[2];
btn2_header__nav.addEventListener('click', (e) => {
    e.preventDefault();
    if(slide_count != 2){
        goToSecondSlide()
    }
})
btn1_header__nav.addEventListener('click', (e) => {
    e.preventDefault();
    if(slide_count != 1){
        goToFirstSlide()
    }
})
btn3_header__nav.addEventListener('click', (e) => {
    e.preventDefault();
    if(slide_count != 3){
        goToThirdSlide()
    }
})
btn_secondCircle.addEventListener('click', (e) => {
    e.preventDefault();
    if(slide_count != 2){
        goToSecondSlide()
    }
})
btn_firstCircle.addEventListener('click', (e) => {
    e.preventDefault();
    if(slide_count != 1){
        goToFirstSlide()
    }
})
btn_thirdCircle.addEventListener('click', (e) => {
    e.preventDefault();
    if(slide_count != 3){
        goToThirdSlide()
    }
})
btn_leftArrow.addEventListener('click', (e) => {
    e.preventDefault();
    slide_count -= 1;
    if(slide_count === 0){
        slide_count = 3
    }
    if(slide_count === 1){
        goToFirstSlide();
    }
    else if(slide_count === 2){
        goToSecondSlide();
    }
    else{
        goToThirdSlide();
    }
})
btn_rightArrow.addEventListener('click', (e) => {
    e.preventDefault();
    slide_count += 1;
    if(slide_count === 4){
        slide_count = 1
    }
    if(slide_count === 1){
        goToFirstSlide();
    }
    else if(slide_count === 2){
        goToSecondSlide();
    }
    else{
        goToThirdSlide();
    }
})
function goToSecondSlide(){
    img1.style.display = 'none';
    img3.style.display = 'none';
    img2.style.display = 'block';
    btn1_header__nav.classList.remove('active');
    btn3_header__nav.classList.remove('active');
    btn2_header__nav.classList.add('active');
    characteristic_text1.innerHTML = 'Sochi<br>Thieves';
    characteristic_text2.innerHTML = '105 m<sup>2</sup>';
    characteristic_text3.innerHTML = '4 months';
    svg_circle1.style.fillOpacity = '0.3';
    svg_circle2.style.fillOpacity = '1';
    svg_circle3.style.fillOpacity = '0.3';
    slide_count = 2;
}
function goToFirstSlide(){
    img1.style.display = 'block';
    img3.style.display = 'none';
    img2.style.display = 'none';
    btn1_header__nav.classList.add('active');
    btn3_header__nav.classList.remove('active');
    btn2_header__nav.classList.remove('active');
    characteristic_text1.innerHTML = 'Rostov-on-Don<br>LCD admiral';
    characteristic_text2.innerHTML = '81 m<sup>2</sup>';
    characteristic_text3.innerHTML = '3.5 months';
    svg_circle1.style.fillOpacity = '1';
    svg_circle2.style.fillOpacity = '0.3';
    svg_circle3.style.fillOpacity = '0.3';
    slide_count = 1;
}
function goToThirdSlide(){
    img1.style.display = 'none';
    img3.style.display = 'block';
    img2.style.display = 'none';
    btn1_header__nav.classList.remove('active');
    btn3_header__nav.classList.add('active');
    btn2_header__nav.classList.remove('active');
    characteristic_text1.innerHTML = 'Rostov-on-Don<br>Patriotic';
    characteristic_text2.innerHTML = '93 m<sup>2</sup>';
    characteristic_text3.innerHTML = '3 months';
    svg_circle1.style.fillOpacity = '0.3';
    svg_circle2.style.fillOpacity = '0.3';
    svg_circle3.style.fillOpacity = '1';
    slide_count = 3;
}