declare global {
    interface Todo {
        id: number,
        title: string,
        isDone: boolean,
        status: "edit" | "show"
    }
    interface TodoList {
        todos: Todo[]
    }
}
export { }