const sections = document.querySelectorAll('.section');

const navButtons = document.querySelectorAll('.navs');

const navigators = document.querySelectorAll('.navigators');

const allSections = document.querySelector('.mainContent');

function pageTransition() {
    //clicking active class
    for(let i = 0; i < navigators.length; i++){
        navigators[i].addEventListener('click', function(){
            let selectedButton = document.querySelectorAll('.active-btn');
            selectedButton[0].className = selectedButton[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //sections active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected
            navButtons.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}


pageTransition();