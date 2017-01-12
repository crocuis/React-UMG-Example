/// <reference path="typings/ue.d.ts">/>

try {
    module.exports = () => {
        let application = require('./build');
        const { destroy } = application()
        return () => destroy()
    }
}
catch (e) {
    Context.CreateInspector(9229)
    require('bootstrap')('app')
}