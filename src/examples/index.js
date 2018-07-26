/**
 * 路由组件出口文件
 */
import Home from './home/home';

//ui
import QRCode from './UI/QRCode';
import Copy from './UI/Copy'
import NProgress from './UI/NProgress'
import SlidingValidation from './UI/SlidingValidation' //滑动验证
import NoticeIcon from './UI/NoticeIcon' //通知菜单
import HeaderSearch from './UI/HeaderSearch' //顶部搜索框
import RichText from './UI/RichText' //富文本
import Ellipsis from './UI/Ellipsis' //文本自动省略
import CountDown from "./UI/CountDown" //自动计时
import DropTree from "./UI/DropTree" //拖拽树形图
import Color from "./UI/Color" //拾色器
import QTable from "./UI/Table" //拾色器
import ContextMenu from "./UI/ContextMenu" //右键菜单
//动画
import BasicAnimations from "./animation/BasicAnimations"

//util
import webSocket from './util/webSocket'
import Language from './util/Language'
import Screenfull from './util/screenfull'
import Theme from "./util/theme";
import Utiles from "./util/Utiles";
//antd
import Button from './antd/button'
import Icon from './antd/icon'

/*-------Navigation start ----------*/
import Affix from './antd/affix'
import Breadcrumb from './antd/breadcrumb'
import Dropdown from './antd/dropdown'
import Menu from './antd/menu'
import Pagination from './antd/pagination'
import Steps from './antd/steps'
/*-------END ----------*/
/*-------Data Entry ----------*/
import AutoComplete from './antd/autoComplete'
import Cascader from './antd/cascader'
import Checkbox from './antd/checkbox'
import DatePicker from './antd/datePicker'
import Form from './antd/form'
import Input from './antd/input'
import InputNumber from './antd/inputNumber'
import Mention from './antd/mention'
import Rate from './antd/rate'
import Radio from './antd/radio'
import Select from './antd/select'
import Slider from './antd/slider'
import Switch from './antd/switch'
import TreeSelect from './antd/treeSelect'
import TimePicker from './antd/timePicker'
import Transfer from './antd/transfer'
import Upload from './antd/upload'
/*-------END ----------*/
/*----Feedback start ---------*/
import Alert from './antd/alert'
import Drawer from './antd/drawer'
import Modal from './antd/modal'
import Message from './antd/message'
import Notification from './antd/notification'
import Progress from './antd/progress'
import Popconfirm from './antd/popconfirm'
import Spin from './antd/spin'
/*-------END ----------*/
/*----DataDisplay start ---------*/

import Avatar from './antd/Avatar'
import Badge from './antd/Badge'
import Calendar from './antd/Calendar'
import Card from './antd/Card'
import Carousel from './antd/Carousel'
import Collapse from './antd/Collapse'
import List from './antd/List'
import PopOver from './antd/PopOver'
import Tooltip from './antd/Tooltip'
import Table from './antd/Table'
import Tabs from './antd/Tabs'
import Tags from './antd/Tag'
import Timeline from './antd/Timeline'
/*-------END ----------------*/

//page
import NotFound from './page/NotFound'
import Map from './page/map'   //地图
import reactAmap from './page/reactAmap'   //地图


//charts
import Diagram from "./charts/Diagram"
import Diagram1 from "./charts/Diagram1"
import Diagram2 from "./charts/Diagram2"
import Line from "./charts/Line"
import Bar from "./charts/Bar"
import Dcharts from "./charts/3DCharts"
import DropCharts from "./charts/DropCharts"
export default {
    Home,
    QRCode,
    Copy,
    NProgress,
    SlidingValidation,
    
    NoticeIcon,
    HeaderSearch,
    RichText,
    Ellipsis,
    CountDown,
    DropTree,
    Color,
    QTable,
	ContextMenu,
    //动画
    BasicAnimations,

    //util
    webSocket,
    Language,
    Screenfull,
    Theme,
    Utiles,
    //antd

    /*----DataDisplay start ---------*/
    Avatar,
    Badge,
    Calendar,
    Card,
    Carousel,
    Collapse,
    List,
    PopOver,
    Tooltip,
    Table,
    Tabs,
    Tags,
    Timeline,
    /*-------END ----------------*/
    Button,
    Icon,
    /*-------Navigation start ----------*/
    Affix,
    Breadcrumb,
    Dropdown,
    Menu,
    Pagination,
    Steps,
     /*-------END ----------------*/
     /*-------Data Entry ----------*/
    AutoComplete,
    Cascader,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Mention,
    Rate,
    Radio,
    Select,
    Slider,
    Switch,
    TreeSelect,
    TimePicker,
    Transfer,
    Upload,
    /*-------END ----------------*/
    /*----Feedback start ---------*/
    Alert,
    Drawer,
    Modal,
    Message,
    Notification,
    Progress,
    Popconfirm,
    Spin,
    /*-------END ----------*/
    NotFound,
    Map,
    reactAmap,


    //charts
    Diagram,
    Diagram1,
    Diagram2,
    Line,
    Dcharts,
    Bar,
    DropCharts,
}