import React from "react";
import TodoItem from "./TodoItem";
const initData: Todo[] = [
    { id: 1, title: "Todo 1", isDone: true, status: "show" },
    { id: 2, title: "Todo 3", isDone: false, status: "show" },
    { id: 3, title: "Todo 4", isDone: false, status: "show" },
    { id: 4, title: "Todo 5", isDone: false, status: "show" }

]
const TodoList: React.FC = (): React.JSX.Element => {
    const [todos, renderTodos] = React.useState(initData)
    return (
        <div className="flex flex-col flex-nowrap gap-4 w-[50%]">
            {todos.map(todo => <TodoItem key={todo.id} item={todo} />)}
        </div>
    )
}
export default TodoList