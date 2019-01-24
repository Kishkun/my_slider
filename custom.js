let hover = document.querySelectorAll('.hover');
let interval;
let index;
let current;
let isBusy = false;

console.log(hover);

function classExist(classStr) {
    if(current.classList.contains(classStr)){
        return true;
    }
    return false;
}


function deleteInterval(classStr,delclass) {
    current.classList.remove(delclass);
    current.classList.add(classStr);
    interval = setTimeout(function () {
        console.log(current);
        current.classList.remove(classStr);
        current.childNodes[1].style.display = "none";
        current = null;
    },500);


}

function clearActiveElement() {
    if(classExist('right-bottom')){
        deleteInterval('right-bottom-unhover','right-bottom-hover');

    }
    else if(classExist('right-top')){
        deleteInterval('right-top-unhover','right-top-hover');
    }
    else if(classExist('left-bottom')){
        deleteInterval('left-bottom-unhover','left-bottom-hover');
    }
    else if(classExist('left-top')){
        deleteInterval('left-top-unhover','right-top-hover');
    }
    else if(classExist('center')){
        deleteInterval('center-unhover','center-hover');

    }
    else if(classExist('one-image')){
        deleteInterval('index','center-hover');

    }
    else if(classExist('left-image')){
        deleteInterval('center-unhover-left','left-hover');

    }
    else if(classExist('right-image')){
        deleteInterval('center-unhover-right','right-hover');

    }
    else if(classExist('left-free')){
        deleteInterval('unhover-left','hover-left');

    }
    else if(classExist('right-free')){
        deleteInterval('unhover-right','hover-right');

    }



    else if(classExist('left-top-four')){
        deleteInterval('left-top-four-unhover','left-top-four-hover');

    }
    else if(classExist('left-bottom-four')){
        deleteInterval('left-bottom-four-unhover','left-bottom-four-hover');

    }
    else if(classExist('right-top-four')){
        deleteInterval('right-top-four-unhover','right-top-four-hover');
    }
    else if(classExist('right-bottom-four')){
        deleteInterval('right-bottom-four-unhover','right-bottom-four-hover');

    }
}


function addHover() {
    if(classExist('right-bottom')){
        current.classList.add('right-bottom-hover');

    }
    else if(classExist('right-top')){
        current.classList.add('right-top-hover');
    }
    else if(classExist('left-bottom')){
        current.classList.add('left-bottom-hover');
    }
    else if(classExist('left-top')){
        current.classList.add('left-top-hover');
    }
    else if(classExist('center')){
        current.classList.add('center-hover');

    }
    else if(classExist('one-image')){
        current.classList.add('center-hover');

    }
    else if(classExist('left-image')){
        current.classList.add('left-hover');

    }
    else if(classExist('right-image')){
        current.classList.add('right-hover');

    }
    else if(classExist('left-free')){
        current.classList.add('left-hover');

    }
    else if(classExist('right-free')){
        current.classList.add('right-hover');

    }




    else if(classExist('four-left-top-four')){
        current.classList.add('left-top-four');

    }
    else if(classExist('four-left-bottom-four')){
        current.classList.add('left-bottom-four');

    }
    else if(classExist('four-right-top-four')){
        current.classList.add('right-top-four');

    }
    else if(classExist('four-right-bottom-four')){
        current.classList.add('right-bottom-four');

    }
}


if(hover){
   hover.forEach((item)=>{
        window.clearInterval(interval);
        item.addEventListener("mouseenter",function (e) {

            if(current == null){
                current = e.currentTarget;
                console.log(current);
                addHover();
                setTimeout(function () {
                    current.childNodes[1].style.display = "block";
                },500);
            }
            else
            {
                return false;
            }
        });

        item.addEventListener("mouseleave",function (e) {
            clearActiveElement();
        });
    })

}










