// 需要一种方法使返回值的类型与传入参数的类型是相同的
function identity<T>(arg:T):T{
    return arg
}