import Addtask from './Addtask'
import { TaskProvider } from './TaskContext'
import TaskList from './TaskList'

export default function ToDo() {
  return (
    <TaskProvider>
   <h1>My month off in Paris</h1>
   <Addtask />
   <TaskList />
    </TaskProvider>
  )
}
