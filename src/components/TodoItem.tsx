import React from "react";
import clsx from "clsx";
interface TodoItemProps {
    item: Todo,
    swapShowNEdit: (itemId: number) => void,
    onSave: (itemId: number, value: string) => void,
    onDelete: (itemId: number) => void,
    onDone: (itemId: number) => void,

}
const TodoItem: React.FC<TodoItemProps> = ({ item, swapShowNEdit, onSave, onDelete, onDone }): React.JSX.Element => {
    const [value, setValue] = React.useState(item.title)
    return (
        <div className="flex flex-nowrap items-center w-full justify-between">
            <span onClick={() => onDone(item.id)} className={clsx("text-white px-8 py-4 border-[1px] border-solid bg-green-400 cursor-pointer", {
                "hidden": item.isDone || item.isEditing,
                "block": !item.isDone
            })} >Done?</span>
            <span className={clsx("text-blue-700 px-8 py-4 border-[1px] border-solid  w-full", {
                "hidden": item.isEditing,
                "block": !item.isEditing,
                "border-green-400": item.isDone,
                "border-gray-300": !item.isDone
            })} > {item.title} </span>
            <input type="text" name="title" value={value} onChange={(e) => setValue(e.target.value)} className={clsx("px-8 py-4 outline-none border-[1px] border-solid border-gray-300 w-full", {
                "hidden": !item.isEditing,
                "block": item.isEditing,
                "border-green-400": item.isDone,
                "border-gray-300": !item.isDone
            })} />
            {!item.isDone ?
                <>
                    <span onClick={() => onDelete(item.id)} className="p-4 text-white bg-red-400 cursor-pointer">Del</span>

                    <span onClick={() => {
                        setValue(item.title)
                        swapShowNEdit(item.id)
                    }} className={clsx("p-4 text-white bg-blue-400 cursor-pointer")}>{item.isEditing ? "UnEdit" : "Edit"}</span>
                    <span onClick={() => { onSave(item.id, value) }} className={clsx("p-4 text-white bg-green-400 cursor-pointer", {
                        "hidden": !item.isEditing,
                        "block": item.isEditing
                    })}>Save</span>
                </>

                : ""
            }

        </div >
    )
}
export default TodoItem