import ReactUMG from 'react-umg'
import React from 'React'
import App from './containers/App';

function GetPC() {
    return GWorld.GetPlayerController()
}

function application() {
    let wrap = ReactUMG.wrap(<App />);
    wrap.AddToViewport();
    process.nextTick(() => {
        GetPC().bShowMouseCursor = true;
    })
    return {
        destroy : () => {
            wrap.RemoveFromParent()
        }
    }
}

module.exports = application