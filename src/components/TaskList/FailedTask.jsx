import React from "react";

function FailedTask({data}) {
    return (
        <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm px-3 py-1 rounded-lg">{data.category}</h3>
                <h4 className="text-sm rounded-lg px-3 py-1 bg-gray-400">{data.taskDate}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
            <p className="text-sm mt-2">
                {data.taskDescription}
            </p>
            <div className="mt-2">
                <button className="w-full rounded-2xl shadow-md bg-red-500 py-1 px-2">Failed</button>
            </div>
        </div>
    )
}

export default FailedTask