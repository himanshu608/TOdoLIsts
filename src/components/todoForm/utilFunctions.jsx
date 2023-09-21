"use client"
const addNewTodo = async (todoId,title,description)=>{
    const responce = await fetch("/api/todo",{
        method: "POST",
        body: JSON.stringify({
        title:title,
        description:description
        }),
    })
    const data  = await responce.json();
    return data;
}

const updateTodo = async (todoId,title,description)=>{
    const responce = await fetch("/api/todo",{
        method: "PUT",
        body: JSON.stringify({
        _id:todoId,
        title:title,
        description:description
        }),
    })
    const data  = await responce.json();
    return data;
}

export const handleSubmit = async (todoId,title,description,save,router,setUpdate)=>{
    if(title === "") {
        alert("Title is required..")
        return;
    }

    if(save){
        await addNewTodo(todoId,title,description);
    }else {
        await updateTodo(todoId,title,description);
    }
    setUpdate((prev)=> !prev);
    router.push("/")
}