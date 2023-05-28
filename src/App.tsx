import TodoList from "./components/TodoList"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
	uri: "http://localhost:5000/graphql",
	cache: new InMemoryCache(),
})

function App() {
	return (
		<>
			<ApolloProvider client={client}>
				<div className="min-h-screen bg-[#0b1829] py-20">
					<TodoList />
				</div>
			</ApolloProvider>
		</>
	)
}

export default App
