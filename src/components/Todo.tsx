import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

export const Todo = () => {
	return (
		<div className=" flex items-center gap-3">
			<h1 className=" font-bold text-2xl text-white">todo</h1>
			<EditIcon color="secondary" />
			<DeleteIcon color="secondary" />
		</div>
	)
}
