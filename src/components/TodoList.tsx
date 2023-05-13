import { Todo } from "./Todo"

const TodoList = () => {
  return (
    <div className=" flex items-center flex-col gap-5">
        <Todo/>
        <Todo/>
        <Todo/>
    </div>
  )
}

export default TodoList