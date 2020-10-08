const files = require.context('../../views',true,/\.js$/)
const component = []
files.keys().map(item=>{
 
    if(item.includes('/home')||item.includes('/login')){
        return false
    }
    const tem = item.split('.')
    const path = `/index${tem[1].toLocaleLowerCase()}`
    const obj = {
        path,
        component:files(item).default
    }
    component.push(obj)
    return component
})
export default component