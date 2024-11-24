import Button from '@components/ui/Button'

const Header: React.FC = () => {
  return (
    <>
        <header className="flex flex-col text-center items-center px-12">
            <h1 className=" gradient_text_blue sm:text-[3.5em] text-[2.3rem] font-bold pb-0 ">
            Todo Hive
            </h1>
            <h3 className='lg:text-lg text-base font-medium text-gray-600 sm:pb-6 pb-3'>
                Organize, Track and Achieve!
            </h3>
            <p className=" text-xs sm:text-base sm:px-6 px-0 font-regular  text-gray-500">
              Welcome to your ultimate task management platform! Where you can effortlessly add, track, and manage tasks all in one place. Stay organized and on top of your to-do list with features that allow you to quickly add new tasks, mark them as complete, and monitor your progress in real-time. Gain insights into your work habits and productivity with detailed analytics, helping you stay on track and achieve your goals. Join Todo Hive today and take control of your workflow like never before!
            </p>
        </header>
        {/* <div className="flex gap-6 py-8">
            <Button text={"Signup"}/>
            <Button text={"Login"}/>
        </div> */}
    </>
  )
}

export default Header
