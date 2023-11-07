const readMore = document.querySelector('.see-more-btn');
const all = document.querySelector('.all');

readMore.addEventListener('click',(e)=>{
    all.classList.toggle('show-more');

    if(readMore.innerHTML ==='See More'){
        readMore.innerHTML = 'See Less'
    }
    else{
        readMore.innerHTML ='See More';
    }
})


const readMore2 = document.querySelector('.see-more-btn-2');
const all2 = document.querySelector('.all-2');

readMore2.addEventListener('click',(e)=>{
    all2.classList.toggle('show-more');

    if(readMore2.innerHTML ==='See More'){
        readMore2.innerHTML = 'See Less'
    }
    else{
        readMore2.innerHTML ='See More';
    }
})