import TabLink from "./TabLink"
import SearchBar from "@components/ui/SearchBar"
import '@fortawesome/fontawesome-svg-core/styles.css'

const Tab = () => {
  return (
    <div className="  w-full flex flex-col gap-2 sm:flex-row justify-between items-center">
      <div className=" flex gap-3 sm:gap-6 md:gap-9 lg:gap-12">
          <TabLink text={"Todos"} url={"/todo"}/>
          <TabLink text={"Dashboard"} url={"/dashboard"}/>
          <TabLink text={"New Task"} url={"/new-todo"}/>
      </div>
      <div>
        <SearchBar/>
      </div>
    </div>
  )
}

export default Tab
