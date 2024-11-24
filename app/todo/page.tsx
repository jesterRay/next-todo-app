
import Tab from "@components/todo/todo-list/Tab"
import TodoList from "./(todo-list)/list/page"

const Todo = () => {
  return (
    <div className="max-w-[100vw] flex flex-col lg:pt-8 pt-5 px-[1rem] sm:px-[2rem] md:px-[3rem]">
      <Tab/>
      <TodoList/> 
    </div>
  )
}

export default Todo
