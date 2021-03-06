function Vue() {
}
Vue.use = function (plugin) {
    // 限制了自定义组建的类型
    var installedPlugins = (this._installedPlugins || (this._installedPlugins =
        []));
    //保存注册组件的数组，不存在及创建
    if (installedPlugins.indexOf(plugin) > -1) {
        //判断该组件是否注册过，存在return Vue对象
        return this;
    }
    //调用`toArray`方法
    var args = toArray(arguments, 1);
    args.unshift(this);
    //将Vue对象拼接到数组头部
    console.log(plugin);
    if (typeof plugin.install === 'function') {
        //如果组件是对象，且提供install方法，调用install方法将参数数组传入，改变`this`指针为该组件
        plugin.install.apply(plugin, args);
    }
    else if (typeof plugin === 'function') {
        //如果传入组件是函数，这直接调用，但是此时的`this`指针只想为`null` 
        plugin.apply(null, args);
    }
    //在保存注册组件的数组中添加
    installedPlugins.push(plugin);
    return this;
};
function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    //将存放参数的数组转为数组，并除去第一个参数（该组件）
    var ret = new Array(i);
    //循环拿出数组
    while (i--) {
        ret[i] = list[i + start];
    }
    return ret;
}
var Tom = {
    install: function (Vue, arg) {
    },
    age: 12
};
Vue.use(Tom);
var v = new Vue()
v.use(Tom)


