let theme = window.localStorage.getItem("quant-theme") || "default";
switch (theme){
    case "default":
        
        break;
    case "red":
        require.ensure([], function(require){
            require('./red.less');
        }, 'default');
        break;
    case "green":
        require.ensure([], function(require){
            require('./green.less');
        }, 'default');
        break;
    case "purple":
        require.ensure([], function(require){
            require('./purple.less');
        }, 'default');
        break;
    default:
        break;
}