import React from "react";
import TodoItem from "./TodoItem";
const initData: Todo[] = [
    { id: 1, title: "Todo 1", isDone: true, isEditing: false },
    { id: 2, title: "Todo 3", isDone: false, isEditing: false },
    { id: 3, title: "Todo 4", isDone: false, isEditing: false },
    { id: 4, title: "Todo 5", isDone: false, isEditing: false }

]
export default function TodoList(): React.JSX.Element {
    const [todos, renderTodos] = React.useState<Todo[]>(initData)
    const handleDelete = (itemId: number) => {
        const newTodos = todos.filter(item => item.id != itemId)
        renderTodos(newTodos)
    }
    const swapShowNEdit = (itemId: number) => {
        const index = todos.findIndex(item => item.id == itemId)
        if (index == -1) return
        const newTodos = [...todos]
        newTodos[index] = { ...newTodos[index], isEditing: !newTodos[index].isEditing }
        renderTodos(newTodos)
    }
    const handleSave = (itemId: number, value: string) => {
        const index = todos.findIndex(item => item.id == itemId)
        if (index == -1) return
        const newTodos = [...todos]
        newTodos[index] = { ...newTodos[index], title: value, isEditing: !newTodos[index].isEditing }
        renderTodos(newTodos)
    }
    const handleDone = (itemId: number) => {
        const index = todos.findIndex(item => item.id == itemId)
        if (index == -1) return
        const newTodos = [...todos]
        newTodos[index] = { ...newTodos[index], isDone: true }
        renderTodos(newTodos)
    }
    const handleAdd = () => {
        const newTodos = [...todos]
        newTodos.push({ id: newTodos[newTodos.length - 1].id + 1, title: "Làm gì viết vào đây", isDone: false, isEditing: false })
        renderTodos(newTodos)
    }
    return (
        <div className="flex flex-col flex-nowrap gap-4 w-[50%]">
            <button onClick={handleAdd} className="p-4 text-white bg-purple-400 cursor-pointer">Add</button>
            {todos.map(todo => <TodoItem key={todo.id} item={todo} swapShowNEdit={swapShowNEdit} onSave={handleSave} onDelete={handleDelete} onDone={handleDone} />)}
        </div>
    )
}
