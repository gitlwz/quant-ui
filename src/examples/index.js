/**
 * 路由组件出口文件
 */
import Home from './home/home';
import Analysis from './home/analysis';
import Monitor from './home/monitor';
import Workplace from './home/workplace';

//test 组件测试
import Testupload from './test/upload';
import Test2 from './test/test2';
import Gridlayout from './test/gridlayout';
//ui
import QRCode from './UI/QRCode';
import Copy from './UI/Copy'
import NProgress from './UI/NProgress'
import SlidingValidation from './UI/SlidingValidation' //滑动验证
import RichText from './UI/RichText' //富文本

import DropTree from "./UI/DropTree" //拖拽树形图
import Color from "./UI/Color" //拾色器
import QTable from "./UI/Table" //
import ContextMenu from "./UI/ContextMenu" //右键菜单
import ReactMarkdown from "./UI/ReactMarkdown" //
import Resizable from "./UI/Resizable" //



//动画
import BasicAnimations from "./animation/BasicAnimations"


//pro
import Authorized from "./pro/authorized";
import Login from "./pro/login";
import GlobalFooter from "./pro/GlobalFooter";
import DescriptionList from "./pro/DescriptionList";
import FooterToolbar from "./pro/FooterToolbar";
import NumberInfo from "./pro/NumberInfo";
import Trend from "./pro/Trend";
import AvatarList from "./pro/AvatarList";
import TagSelect from "./pro/TagSelect";
import NoticeIcon from './pro/NoticeIcon' //通知菜单
import HeaderSearch from './pro/HeaderSearch' //顶部搜索框
import CountDown from "./pro/CountDown" //自动计时
import Ip from "./pro/ip" //ip地址输入
import Strength from "./pro/Strength" //Strength强度确认
import MoveModal from "./pro/movemodal" //MoveModal移动弹出框
import Ellipsis from './pro/Ellipsis' //文本自动省略
import Result from './pro/result' //结果页
import PageHeader from './pro/PageHeader' //PageHeader页头
import ExhibitTable from './pro/ExhibitTable'
import Dragact from './pro/dragact'
import Number from './pro/Number'

//util
import webSocket from './util/webSocket'
import Language from './util/Language'
import Screenfull from './util/screenfull'
import Theme from "./util/theme";
import Utiles from "./util/Utiles";
import Md5 from './util/md5'
import Qs from './util/qs'
import storage from './util/storage'
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
import Tree from './antd/Tree'
/*-------END ----------------*/

//Layout Components
import Grid from './antd/Grid'
import Layout from './antd/Layout'

//other components
import Anchor from './antd/Anchor'
import BackTop from './antd/BackTop'
import Divider from './antd/Divider'
import LocaleProvider from './antd/LocaleProvider'

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
import Dynamic_timeCharts from "./charts/Dynamic_timeCharts"
import K_line_graph from "./charts/K_line_graph"
import Gauge from './charts/Gauge'
import Pie_custom from './charts/Pie_custom' 
import Scatter from './charts/Scatter'




//qdp
import Fetch from './QDP/fetch';
import DownLoad from './QDP/DownLoad'

export default {
    Home,
    QRCode,
    Copy,
    NProgress,
    SlidingValidation,
    Analysis,
    Monitor,
    Workplace,

    //test
    Testupload,
    Test2,
    Dragact,
    Gridlayout,
    Number,
    
    NoticeIcon,
    HeaderSearch,
    RichText,
    Ellipsis,
    CountDown,
    DropTree,
    Color,
    QTable,
    ContextMenu,
    ReactMarkdown,
    Resizable,
    Result,
    PageHeader,
    Ip,
    Strength,
    MoveModal,
    //动画
    BasicAnimations,
    ExhibitTable,
    Md5,
    Qs,
    storage,

    //util
    webSocket,
    Language,
    Screenfull,
    Theme,
    Utiles,
    Authorized,
    Login,
    GlobalFooter,
    DescriptionList,
    FooterToolbar,
    NumberInfo,
    Trend,
    AvatarList,
    TagSelect,

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
    Tree,
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

    /*-----Layout----*/
    Grid,
    Layout,
    /*-----end-----*/

    //Other
    Anchor,
    BackTop,
    Divider,
    LocaleProvider,


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
    Dynamic_timeCharts,
    K_line_graph,
    Gauge,
    Pie_custom,
    Scatter,


    //qdp
    Fetch,
    DownLoad
}