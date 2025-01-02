declare global {
    interface Todo {
        id: number,
        title: string,
        isDone: boolean
    }
    interface TodoList {
        todos: Todo[]
    }
}
export { }