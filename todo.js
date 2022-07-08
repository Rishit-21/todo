let heading=document.querySelector('.heading');
let box = document.querySelector('.box');
let text= document.querySelector('.text');
let  boxBtn = document.querySelector('.box-btn');
let taskList= document.querySelector('.taskList');
let taskName = document.querySelector('.taskName');
let check =document.querySelector('.check')

let checkC = document.querySelector('.check-c');
let editBox = document.querySelector('span');
let edit_btn = document.querySelector('.edit');
let deletee_btn = document.querySelector('.delete');





let allOther= document.querySelector('.allOther');
let add_btn = document.querySelector('.add-btn');
let search_btn = document.querySelector('.search-btn');

let action_btn = document.querySelector('.action-btn')
let action = document.querySelector('.actionS')
let select = document.querySelector('.select')
let unSelect = document.querySelector('.un-select')
let deleteSelected = document.querySelector('.deletedselect')




let sort = document.querySelector('.sort')
let a_z = document.querySelector('.A-Z')
let z_a = document.querySelector('.Z-A')
let newest = document.querySelector('.newest')
let oldest = document.querySelector('.oldest')


let btn_0=document.querySelector('.btn--0');
let btn_1=document.querySelector('.btn--1');
let btn_2=document.querySelector('.btn--2');
let  active

let taskArray=[];
let array=[]
taskList.innerHTML = '';
document.querySelector('.taskmain').innerHTML = '';
let cChecked=check
let input
const displayTask=function(taskArray){
    document.querySelector('.taskmain').innerHTML = '';
    taskArray.forEach(item=>{
        console.log(item)
        const html=`
        <div class="taskList">
        <div class = 'taskName'>
            <input type="checkbox" class="check" onclick=checks(item.id) >${item.name} 
            <span><input type="textbox" value="${item.name}"></span> 
        </div>
        <div class="edits">
            <button class="edit"><img src="edit.svg" alt="edit" class="editIcon"></button>
            <button class="delete"><i class="fa-solid fa-delete-left deletebtn"></i></button>
        </div>`
        document.querySelector('.taskmain').insertAdjacentHTML('beforeend',html);
    })
}


add_btn.addEventListener('click',function(){
    active=0
    add_btn.classList.add('btn--active')
    search_btn.classList.remove('btn--active')
    box.style.display='block'
})
search_btn.addEventListener('click',function(){
    active=1;
    add_btn.classList.remove('btn--active')
    search_btn.classList.add('btn--active')
    //box.style.display='block'
})

function checks(i){
    taskArray.forEach(el=>{
        if(el.id==i){
            if(!el.cCheck){
                check.checked=true;
                el.cCheck=true;
                
            }
            else{
                check.checked=false;
                el.cCheck=false;
            }

        }
        console.log(taskArray)
    })
}

const add = function(){
    input=text.value;
    let checked = false
    input=input.trim()
    if(input){
        taskArray.push({id:Math.trunc(Math.random()*1000),name:input,cCheck:checked})
        console.log(taskArray)
        displayTask(taskArray)
    }
    console.log(taskArray)
}
const search =function(){
    input=text.value
    input=input.toLowerCase()
    const searched = taskArray.filter(el=>el.name==input)
        displayTask(searched)
        console.log(searched)
    
}
//add(taskArray)

// boxBtn.addEventListener('click',function(){
    boxBtn.addEventListener('keyup',function(e){
        if(e.key=='Enter'){
            if(active==0){
                console.log("active=0")
                add(taskArray);
                text.value='';
            }
            else if(active==1){
                search();
            }
        }
    })
// })

