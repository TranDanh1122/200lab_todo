import React from "react";
import clsx from "clsx";
interface TodoItemProps {
    item: Todo
}
const TodoItem: React.FC<TodoItemProps> = ({ item }): React.JSX.Element => {
    return (
        <div className="flex flex-nowrap items-center w-full justify-between">
            <span className={clsx("text-blue-700 px-8 py-4 border-[1px] border-solid border-gray-300 w-full", {
                "hidden": item.status == "edit",
                "block": item.status == "show"
            })} > {item.title} </span>
            <input type="text" name="title" className={clsx("px-8 py-4 outline-none border-[1px] border-solid border-gray-300 w-full", {
                "hidden": item.status == "show",
                "block": item.status == "edit"
            })} />
            <span className="p-4 text-white bg-red-400">Del</span>
            <span className="p-4 text-white bg-blue-400">Edit</span>
        </div >
    )
}
export default TodoItem