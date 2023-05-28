import { TodoProp, deleteTodoProp } from "../types"
import { client } from "../App"
import { GET_TODOS } from "../queries/queries"
import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../mutations/mutations"

export const getTodos = async () => {
	const response = await client.query({
		query: GET_TODOS,
	})
	return response.data.getTodos
}

export const createTodo = async (todo: TodoProp) => {
	const response = await client.mutate({
		mutation: ADD_TODO,
		variables: { title: todo.title },
	})
	return response.data
}

export const updateTodo = async (todo: TodoProp) => {
	const response = await client.mutate({
		mutation: UPDATE_TODO,
		variables: {
			id: todo.id,
			title: todo.title,
			completed: todo.completed,
		},
	})
	return response.data
}

export const deleteTodo = async ({ id }: deleteTodoProp) => {
	const response = await client.mutate({
		mutation: DELETE_TODO,
		variables: { id },
	})
	return response.data
}
