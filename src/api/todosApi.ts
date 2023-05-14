import axios from "axios"

type deleteTodoProp = {
	id : string | number
}

export const getTodos = async () => {
	const res = await axios.get("http://localhost:3000/todos")
	return res.data
}

export const createTodo = async (todo: any) => {
	return await axios.post("http://localhost:3000/todos", todo)
}

export const updateTodo = async (todo : any) => {
	return await axios.patch(`http://localhost:3000/todos/${todo.id}`, todo)
}

export const deleteTodo = async ({ id } : deleteTodoProp) => {
	return await axios.delete(`http://localhost:3000/todos/${id}`)
}
