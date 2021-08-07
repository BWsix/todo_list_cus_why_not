import './Task.css'
import { Draggable } from "react-beautiful-dnd"

export default function Task({ task, handle_check, index }) {
  return (
    <Draggable draggableId={task.key} index={index}>
      {(provided, snapshot) => (
        <div onClick={() => handle_check(task.key)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="Task" style={{backgroundColor:(snapshot.isDragging? '#2aa198': '#222')}}>
            <input type="checkbox" checked={task.is_fin} onChange={() => null} className="Task-check"/>
            <label>{task.name}</label>
          </div>
        </div>
      )}
    </Draggable>
  )
}
