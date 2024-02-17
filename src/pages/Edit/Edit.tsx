import { useRef } from "react"
import CommandMenu from "@/components/command/command"
import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from "@/components/ui/resizable"
import { motion, useDragControls } from "framer-motion"
import { useWindowWidth } from "@react-hook/window-size"

const Edit = () => {
  const gridRef = useRef<HTMLDivElement>(null)

  const width = useWindowWidth()
  const gridTileWidth = width * (0.88) / 12

  console.log(width)

  return <>
    <div className="ml-4 p-6 h-full flex items-center">
      <div
        className={`grid grid-cols-12 grid-rows-6 grid-flow-row border-l-[1px] border-b-[1px] border-dotted border-slate-700`}
        style={{ width: `${width}px`, height: `${width*3/8}px` }}
        ref={gridRef}
      >
        { Array(12).fill("").map((_, row) => (
          Array(6).fill("").map((_, column) => (
            <div
              key={`${row}-${column}`}
              className={`border-t-[1px] border-r-[1px] border-dotted border-slate-700`}
            />
          ))
        ))}
      </div>
      <motion.div
          className="absolute"
          style={{ width: gridTileWidth, height: gridTileWidth, backgroundColor: 'whitesmoke' }}
          drag
          dragMomentum={false}
          dragElastic={0.2}
          dragTransition={{
            timeConstant: 200,
            modifyTarget: target => {
              console.log(target)
              return Math.round((target / gridTileWidth)) * gridTileWidth
            }
          }}
          dragConstraints={gridRef}
        />
      <CommandMenu />
    </div>
  </>
}

export default Edit