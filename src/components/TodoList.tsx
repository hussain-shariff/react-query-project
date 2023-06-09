import { Todo } from "./Todo"
import { useQuery, useMutation, useQueryClient } from "react-query"
import { getTodos, createTodo } from "../api/todosApi"
import { Button } from "@mui/material"
import TextField from "@mui/material/TextField/TextField"
import { useRef, useState } from "react"

const TodoList = () => {
	const queryClient = useQueryClient()
	const [inputError, setinputError] = useState(false)
	const { data, isLoading, isError, error } = useQuery("todos", getTodos)
	
	const todoRef = useRef()
	

	const addTodoMutation = useMutation(createTodo, {
		onSuccess: () => {
			queryClient.invalidateQueries("todos")
		},
	})

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (todoRef.current.value === "") {
			setinputError(true)
			return
		}
		addTodoMutation.mutate({
			title: todoRef.current.value,
		})
		todoRef.current.value = ""
		setinputError(false)
	}

	if (isLoading)
		return <h1 className="ml-10 text-4xl font-bold text-white">Loading...</h1>

	if (isError)
		return (
			<h1 className="ml-10 text-4xl font-bold text-white">{error.message}</h1>
		)

	const todoElements = data.map((todo: any) => (
		<Todo key={todo.id} todo={todo} />
	))
	return (
		<>
			<form className="mb-20 flex justify-center gap-5" onSubmit={handleSubmit}>
				<TextField
					error={inputError}
					helperText={inputError ? "Write a Todo" : ""}
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
