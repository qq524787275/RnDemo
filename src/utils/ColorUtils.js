export const getRandomColor=()=>{
    return '#' +
        (function (color) {
            return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
            && (color.length == 6) ? color : arguments.callee(color);
        })('');
}

export const isColor=(str)=>{
    let reg=/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;
    let r=str.match(reg);
    if(r===null){
        return false
    }
    return true;
}