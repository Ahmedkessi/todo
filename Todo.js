
//===========================SCROLLING PAGES==========================================//

function showPage2(){
  const addIcon = document.querySelector('#page2');
  const removePage1 = document.querySelector('#page1');

  addIcon.style.display = 'block';
  removePage1.style.display = 'none';
}


function showPage1(){
  const xMark = document.querySelector('#page1');
  const removePage2 = document.querySelector('#page2');
  const removePage3 = document.querySelector("#page3");

  xMark.style.display = 'block';
  removePage2.style.display = 'none';
  removePage3.style.display = 'none';
}

// document.body.addEventListener('keydown', (event) => {
//   if (event.key === 'Backspace'){
//     showPage1();
//   }
// });

//=====================================================================//



const saver = JSON.parse(localStorage.getItem('task'));





//======================WORK===============================================//
const store = [
 ];

function addTask(){
  const page2InputText = document.querySelector('#page2Input');
  const page2InputDate = document.querySelector('#page2InputDate');

  const text = page2InputText.value;
  const time = page2InputDate.value;

  store.push({
    name: text,
    time:time,
  });

  page2InputText.value ='';
  page2InputDate.value = '';

  workAddTak();
  localStorage.setItem('task', JSON.stringify(store));
}


function key(event) {
  if(event.key === 'Enter'){
    addTask()
  }
};

function workAddTak() {
  key(event);
  let result = '';

  for(let i = 0; i < store.length; i++) {
    const storage = store[i];
    const name = storage.name;
    const time = storage.time;

    const html = `<div class="Line" id="Line">
                    <div><li style='list-style-type: circle;'>${name}</div>
                    <div>${time}</div>
                    <button
                    class='Deletebtn deleteWithEvent'>
                    Delete</button></li>
                    </div>`;

    result += html;
  }
  document.querySelector('#insPage1Main')
  .innerHTML = result;

  document.querySelectorAll('.deleteWithEvent')
    .forEach((Deletebtn, index)=>{
        Deletebtn.addEventListener('click', ()=>{
          store.splice(index, 1);
          workAddTak();
        })
    })



 
}



function darkMode(){
  const dark = document.querySelector("#page1Main");
  dark.innerHTML = 'da';

  if (dark.innerHTML === 'da'){
    dark.classList.add('page1MainDarkMode');
    dark.innerHTML = '';

  } else{
    dark.classList.add('page1Main');
    
  }

}
//==================================================================================================================================//










//===============================PAGE3==================================================================================================================================================//
  function page3(){
    const page = document.querySelector('#page3');
    page.style.left = '0px';
    page.style.display = 'block';
  }

  function logOut(){
    const logOut = document.querySelector('#logOut');
    const removePage1 = document.querySelector("#page1");
    const removePage2 = document.querySelector("#page2");
    

    logOut.style.display = 'block';
    removePage1.style.display = 'none';
    removePage2.style.display = 'none';
  }

  document.body.addEventListener('keydown', (event) => {
    if(event.key === 'Control' + 'a'){
      logOut();
    }
  })


  function sign(){
    
  const registPage = document.querySelector('#register');
    const logOut = document.querySelector('#logOut');
    setTimeout(function(){
      const removePag = document.querySelector("#page1");
      const removePagg = document.querySelector("#page2")
  
      logOut.style.display = 'none';
      registPage.style.display = 'block';
    }, 2000)
  
  }
//============================================================================================================================================//










//==========================Regiter==================================================================================================================//
function input(){
  const input = document.querySelector('.inputRegiter');
  const input1 = document.querySelector('.inputRegiter1');
  const input2 = document.querySelector('.inputRegiter2');
  const input3 = document.querySelector('.inputRegiter3');


  const registPage = document.querySelector('#register');
  const page1Show = document.querySelector("#page1");
  const load = document.querySelector('#load');


  const xMark = document.querySelector('.xMark');
  const xMark1 = document.querySelector(".xMark1");
  const xMark2 = document.querySelector(".xMark2");
  const xMark3 = document.querySelector(".xMark3");


  const tickMark = document.querySelector('.tickMark');
  const tickMark1 = document.querySelector('.tickMark1');
  const tickMark2 = document.querySelector('.tickMark2');
  const tickMark3 = document.querySelector('.tickMark3');


  const errorMessage = document.querySelector('.errorMessage');
  const errorMessage1 = document.querySelector('.errorMessage1');
  const errorMessage2 = document.querySelector('.errorMessage2');
  const errorMessage3 = document.querySelector('.errorMessage3');


  const successMessage = document.querySelector('.successMessage');
  const successMessage1 = document.querySelector('.successMessage1');
  const successMessage2 = document.querySelector('.successMessage2');
  const successMessage3 = document.querySelector('.successMessage3');

  const errorMatch = document.querySelector('.errorMessage33');

  

  




 



  if(input.value === ''){
    xMark.style.display = 'block';
    errorMessage.style.display = 'block';

    // tickMark.style.display = 'none';
    // successMessage.style.display = 'none';

  } else if (input1.value === ''){
    xMark1.style.display = 'block';
    errorMessage1.style.display = 'block';

    // tickMark1.style.display = 'none';
    // successMessage1.style.display = 'none';

  } else if(input2.value === ''){
    xMark2.style.display = 'block';
    errorMessage2.style.display = 'block';

    // tickMark2.style.display = 'none';
    // successMessage2.style.display = 'none';

  } else if(input3.value === '') {
    xMark3.style.display = 'block';
    errorMessage3.style.display = 'block';

    // tickMark3.style.display = 'none';
    // successMessage3.style.display = 'none';

  } else if(input3.value !== input2.value){
    errorMatch.style.display = 'block';
    errorMessage3.style.display = 'none';
  }
 

    
  else{

    load.style.display = 'block';

    setTimeout(() => {
      
      registPage.style.display = 'none';
      page1Show.style.display = 'block';
    }, 5000)

    errorMessage.style.display = 'none';
    xMark.style.display = 'none';

    errorMessage1.style.display = 'none';
    xMark1.style.display = 'none';

    errorMessage2.style.display = 'none';
    xMark2.style.display = 'none';

    errorMessage3.style.display = 'none';
    xMark3.style.display = 'none';

    errorMatch.style.display = 'none';      



    successMessage.style.display = 'block';
    tickMark.style.display = 'block';

    successMessage1.style.display = 'block';
    tickMark1.style.display = 'block';

    successMessage2.style.display = 'block';
    tickMark2.style.display = 'block';

    successMessage3.style.display = 'block';
    tickMark3.style.display = 'block';


  

 


    
    
  }

  
 


}

const btn = document.querySelector('.btnEvent');

// const btnEvent = ()=> {
//   input();
// }

// btn.removeEventListener('click', btnEvent);


btn.addEventListener('click', ()=> {
  input();
});

