// Vue插件一定暴露一个对象
let myPlugins = {};

myPlugins.install = function(Vue,options){
    // Vue.prototype.$bus：任何组件都可以使用 (全局指令)
    // Vue.directive();
    // Vue.component
    // Vue.filter..........
    Vue.directive(options.name,(element,params)=>{
        element.innerHTML = params.value.toUpperCase();
    });
}

export default myPlugins;