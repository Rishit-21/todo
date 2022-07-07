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

let taskArray=[{}];
taskList.innerHTML = '';
document.querySelector('.taskmain').innerHTML = '';
let cChecked=check.checked;

let hTml=function(e){
    const html=`
    <div class="taskList">
        <div class = 'taskName'>
            <input type="checkbox">${e}<span><input type="textbox" value="${e}"></span> 
        </div>
        <div class="edits">
            <button class="edit"><img src="edit.svg" alt="edit" class="editIcon"></button>
            <button class="delete"><i class="fa-solid fa-delete-left deletebtn"></i></button>
        </div>
</div>`; 
document.querySelector('.taskmain').insertAdjacentHTML('beforeend',html);
}

const addEl =function(){
    var value1 = text.value;
    //console.log(text.value);
   value1= value1.trim()
   if(value1){
    
    taskArray.push({id:Math.trunc(Math.random()*1000),taskName:value1,cChecked:false});
    
        hTml(value1)
    //taskList.style.display='flex';
   }
    //console.log(taskArray)
}

const searchEl = function(){
    var value1 = text.value;
    //console.log(text.value);
   value1= value1.toLowerCase().trim()
    let searchitem= taskArray.map(el=>el.taskName==value1?value1:`No data found`)
    let filterItem = searchitem.filter(el=>el==value1)
    console.log(filterItem)
    if(filterItem.includes(value1)){
        value1='No Data Found'
    }
    else{
        value1=filterItem.join('')
    }
    console.log(searchitem)
    const html=`
    <div class="taskList">
        <div class = 'taskName'>
            <input type="checkbox">${value1}<span><input type="textbox" value="${value1}"></span> 
        </div>
        <div class="edits">
            <button class="edit"><img src="edit.svg" alt="edit" class="editIcon"></button>
            <button class="delete"><i class="fa-solid fa-delete-left deletebtn"></i></button>
        </div>
</div>`; 
console.log(searchitem)
    
    //hTml(searchitem)

document.querySelector('.taskmain').innerHTML=html;
}


add_btn.addEventListener('click',function(e){
   //e=0

    active=0;
    add_btn.classList.add('btn--active')
    search_btn.classList.remove('btn--active')    
    // e.preventDefault()
    box.style.display='block';

})


search_btn.addEventListener('click',function(e){
    active=1
    search_btn.classList.add('btn--active');
    add_btn.classList.remove('btn--active');
   
    // value1=text.value
    // if(taskArray.includes(value1)){

    // document.querySelector('.taskmain').insertAdjacentHTML('beforeend',html);

    // }
    
})




boxBtn.addEventListener('click',function(){
    console.log(active)
    boxBtn.addEventListener('keydown' ,function(e){
        // e.preventDefault();
        if(active==0){
            if(e.key==='Enter'){
                addEl();
              
        
            }
        }
            else{
                if(e.key==='Enter'){

                    searchEl()
                }
            }
            text.value=''
        })
})



