let heading=document.querySelector('.heading');
let box = document.querySelector('.box');
let text= document.querySelector('.text');
let  boxBtn = document.querySelector('.box-btn');
let taskList= document.querySelector('.taskList');
let taskName = document.querySelector('.taskName');
let check =document.querySelector('.check')
let msg = document.querySelector('.message');

let checkC = document.querySelector('.check-c');
let editBox = document.querySelector('span');
let edit_btn = document.querySelector('.edit');
let deletee_btn = document.querySelector('.delete');

let c;



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
let editFlag = false
let currentId
let searched

let allbtn=0





const displayTask=function(taskArray){
    document.querySelector('.taskmain').innerHTML = '';
    if(taskArray.length===0){
        const nodatamsg = `<div class="message">No data found</div>`;
        document.querySelector('.taskmain').insertAdjacentHTML('beforeend',nodatamsg);
        // msg.style.display = "block";
    }
    else{
        // msg.style.display = "none";
        taskArray.forEach(item=>{
            //console.log(item)
            const html=`
            <div class="taskList">
            <div class = 'taskName'>
                <input type="checkbox" class="check" ${item.checked ? 'checked':""} onclick=checks(${item.id})>
                <div class='editss'>${editFlag && currentId==item.id ?`<input type="textbox" class = 'texts' value="${item.name}" onkeypress = editEnter(event)>`:item.name}</div> 
                 
            </div>
            <div class="edits">
                <button class="edit" onclick=edits(${item.id})><img src="edit.svg" alt="edit" class="editIcon"></button>
                <button class="delete" onclick=deletes(${item.id})><i class="fa-solid fa-delete-left deletebtn"></i></button>
            </div>`
    
            document.querySelector('.taskmain').insertAdjacentHTML('beforeend',html);
        })
    }
}
let tasks=[]


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

function main(){
    if(allbtn==0){
        tasks=taskArray
    }
    else if(allbtn==1){
        tasks=taskArray.filter(el=>el.checked==false)
    }
    else if(allbtn==2){
        tasks=taskArray.filter(el=>el.checked==true)
    }
    return tasks
    
}



function checks(i){
    const index = taskArray.findIndex(x=> x.id ===i)
    taskArray[index].checked=!taskArray[index].checked
        //console.log(taskArray) 
        //main() 

        if(taskArray[index].checked){
            console.log("hello")
            array=taskArray.filter(el=>el.checked==false)
            console.log(array)
            // displayTask(array)
            if(allbtn ==1){
                displayTask(array)
    
            }
            else{
                console.log('helllo')
                displayTask(taskArray)
            }
        }
        else if(taskArray[index].checked==false){
            if(allbtn==2){
                array=taskArray.filter(el=>el.checked==true);
                displayTask(array)

            }


        }
        if(task.length>0){
            if(task[index].checked){
                array=task.filter(el=>el.checked==false)
                console.log(array)
                displayTask(array)
            }   
        }
}

function deletes(i){
    taskArray=taskArray.filter(el=>el.id!==i)
    tasks=tasks.filter(el=>el.id!==i)
    //displayTask(tasks)
    sortings(tasks)
}
function edits(i){
    editFlag=true
    currentId=i
    displayTask(taskArray)

    console.log("aass")
    //document.querySelector('.editss').style.display='block';
    //taskName.style.display='none';
    //displayTask(taskArray)
}
function editEnter(e){
    if(e.key==='Enter'){
        const index = taskArray.findIndex(el=> el.id===currentId)
        taskArray[index].name=document.querySelector('.texts').value
        editFlag=false;
        currentId=0
        displayTask(taskArray)
    }
}

const add = function(){
    input=text.value;
    //let checked = false
    input=input.trim()
    if(input){
        taskArray.push({id:++ids,name:input,checked:false})
            console.log(taskArray)
            displayTask(taskArray)
        
      
    }
    console.log(taskArray)
    btn_0.classList.add('btn--active')
    btn_1.classList.remove('btn--active')
    btn_2.classList.remove('btn--active')
    allbtn=0
}
const search =function(){
    main()
    input=text.value
    input=input.toLowerCase()
    searched = tasks.filter(el=>el.name.toLowerCase().includes(input));
    //check.checked=true
    // if(searched.length!==0){
        // displayTask(searched)
    // }
    if(input==''){
        displayTask(tasks)
    }else {
        displayTask(searched)
    }
   
        console.log(searched)    
}
 function sortings(task){
    let sorting = sort.options[sort.selectedIndex].value;
    console.log(sorting)
    switch(sorting){
        case "A-Z":
            //sort.selectedIndex=0
           task= tasks.slice().sort((a,b)=>{
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
            //sort.selectedIndex=0
            task=tasks.slice().sort((a,b)=>{
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
            //sort.selectedIndex=0
            task = tasks.slice().sort((a,b)=>{
            return b.id-a.id
            })
            displayTask(task)
            break;
        case "oldest":
            // sort.selectedIndex=0

                task=tasks.slice().sort((a,b)=>a.id-b.id)
                displayTask(task)
                break;
        
            

    }
   //return task
 }







sort.addEventListener('click',function(){
    main()
     c=0
    sortings(tasks)
})



action.addEventListener('click',function(){
    main()
    let actions=action.options[action.selectedIndex].value;
    console.log(actions)

    switch(actions){
        case "selectAll":
            action.selectedIndex=0

            taskArray.forEach(el=>{
                if(active==1){
                    if(searched){
                        searched.forEach(eli=>{
                            eli.checked=true
                            let index=tasks.findIndex(x=>x.id==eli.id)
                            tasks[index].checked=true
                             index = taskArray.findIndex(x=>x.id==eli.id)
                             taskArray[index].checked=true

                            if(allbtn==1){
                                array=tasks.filter(el=>el.checked==false)
                                displayTask(array)
                            }
                            else{
                                
                                displayTask(searched)
                            }
                        })
                        
                    }
                    else{
                        el.checked=true
                    displayTask(tasks)

                    }
                }
                else{
                    if(allbtn==1){
                        console.log('how are u')
                        el.checked=true
                      array=tasks.filter(el=>el.checked==false)
                      displayTask(array)

                  }
                  else{
                    console.log('how are u 5555')
                    el.checked=true
                    displayTask(tasks)
                  }

                }
            })
            console.log(tasks)
            break;
        case 'unselectAll':
            action.selectedIndex=0
            taskArray.forEach(el=>{
                if(active==1){
                    if(searched){
                        searched.forEach(eli=>{
                            eli.checked=false
                            const index=tasks.findIndex(x=>x.id==eli.id)
                            tasks[index].checked=false
                            if(allbtn==2){
                                array=tasks.filter(el=>el.checked==true)
                                displayTask(array)
                            }
                            else{
                                
                                displayTask(searched)
                            }
                            
                            
                        })
                    }
                    else{
                        el.checked=false
                    displayTask(tasks)

                    }

                }
                else{
                    if(allbtn==2){
                        console.log('how are u')
                        el.checked=false
                      array=tasks.filter(el=>el.checked==true)
                      displayTask(array)

                  }
                  else{
                    console.log('how are u 5555')
                    el.checked=false
                    displayTask(tasks)
                  }

                   
                }

            })
            console.log(taskArray)
            break;
        case "deselectAll":
            action.selectedIndex=0
            if(active==1){
                if(searched){
                    console.log(searched)
                    searched=searched.filter(el=>el.checked==true)
                    console.log(searched)
                    searched.forEach(eli=>{
                        const index=tasks.findIndex(x=>x.id==eli.id)
                        let i=tasks[index].id
                        console.log(i)
                        //console.log(taskArray)
                        tasks=tasks.filter(el=> el.id!==i)
                        taskArray=taskArray.filter(el=>el.id!==i)
                        displayTask(tasks)
    
                        
                        
                    })
                }
                else{
                    tasks=tasks.filter(el=>el.checked==false)
                    taskArray=taskArray.filter(el=>el.checked==false)
                    displayTask(tasks)

                }

            }
            else{
                tasks=tasks.filter(el=>el.checked==false)
                task=task.filter(el=>el.checked==false)
                taskArray=taskArray.filter(el=>el.checked==false)
                displayTask(tasks)
            }
 
            console.log(tasks)
            break;
        default:



    }
})
let tasked
btn_0.addEventListener('click',function(){
    allbtn=0
    console.log(allbtn)
    main()
    //sortings()
   
    btn_0.classList.add('btn--active')
    btn_1.classList.remove('btn--active')
    btn_2.classList.remove('btn--active')
        sortings(tasks)
        //console.log(taskArray)
        //displayTask(tasks)
    
})
btn_1.addEventListener('click',function(){
    allbtn=1
    //sortings()
    console.log(allbtn)
    btn_0.classList.remove('btn--active')
    btn_1.classList.add('btn--active')
    btn_2.classList.remove('btn--active')
    main()
    array=task.filter(el=>el.checked==false)
    sortings(array)
        console.log(array)
        //displayTask(array)
    
    

})
btn_2.addEventListener('click',function(){
    allbtn=2
    //sortings()
    console.log(allbtn)
    btn_0.classList.remove('btn--active')
    btn_1.classList.remove('btn--active')
    btn_2.classList.add('btn--active')
    main()
    

       //sortings(tasks)
        array=tasks.filter(el=>el.checked==true);
        sortings(array)
        //displayTask(array)
        console.log(array)
        
    

})


    boxBtn.addEventListener('keyup',function(e){
        if(e.key=='Enter'){
            if(active==0){
                console.log("active=0")
                add(taskArray);
                text.value='';
                if(c==0){
                   sortings(taskArray);
               }
            }
            
        }
        else if(active==1){
            search();
        }
    })


