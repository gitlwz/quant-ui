
import { theme } from 'quant-ui';
switch (theme.getCurrentColor()){
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