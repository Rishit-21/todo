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


let btn_0=document.querySelector('.all-a-btn');
let btn_1=document.querySelector('.active-a-btn');
let btn_2=document.querySelector('.completed-a-btn');
let  active
let task=[]
let taskArray=[];
let ids=0
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
            <input type="checkbox" class="check" ${item.checked ? 'checked':""} onclick=checks(${item.id}) >${item.name} 
            <span class='editss'><input type="textbox" class = 'texts' value="${item.name}"></span> 
        </div>
        <div class="edits">
            <button class="edit" onclick=edits(${item.id})><img src="edit.svg" alt="edit" class="editIcon"></button>
            <button class="delete" onclick=deletes(${item.id})><i class="fa-solid fa-delete-left deletebtn"></i></button>
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
    const index = taskArray.findIndex(x=> x.id ===i)
    taskArray[index].checked=!taskArray[index].checked
        console.log(taskArray)  
}

function deletes(i){
    taskArray=taskArray.filter(el=>el.id!==i)
    displayTask(taskArray)
}
function edits(i){
    console.log("aass")
    document.querySelector('.editss').style.display='block';
    taskName.style.display='none';
    //displayTask(taskArray)

}

const add = function(){
    input=text.value;
    let checked = false
    input=input.trim()
    if(input){
        taskArray.push({id:++ids,name:input,checked:false})
        console.log(taskArray)
        displayTask(taskArray)
    }
    console.log(taskArray)
}
const search =function(){
    input=text.value
    input=input.toLowerCase()
    const searched = taskArray.filter(el=>el.name==input)
    check.checked=true
    displayTask(searched)
   
        console.log(searched)    
}
sort.addEventListener('click',function(){
    let c
    let sorting = sort.options[sort.selectedIndex].value;
    console.log(sorting)
    switch(sorting){
        case "A-Z":
           task= taskArray.slice().sort((a,b)=>{
            if(a.name<b.name){
                return -1
            }
            else if(a.name>b.name){
                return 1
            }
            else{
                return 0

            }
           })
            displayTask(task)
            console.log(task)
            console.log(taskArray)
            break;
        case 'Z-A':
            task=taskArray.slice().sort((a,b)=>{
                if(b.name<a.name){
                    return -1
                }
                else if(b.name>a.name){
                    return 1
                }
                else{
                    return 0
    
                }
            });
            displayTask(task);
            break;
        case 'newest':
            task = taskArray.slice().sort((a,b)=>{
            return b.id-a.id
            })
            displayTask(task)
            break;
        case "oldest":

                task=taskArray.slice().sort((a,b)=>a.id-b.id)
                displayTask(task)
                break;
            

    }
})

action.addEventListener('click',function(){
    let actions=action.options[action.selectedIndex].value;
    console.log(actions)
    switch(actions){
        case "selectAll":
            taskArray.forEach(el=>{
                el.checked=true
            })
            displayTask(taskArray)
            console.log(taskArray)
            break;
        case 'unselectAll':
            taskArray.forEach(el=>{
                el.checked=false
            })
            displayTask(taskArray)
            console.log(taskArray)
            break;
        case "deselectAll":
            taskArray=taskArray.filter(el=>el.checked==false)
            displayTask(taskArray)
            console.log(taskArray)
            break;


    }
})

btn_0.addEventListener('click',function(){
    console.log('0')
    btn_0.classList.add('btn--active')
    btn_1.classList.remove('btn--active')
    btn_2.classList.remove('btn--active')
    console.log(taskArray)
    displayTask(taskArray)
})
btn_1.addEventListener('click',function(){
    console.log('1')
    btn_0.classList.remove('btn--active')
    btn_1.classList.add('btn--active')
    btn_2.classList.remove('btn--active')
    
    array=taskArray.filter(el=>el.checked==false)
    console.log(array)
    displayTask(array)

})
btn_2.addEventListener('click',function(){
    btn_0.classList.remove('btn--active')
    btn_1.classList.remove('btn--active')
    btn_2.classList.add('btn--active')

    array=taskArray.filter(el=>el.checked==true);
    displayTask(array)
    console.log(array)
})


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


