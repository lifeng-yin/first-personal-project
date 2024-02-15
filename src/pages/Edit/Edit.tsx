import CommandMenu from "@/components/command/command"
import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from "@/components/ui/resizable"

const Edit = () => {
  return <>
    <div className="ml-4 p-6 h-full">
      <ResizablePanelGroup
        direction="horizontal"
        className="w-full h-full rounded-lg border border-slate-700"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
<CommandMenu />
    </div>
    
  </>
}

export default Edit