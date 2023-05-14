import axios from "axios"
import { TodoProp, deleteTodoProp } from "../types"

export const getTodos = async () => {
	const res = await axios.get("http://localhost:3000/todos")
	return res.data
}

export const createTodo = async (todo : TodoProp) => {
	return await axios.post("http://localhost:3000/todos", todo)
}

export const updateTodo = async (todo : TodoProp) => {
	return await axios.patch(`http://localhost:3000/todos/${todo.id}`, todo)
}

export const deleteTodo = async ({ id } : deleteTodoProp) => {
	return await axios.delete(`http://localhost:3000/todos/${id}`)
}
