declare global {
    interface Todo {
        id: number,
        title: string,
        isDone: boolean,
        isEditing: boolean
    }
    interface TodoList {
        todos: Todo[]
    }
}
export { }