export const ADD_TODO = `
	mutation AddTodo($title: String!) {
		addTodo(title: $title) {
			id
			title
			completed
		}
	}
`

export const UPDATE_TODO = `
	mutation UpdateTodo($title: String, $completed: Boolean, $id: ID!) {
		updateTodo(id: $id, title: $title, completed: $completed) {
			id
			title
			completed
		}
	}
`

export const DELETE_TODO = `
	mutation DeleteTodo($id: ID!) {
		deleteTodo(id: $id) {
			id
			title
			completed
		}
	}
`
