import React from "react";
const initData: [Todo] = [
    { id: 1, title: "Todo 1", isDone: true },
    { id: 2, title: "Todo 3", isDone: false },
    { id: 3, title: "Todo 4", isDone: false },
    { id: 4, title: "Todo 5", isDone: false }

]
const Todo: React.FC = (): React.JSX.Element => {
    const [todos, renderTodos] = React.useState(initData)
    return (<></>)
}
export default Todo