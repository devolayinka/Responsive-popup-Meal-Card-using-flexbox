const allMeals=document.querySelector('.meals');
const modalOverlay=document.getElementById('preview-modal-overlay');
const modalCloseBtn= document.getElementById('modal-close-btn');

allMeals.addEventListener('click',showImg);
modalCloseBtn.addEventListener('click',()=>{
    modalOverlay.style.display="none";
});
function showImg(e){
    let mealDiv;
    if(e.target.classList.contains('fas')){
mealDiv=e.target.parentElement.parentElement;
    }
    else{
        mealDiv= e.target;
    }
    modalOverlay.querySelector('img').src = mealDiv.querySelector('img').src;
modalOverlay.style.display="block";
   // console.log(mealDiv);
}

