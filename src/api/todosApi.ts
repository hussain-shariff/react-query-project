import { TodoProp, deleteTodoProp } from "../types"
import { GET_TODOS } from "../queries/queries"
import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../mutations/mutations"
import axios from "axios"

export const getTodos = async () => {
	const res = await axios.post("http://localhost:5000/graphql", {
		query: GET_TODOS,
	})
	return res.data.data.getTodos
}

export const createTodo = async (todo: TodoProp) => {
	const res = await axios.post("http://localhost:5000/graphql", {
		query: ADD_TODO,
		variables: { title: todo.title },
	})
	return res.data.data
}

export const updateTodo = async (todo: TodoProp) => {
	const response = await axios.post("http://localhost:5000/graphql", {
		query: UPDATE_TODO,
		variables: {
			id: todo.id,
			title: todo.title,
			completed: todo.completed,
		},
	})
	return response.data
}

export const deleteTodo = async ({ id }: deleteTodoProp) => {
	const response = await axios.post("http://localhost:5000/graphql", {
		query: DELETE_TODO,
		variables: { id },
	})
	return response.data
}
