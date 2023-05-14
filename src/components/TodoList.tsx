import { Todo } from "./Todo"
import { useQuery, useMutation, useQueryClient } from "react-query"
import { getTodos, createTodo } from "../api/todosApi"
import { Button } from "@mui/material"
import TextField from "@mui/material/TextField/TextField"
import { useRef } from "react"
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
	const queryClient = useQueryClient()
	const { data, isLoading, isError, error } = useQuery("todos", getTodos)
	const todoRef = useRef()

	const addTodoMutation = useMutation(createTodo, {
		onSuccess: () => {
			queryClient.invalidateQueries("todos")
		},
	})

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const uniqueId = uuidv4();
		addTodoMutation.mutate({
			userId: 1,
			id: uniqueId,
			title: todoRef.current.value,
			completed: false,
		})
		todoRef.current.value = ""
	}

	if (isLoading) return <h1>Loading...</h1>

	if (isError) return <h1>{error.message}</h1>

	const todoElements = data.map((todo: any) => (
		<Todo
			key={todo.id}
			todo = {todo}
		/>
	))
	return (
		<>
			<form className="mb-20 flex justify-center gap-5" onSubmit={handleSubmit}>
				<TextField
					inputRef={todoRef}
					label="Todo"
					variant="outlined"
					color="secondary"
					focused
					InputProps={{ style: { color: "white" } }}
				/>
				<Button
					type="submit"
					size="large"
					variant="contained"
					color="secondary"
				>
					Add Todo
				</Button>
			</form>
			<div className=" flex items-center flex-col gap-5">{todoElements}</div>
		</>
	)
}

export default TodoList
