import { useEffect } from "react"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSetector"


const TodoList=()=> {
    const {todos, loading, error,limit,page} = useTypedSelector(state=> state.todo)
    const {fetchTodos, SetTodoPage}=useActions()
    const pages = [1, 2, 3, 4, 5]
    useEffect(()=>{
            fetchTodos(page, limit)
    },[page])

  
    if(loading){
        return <h1>идет загрузка...</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
    

  return (
    <div>
        {todos.map(todo =>
            <div key={todo.id}>{todo.id}-{todo.title}</div>
        )}
         <div style={{display:"flex"}}>
            {pages.map(p=>
            <div
            onClick={()=>SetTodoPage(p)}
            style={{border: p === page ? '2px solid green' : '2px solid gray', padding:10}}> 
                {p}</div>
         )}
         </div>  
    </div>
  )

}

export default TodoList;
