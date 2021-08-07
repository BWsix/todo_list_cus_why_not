import Task from './Task'

export default function List({ tasks, handle_check }) {
  return (
    tasks.map((task, index) => <Task task={task} key={task.key} index={index} handle_check={handle_check}/>)
  )
}
