import Panel from './components/Panel';
import NameCanvas from './components/NameCanvas';
import MapPin from './assets/MapPin';
import { links } from './constants';
import './App.css'

function App() {
  return (
    <div className="flex flex-col md:flex-row gap-24 bg-gradient-to-t from-gray-300 h-screen p-12">
      <div className="w-2/5 h-full flex flex-col justify-between" >
        <div className="w-full h-1/5 hover:cursor-grab active:cursor-grabbing">
          <NameCanvas />
        </div>

        <div className="flex justify-around outline outline-1 outline-gray-400 p-4 relative bg-gray-100">
          <div className="w-4 h-4 absolute -bottom-2 -left-2 border-b-[1px] border-l-[1px] border-gray-400" />
            {links.map((link, index) =>
              <a
                key={index}
                href={link.url}
                className="group uppercase font-bold text-xl text-gray-700 hover:text-gray-900 hover:text-3xl hover:animate-pulse transition-all"
                target="_blank"
              >
                { link.name }
                <span className="block max-w-0 group-hover:animate-pulse group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-900 shadow-2xl" />
              </a>
            )}
          <div className="w-4 h-4 absolute -top-2 -right-2 border-t-[1px] border-r-[1px] border-gray-400" />
        </div>
        
        <div className="flex flex-wrap justify-between outline outline-1 outline-gray-400 relative bg-gray-100 p-4">
          <div className="w-4 h-4 absolute -bottom-2 -left-2 border-b-[1px] border-l-[1px] border-gray-400" />
          <h3 className="font-medium uppercase text-xl text-gray-700">Web Developer</h3>
          <h4 className="flex align-center font-medium uppercase text-lg text-gray-700"><MapPin />Chicago, IL</h4>
          <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aut molestiae qui inventore minus illo fugiat suscipit cumque placeat natus, pariatur quae, animi, assumenda minima debitis officia culpa deleniti vitae.</p>
          <div className="w-4 h-4 absolute -top-2 -right-2 border-t-[1px] border-r-[1px] border-gray-400" />
        </div>

        <form action="POST" className="flex w-full h-30 outline outline-1 outline-gray-400 relative">
          <div className="w-4 h-4 absolute -bottom-2 -left-2 border-b-[1px] border-l-[1px] border-gray-400" />
          <div className="flex flex-col w-full divide-y divide-gray-300">
            <input type="text" placeholder="Email" className="p-2 h-1/2" />
            <input type="text" placeholder="Message" className="p-2 h-1/2" />
          </div>
          <input type="submit" value="Submit" className="bg-gray-300 px-4 hover:cursor-pointer items-end hover:bg-gray-200 uppercase font-medium text-sm text-gray-600 aspect-square border-l-1 border-gray-400"/>
          <div className="w-4 h-4 absolute -top-2 -right-2 border-t-[1px] border-r-[1px] border-gray-400" />
        </form>
      </div>

      <div className="w-3/5 h-full" >
        <Panel />
      </div>
    </div>
  )
}

export default App