import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { Checkbox } from "@mui/material"

type TodoProps = {
    name : string
}

export const Todo = ({name}: TodoProps) => {
	return (
		<div className=" flex items-center gap-3">
			<Checkbox color="secondary" />
			<h1 className=" font-bold text-2xl text-white">{name}</h1>
			<EditIcon color="secondary" />
			<DeleteIcon color="secondary" />
		</div>
	)
}
