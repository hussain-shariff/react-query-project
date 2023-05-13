import { Button } from "@mui/material"
import TextField from "@mui/material/TextField/TextField"
import { useRef, useState } from "react"
import TodoList from "./components/TodoList"

function App() {
  const [todo, settodo] = useState<string|null>(null)
	const todoRef = useRef()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
    settodo(todoRef.current.value)
    todoRef.current.value = ""
	}

	return (
		<div className="min-h-screen bg-[#0b1829] py-20">
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
      <TodoList/>
		</div>
	)
}

export default App
