let readJeopardData = async () => {
    let rawJeopardyData = await fetch('jeopardy.json');
    let data = await rawJeopardyData.json();
    console.log(data)

    let groupedDataValue = _.groupBy(data,'value')
    let q100 = shuffle(groupedDataValue.$100)
    let q200 = shuffle(groupedDataValue.$200)
    let q300 = shuffle(groupedDataValue.$300)
    let q400 = shuffle(groupedDataValue.$400)
    let q500 = shuffle(groupedDataValue.$500)
    let q600 = shuffle(groupedDataValue.$600)
    
    let scoreNumber = 0

    

// let qnum = [q100,q200,q300,q400,q500,q600]


let multiButtons = ['#button-100','#button-101','#button-102','#button-103','#button-104','#button-105'
,'#button-200','#button-201','#button-202','#button-203','#button-204','#button-205'
,'#button-300','#button-301','#button-302','#button-303','#button-304','#button-305'
,'#button-400','#button-401','#button-402','#button-403','#button-404','#button-405'
,'#button-500','#button-501','#button-502','#button-503','#button-504','#button-505'
,'#button-600','#button-601','#button-602','#button-603','#button-604','#button-605']



score.innerText = 0

function buttonClick(button){
    for (let i = 0; i < button.length; i++) {
        document.querySelectorAll(button)[i].addEventListener("click", function(e){ 

        paraQ.innerText = switches(button[i])[i].question
        paraA = switches(button[i])[i].answer
        paraV.innerText = switches(button[i])[i].value  

        console.log(paraA.innerText)
        console.log(paraA.innert =switches(button[i])[i].answer)
        });
    }
}
    buttonClick(multiButtons)

    
    

    submitForm.addEventListener('submit',(event) =>{
    event.preventDefault()
    
    if(answerText.value === paraA){
        alert('correct') 


        scoreNumber += parseInt(paraV.innerText.substring(1)) 
        score.innerText = scoreNumber

        console.log(scoreNumber)
        console.log("correct")
    }else {
        alert('incorrect \n' ) 
        
        console.log('Incorrect')
    }

    
    answerText.value = ''
    paraA.innerText = ''
    paraQ.innerText = ''
    paraV.innerText = ''
    })

   
    // function buttonClicked(button){
    //     button.setAttribute('disabled','disabled')
    //     button.classList.remove('btn-primary')
    //     button.classList.add('btn-secondary')
    // }





function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  shuffle()

function switches(button){
    let number = button.charAt(8)
switch (number) {
    case '1':
        return q100;
    case '2':
        return q200;
    case '3':
        return q300;
    case '4':
        return q400;
    case '5':
        return q500;
    case '6':
        return q600;
    default: break;
}
}

switches()

}
 
readJeopardData() 
let paraQ = document.querySelector("#question")
let paraA = document.querySelector("#answer")
let paraV = document.querySelector('#value')
let score = document.querySelector('#score')
let submit = document.querySelector('#submit')
let answerText = document.querySelector('#answerText')
let submitForm = document.querySelector('#submitform')

