import { gql } from "@apollo/client"

export const ADD_TODO = gql`
	mutation AddTodo($title: String!) {
		addTodo(title: $title) {
			id
			title
			completed
		}
	}
`

export const UPDATE_TODO = gql`
	mutation UpdateTodo($title: String, $completed: Boolean, $id: ID!) {
		updateTodo(id: $id, title: $title, completed: $completed) {
			id
			title
			completed
		}
	}
`

export const DELETE_TODO = gql`
	mutation DeleteTodo($id: ID!) {
		deleteTodo(id: $id) {
			id
			title
			completed
		}
	}
`
