import React from 'react'

export default function page({params}) {
    const { projectId } = params
    console.log(projectId)
    return (
        <div>project id {projectId} page</div>
    )
}
