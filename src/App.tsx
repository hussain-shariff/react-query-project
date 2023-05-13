import { Button } from "@mui/material"
import TextField from "@mui/material/TextField/TextField"

function App() {

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
  }
  
	return (
		<div className="min-h-screen bg-[#0b1829] py-20">
			<form className=" flex justify-center gap-5" onSubmit={handleSubmit}>
				<TextField
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
		</div>
	)
}

export default App
