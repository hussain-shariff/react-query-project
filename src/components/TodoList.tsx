import { Todo } from "./Todo"
import { useQuery, useMutation, useQueryClient } from "react-query"
import { getTodos, createTodo, updateTodo, deleteTodo } from "../api/todosApi"

const TodoList = () => {
	const { data, isLoading, isError, error } = useQuery("todos", getTodos)

	if (isLoading) return <h1>Loading...</h1>

	if (isError) return <h1>{error.message}</h1>

	const todoElements = data.map((todo: any) => (
		<Todo key={todo.id} name={todo.title} />
	))
	return (
		<div className=" flex items-center flex-col gap-5">
			{ todoElements }
		</div>
	)
}

export default TodoList
