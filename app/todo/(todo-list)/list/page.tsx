import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons"
const TodoList = () => {
  return (
    <div className="  py-4">
        <div className=" bg-white">
            <div className="flex justify-between items-center bg-gray-300 px-2">
                <h3 className="text-xs">
                    Monday
                    <span className="ms-5">12/03/2024</span>
                </h3>
                <div >
                    <FontAwesomeIcon icon={faCircleChevronDown} className="w-[14px] h-[14px]"/>
                </div>
            </div>
            <div className="  overflow-auto">
                <table className=" task-detail-table min-w-[600px] flex gap-4">
                    <tr className="w-full">
                        <td>Title</td>
                        <td>decription</td>
                        <td>finish date</td>
                        <td>Type</td>
                        <td>status</td>
                    </tr>
                </table>
            </div>
        </div>        
    </div>
  )
}

export default TodoList
