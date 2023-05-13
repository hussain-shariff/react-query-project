import axios from "axios"

export const getTodos = async () => {
	const res = await axios.get("http://localhost:3000/todos")
	return res.data
}

export const createTodo = async (todo: string) => {
	return await axios.post("http://localhost:3000/todos", todo)
}

export const updateTodo = async (id: number, todo: string) => {
	return await axios.patch(`http://localhost:3000/todos/${id}`, todo)
}

export const deleteTodo = async (id: number) => {
	return await axios.delete(`http://localhost:3000/todos/${id}`)
}
