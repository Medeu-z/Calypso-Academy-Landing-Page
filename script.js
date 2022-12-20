const questionAnswer = [
    {"question": "Зачем проходить обучение?", "answer": "Даже самая прибыльная стратегия в руках, которые не правильно ее будут использовать, может приносить убыток. Мы создали курс, чтобы показать как торговать правильно и как увеличить свой доход. 150% это стартовая годовая доходность, а при правильном использовании доход может перевалить за 300%+."},
    {"question": "На курсе только о стратегии?", "answer": "Нет. Умение прогнозировать рынок в среднесрок и понимание законов финансовых рынков - это залог успеха в торговле. Мы передаем свой опыт и свое понимание рынков и способов прогнозирования. Именно этот фактор способствует увеличению дохода."},
    {"question": "Можно ли получить больше прибыли?", "answer": "Да. Правильное комбинирование стратегии в разных вариантах и в разных режимах биржи поможет вам увеличить прибыль. А изменение настроек в разные фазы рынка даст возможность вырастить депозит во много раз за следующий год."},
    {"question": "Можно ли торговать по стратегии без вашего обучения?", "answer": "Да, конечно. Но стоит понимать, что инвестиции в свое понимание рынка это главная инвестиция, которая обязательно окупится."},
    {"question": "Могу ли я получить убыток даже если пройду курс?", "answer": "Теоретически да. Если вы нарушите все рекомендации, поддадитесь эмоциям страха и жадности и не будуте применять полученную информацию, то вы можете потерять деньги. Но вероятность этого крайне мала."},
    {"question": "Будут ли домашние задания?", "answer": "Да. В первую очередь это практический курс на котором вы вначале изучаете теорию, а затем переходите к практике на реальных деньгах."},
    {"question": "Сколько времени займет обучение?", "answer": "Вы начнете торговать в первые 2 недели, а закончите обучение в течении месяца. Далее будет практика на реальных деньгах в рамках которой вы будете получать обратную связь от кураторов."},
    {"question": "Что делать, если я полный ноль?", "answer": "Записываться на курс, осваивать криптовалюты и начинать торговать по нашей стратегии."},
    {"question": "Реально ли это пассивный доход?", "answer": "Да. Вы запускаете робота и следите за его работой не чаще раза в неделю."},
    {"question": "Вы даете доступ в сообщество?", "answer": "Да, мы добавляем в закрытый канал всех учеников и пользователей, где делимся своими наработками и оказываем поддержку."},
];
const fourthPageImg = ["https://thumb.tildacdn.com/tild6635-3462-4435-a365-643038323164/-/resize/464x/-/format/webp/Frame_1000002116.png", 
                        "https://thumb.tildacdn.com/tild3536-3737-4539-b335-613362373161/-/resize/430x/-/format/webp/Frame_1000002117_1.png",
                        "https://thumb.tildacdn.com/tild3233-3336-4235-b539-663139666137/-/resize/464x/-/format/webp/Frame_1000002113.png",
                        "https://thumb.tildacdn.com/tild3866-3366-4630-b737-383566303733/-/resize/460x/-/format/webp/Frame_1000002115.png",
                        "https://thumb.tildacdn.com/tild3932-6265-4833-a139-633662383266/-/resize/464x/-/format/webp/Frame_1000002118.png"]
function openNavBar(){
    document.querySelector('.navMain').style.visibility = "visible";
    document.querySelector('.navMain-links').style.width = "300px";
    document.querySelector('#scrollOpenNav').style.display = "none";
}
function closeNavBar(){
    document.querySelector('.navMain-links').style.width = "0px";
    document.querySelector('.navMain').style.visibility = "hidden";
    document.querySelector('#scrollOpenNav').style.display = "block";

}
const onScroll = () => {

    const scroll = document.documentElement.scrollTop
    //console.log(scroll)
    if (scroll > 1350) {
        document.querySelector('#scrollOpenNav').style.visibility = "visible";
    } else {
        document.querySelector('#scrollOpenNav').style.visibility = "hidden";
    }

    let fourthPageImgImg = document.querySelector('.fourthPage-img-img');
    let fourthPageText= document.querySelector('.fourthPage-words-title');
    let fourthPageLamp = document.querySelector('.lamp');
    if(1800 > scroll && scroll >= 1750){
        fourthPageImgImg.style.content = "url(" +fourthPageImg[0] + ")";
        fourthPageLamp.style.display= "none";
        for(let i = 0; i < fourthPageText.children.length; i++){
            if(i != 0){fourthPageText.children[i].style.color = "#e0e0e0";}
            else{fourthPageText.children[i].style.color = "rgb(158,141,254)";}
        }
        
    }else if( 1850 > scroll && scroll >= 1800){
        fourthPageImgImg.style.content = "url(" +fourthPageImg[1] + ")";
        fourthPageLamp.style.display= "none";
        for(let i = 0; i < fourthPageText.children.length; i++){
            if(i != 1){fourthPageText.children[i].style.color = "#e0e0e0";}
            else{fourthPageText.children[i].style.color = "rgb(158,141,254)";}
        }
        
    }else if(1900 > scroll && scroll >= 1850){
        fourthPageImgImg.style.content = "url(" +fourthPageImg[2] + ")";
        fourthPageLamp.style.display= "none";
        for(let i = 0; i < fourthPageText.children.length; i++){
            if(i != 2){fourthPageText.children[i].style.color = "#e0e0e0";}
            else{fourthPageText.children[i].style.color = "rgb(158,141,254)";}
        }
       
    }else if(1950 > scroll && scroll >= 1900){
        fourthPageLamp.style.display= "none";
        fourthPageImgImg.style.content = "url(" +fourthPageImg[3] + ")";
        for(let i = 0; i < fourthPageText.children.length; i++){
            if(i != 3){fourthPageText.children[i].style.color = "#e0e0e0";}
            else{fourthPageText.children[i].style.color = "rgb(158,141,254)";}
        }
        
    }else if( 2000 > scroll && scroll >= 1950){
        fourthPageLamp.style.display= "none";
        fourthPageImgImg.style.content = "url(" +fourthPageImg[4] + ")";
        for(let i = 0; i < fourthPageText.children.length; i++){
            if(i != 4){fourthPageText.children[i].style.color = "#e0e0e0";}
            else{fourthPageText.children[i].style.color = "rgb(158,141,254)";}
        }
      
    }
}
window.addEventListener('scroll', onScroll);

function openContentFunction(div){
       
        if ( div.children[0].children[1].style.maxHeight){
            div.children[0].children[1].style.maxHeight = null;
            div.children[0].children[1].style.paddingTop = '0px';
            div.children[1].classList.add("rotateBack");      
            div.children[1].classList.remove("rotate");  
        } else {
            div.children[0].children[1].style.maxHeight = div.children[0].children[1].scrollHeight + "px";
            div.children[0].children[1].style.paddingTop = '30px';   
            div.children[1].classList.add("rotate");      
            div.children[1].classList.remove("rotateBack");      
        } 

}

document.addEventListener('DOMContentLoaded', processRows)
function processRows() {
    const thirteenthPage = document.querySelector(".thirteenthPage-content");
    for( i = 0; i < questionAnswer.length; i++ ){
            const card = document.createElement('div');
            card.classList.add('thirteenthPage-card');
            card.onclick = openContentFunction;
            card.setAttribute("onclick", "openContentFunction(this)");
                const cardQA = document.createElement('div');
                cardQA.classList.add('thirteenthPage-card-questionAnswer');
                

                    const cardQ = document.createElement('div');
                    cardQ.classList.add('thirteenthPage-card-question');
                    cardQ.innerHTML = (i+1) + "." + questionAnswer[i]["question"];

                    const cardA = document.createElement('div');
                    cardA.classList.add('thirteenthPage-card-answer');
                    cardA.innerHTML = questionAnswer[i]["answer"];
                    cardQA.append(cardQ,cardA);

                const cardIcon = document.createElement('div');
                cardIcon.classList.add('thirteenthPage-card-icon');
                    const icon = document.createElement('i');
                    icon.classList.add('bi');
                    icon.classList.add('bi-plus-lg');
                    cardIcon.append(icon);

                card.append(cardQA, cardIcon);

                thirteenthPage.append(card);
    }
}

function openModule(module){
    let modules = document.querySelector('.tenthPage-modules');
    let cards = document.querySelector('.tenthPage-modules-cards');
   
    for (let i = 0; i < modules.children.length; i++) {
       
        if(modules.children[i].classList.contains('tenthPage-module-selected')){
            modules.children[i].classList.remove("tenthPage-module-selected");
            modules.children[i].classList.add("tenthPage-module-notSelected");
        }  

        if(modules.children[i] == module){
            cards.children[i].classList.remove("card-hide");
            cards.children[i].classList.add("card-selected");
        }else{
            cards.children[i].classList.remove("card-selected");
            cards.children[i].classList.add("card-hide");
        }
    }
    module.classList.remove("tenthPage-module-notSelected");
    module.classList.add("tenthPage-module-selected");
}