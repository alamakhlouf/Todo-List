window.addEventListener('load',() => {
    const form = document.querySelector("#form") ;
    const new_task = document.querySelector("#new_task_input") ;
    const task_list = document.querySelector(".task-list") ;

    form.addEventListener('submit',(e)=> {
            e.preventDefault() ;
            console.log("submit") ;
            if (new_task.value=="")
                {alert("please fill the task");
                return;}
            

                const container = document.createElement("div")  ;
                container.className="container"
                console.log(container)

            const tasks = document.createElement('div') ;
            tasks.className="tasks" ;

            const input = document.createElement('input');
            input.id="task" ;
            input.setAttribute("readonly","readonly");
            input.setAttribute("type","text");
            input.value=new_task.value;
            new_task.value="" ;
            tasks.appendChild(input) ;

            const buttons = document.createElement('div') ;
            buttons.className="buttons" ;

            const edit = document.createElement('input');
            edit.setAttribute("type","submit");
            edit.id="edit" ;
            edit.value="Edit"
            console.log(edit) ;

            const deletee = document.createElement('input');
            deletee.id="delete" ;
            deletee.setAttribute("type","submit");
            deletee.value="Delete"

            buttons.appendChild(edit) ;
            buttons.appendChild(deletee) ;
            

            container.appendChild(tasks) ;
            container.appendChild(buttons) ;
            task_list.appendChild(container) ;


            edit.addEventListener('click',() =>{
                if (edit.value.toLocaleLowerCase()=="edit")
                    {   console.log("edit")
                        input.removeAttribute('readonly') ;
                        input.focus() ;
                        edit.value="Save"
                        
                    }
                else {
                    input.setAttribute('readonly','readonly') ;
                    edit.value="Edit" ;
                }
            })

            deletee.addEventListener('click',()=>{
                task_list.removeChild(container) ;
            })

    })

})


