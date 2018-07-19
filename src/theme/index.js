
import { theme } from 'quant-ui';
switch (theme.getCurrentColor()){
    case "default":
        
        break;
    case "red":
        require.ensure([], function(require){
            require('./red.less');
        });
        break;
    case "green":
        require.ensure([], function(require){
            require('./green.less');
        });
        break;
    case "purple":
        require.ensure([], function(require){
            require('./purple.less');
        });
        break;
    default:
        break;
}