import { useState } from 'react'
import ProjectInfo from './ProjectInfo';
import ProjectList from './ProjectList';
import Squares2x2 from '../assets/Squares2x2';
import Bars3 from '../assets/Bars3';
import XMark from '../assets/XMark';
import { projects } from '../constants';


function Panel() {
  const [gridView, setGridView] = useState(true);
  const [projectId, setProjectId] = useState(undefined);

  function Filters(props) {
    return (
      <>
        <button onClick={() => setGridView(false)} className={`p-1 rounded-full ${gridView ? "text-gray-900" : "text-gray-50" } transition ease-in-out hover:scale-110 duration-300`}>
          <Bars3 />
        </button>
        <button onClick={() => setGridView(true)} className={`p-1 rounded-full ${gridView ? "text-gray-50" : "text-gray-900" } transition ease-in-out hover:scale-110 duration-300`}>
          <Squares2x2 />
        </button>
      </>
    )
  }

  return (
    <div className="bg-gray-400 h-full w-full rounded-xl shadow-lg p-12 overflow-hidden">
      <div className="flex justify-between mb-8">
        <h2 className="font-medium text-3xl uppercase">{ projectId === undefined ? "Projects" : projects[projectId].name }</h2>

        <div className="">
          { projectId === undefined
            ? <Filters />
            : <button onClick={() => setProjectId(undefined)}><XMark /></button>
          }
        </div>
      </div>

      
      { projectId === undefined
        ? <ProjectList gridView={gridView} setProjectId={setProjectId} projects={projects} />
        : <ProjectInfo project={projects[projectId]}  />
      }
    </div>
  )
}

export default Panel