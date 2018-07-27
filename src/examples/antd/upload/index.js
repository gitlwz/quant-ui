import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

//点击上传
import Upload_click from './upload_click/Detail.js'
import Upload_clickCode from './upload_click/code.js'
//用户头像
import Upload_avatar from './upload_avatar/Detail.js'
import Upload_avatarCode from './upload_avatar/code.js'
//已上传的文件列表
import Upload_FileList from './upload_FileList/Detail.js'
import Upload_FileListCode from './upload_FileList/code.js'
//照片墙
import Upload_PicturesWall from './upload_PicturesWall/Detail.js'
import Upload_PicturesWallCode from './upload_PicturesWall/code.js'
//完全控制的上传列表
import Upload_FileList_controlled from './upload_FileList_controlled/Detail.js'
import Upload_FileList_controlledCode from './upload_FileList_controlled/code.js'
//拖拽上传
import Upload_drag from './upload_drag/Detail.js'
import Upload_dragCode from './upload_drag/code.js'
//文件夹上传
import Upload_folder from './upload_folder/Detail.js'
import Upload_folderCode from './upload_folder/code.js'
//手动上传
import Upload_manual from './upload_manual/Detail.js'
import Upload_manualCode from './upload_manual/code.js'
//图片列表样式
import Upload_picturesList from './upload_picturesList/Detail.js'
import Upload_picturesListCode from './upload_picturesList/code.js'
import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Upload上传</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="点击上传" key="1">
                        <Card >
                            <Upload_click />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Upload_clickCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="用户头像" key="2">
                        <Card >
                            <Upload_avatar />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Upload_avatarCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="已上传的文件列表" key="3">
                        <Card >
                            <Upload_FileList />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Upload_FileListCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="照片墙" key="4">
                        <Card >
                            <Upload_PicturesWall />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Upload_PicturesWallCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="完全控制的上传列表" key="5">
                        <Card >
                            <Upload_FileList_controlled />
                            <p>使用 <code>fileList</code> 对列表进行完全控制，可以实现各种自定义功能，以下演示三种情况：</p>
                            <p>1) 上传列表数量的限制。</p>
                            <p>2) 读取远程路径并显示链接。</p>
                            <p>3) 按照服务器返回信息筛选成功上传的文件。</p>
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Upload_FileList_controlledCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="拖拽上传" key="6">
                        <Card >
                            <Upload_drag />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Upload_dragCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="文件夹上传" key="7">
                        <Card >
                            <Upload_folder />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Upload_folderCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="手动上传" key="8">
                        <Card >
                            <Upload_manual />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Upload_manualCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="图片列表样式" key="9">
                        <Card >
                            <Upload_picturesList />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Upload_picturesListCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="10">
                        <Api data={data} />
                    </TabPane>
                </Tabs>


            </div>
        );
    }
}

export default App;
