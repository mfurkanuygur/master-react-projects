import { useRef } from "react"
import PropTypes from 'prop-types'

const TodoForm = ({ allTodos, setAllTodos,isDisable }) => {
    const inputRef = useRef()
    const addItem = (e) => {
        e.preventDefault();
        if (inputRef.current.value.trim() !== "") {
            setAllTodos([{
                id: self.crypto.randomUUID(),
                name: inputRef.current.value.trim(),
                isComplete: false,
                isEdit: false
            }, ...allTodos]);
            inputRef.current.value = "";
        }
    }

    return (
        <form onSubmit={(e) => addItem(e)} >
            <input type="text" placeholder="Please enter a todo!" ref={inputRef} />
            <button type="submit" aria-label="add" disabled={isDisable}>
                <i className="fa-solid fa-square-plus fa-xl addIcon"></i>
            </button>
        </form>
    )
}

{/* {isModalOpen && (
    <Modal message="Please enter a content !!!" />
)} */}
TodoForm.propTypes = {
    allTodos: PropTypes.array,
    setAllTodos: PropTypes.func
}
export default TodoForm