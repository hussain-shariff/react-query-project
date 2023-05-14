import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { Checkbox, FormControlLabel } from "@mui/material"
import { useMutation, useQueryClient } from "react-query"
import { updateTodo, deleteTodo } from "../api/todosApi"

type TodoProps = {
	todo: {
		userId: number
		id: string
		title: string
		completed: boolean
	}
}

export const Todo = ({ todo }: TodoProps) => {
	const queryClient = useQueryClient()
	const deleteTodoMutation = useMutation(deleteTodo, {
		onSuccess: () => {
			queryClient.invalidateQueries("todos")
		},
	})

	const updateTodoMutation = useMutation(updateTodo, {
		onSuccess: () => {
			queryClient.invalidateQueries("todos")
		},
	})
	return (
		<div className=" text-white flex items-center gap-3">
			<FormControlLabel
				control={
					<Checkbox
						color="secondary"
						defaultChecked={todo.completed}
						onChange={()=> updateTodoMutation.mutate({
							...todo,
							completed : !todo.completed
						})}
					/>
				}
				label={todo.title}
			/>
			<EditIcon color="secondary" className=" cursor-pointer" />
			<DeleteIcon
				color="secondary"
				className=" cursor-pointer"
				onClick={() => deleteTodoMutation.mutate({ id: todo.id })}
			/>
		</div>
	)
}
