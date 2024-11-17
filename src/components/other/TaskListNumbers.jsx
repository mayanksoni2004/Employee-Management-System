import React from "react";

function TaskListNumbers({data}) {
    return(
        <div className="flex mt-10 justify-between gap-5 screen">
            <div className="rounded-xl w-[45%] py-6 px-9 bg-blue-400">
                <h2 className="text-3xl font-semibold text-black">{data.taskCounts.newTask}</h2>
                <h3 className="text-xl font-medium text-black">New Task</h3>
            </div>
            <div className="rounded-xl w-[45%] py-6 px-9 bg-green-400">
                <h2 className="text-3xl font-semibold text-black">{data.taskCounts.completed}</h2>
                <h3 className="text-xl font-medium text-black">Completed Task</h3>
            </div>
            <div className="rounded-xl w-[45%] py-6 px-9 bg-yellow-400">
                <h2 className="text-3xl font-semibold text-black">{data.taskCounts.active}</h2>
                <h3 className="text-xl font-medium text-black">Accepted Task</h3>
            </div>
            <div className="rounded-xl w-[45%] py-6 px-9 bg-red-400">
                <h2 className="text-3xl font-semibold text-black">{data.taskCounts.failed}</h2>
                <h3 className="text-xl font-medium text-black">Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers