import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import CheckIcon from "@mui/icons-material/Check"
import { Checkbox, FormControlLabel } from "@mui/material"
import { useMutation, useQueryClient } from "react-query"
import { updateTodo, deleteTodo } from "../api/todosApi"
import TextField from "@mui/material/TextField/TextField"
import { useState, useRef } from "react"

type TodoProps = {
	todo: {
		userId: number
		id: string
		title: string
		completed: boolean
	}
}

export const Todo = ({ todo }: TodoProps) => {
	const [isEdit, setisEdit] = useState(false)
	const [editError, setEditError] = useState(false)
	const editRef = useRef()
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
	const handleEdit = () => {
		if (editRef.current.value === "") {
			setEditError(true)
			return
		}
		updateTodoMutation.mutate({
			...todo,
			title: editRef.current.value,
		})
		setisEdit(false)
		setEditError(false)
	}
	return (
		<div className=" text-white flex items-center gap-3">
			{!isEdit && (
				<FormControlLabel
					control={
						<Checkbox
							color="secondary"
							defaultChecked={todo.completed}
							onChange={() =>
								updateTodoMutation.mutate({
									...todo,
									completed: !todo.completed,
								})
							}
						/>
					}
					label={todo.title}
				/>
			)}
			{isEdit && (
				<TextField
					focused
					size="small"
					error={editError}
					helperText={editError ? "Write a Todo" : ""}
					defaultValue={todo.title}
					color="secondary"
					InputProps={{ style: { color: "white" } }}
					inputRef={editRef}
				/>
			)}
			{!isEdit && (
				<EditIcon
					color="secondary"
					className=" cursor-pointer"
					onClick={() => setisEdit(true)}
				/>
			)}
			{isEdit && (
				<CheckIcon
					color="secondary"
					className=" cursor-pointer"
					onClick={() => handleEdit()}
				/>
			)}
			<DeleteIcon
				color="secondary"
				className=" cursor-pointer"
				onClick={() => deleteTodoMutation.mutate({ id: todo.id })}
			/>
		</div>
	)
}
