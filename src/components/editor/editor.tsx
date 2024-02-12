import { Excalidraw } from "@excalidraw/excalidraw";
import './editor.css'

const Editor = () => {
	return (
		<div className="h-[600px] w-[1000px] ml-8">
			<Excalidraw initialData={{
				appState: {
					zenModeEnabled: true,
					viewModeEnabled: true
				}
			}}/>
		</div>
	)
}

export default Editor