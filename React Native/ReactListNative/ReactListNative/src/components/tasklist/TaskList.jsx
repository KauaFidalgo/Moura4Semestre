import { ScrollView, Text, View } from "react-native"
import { TaskListStyle } from "./TaskListStyle"
import { TaskItem } from "../taskitem/TaskItem"

export const TaskList = () => {
  return (
    <ScrollView style={TaskListStyle.taskListContainer}>
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    
    </ScrollView>  
  )
}