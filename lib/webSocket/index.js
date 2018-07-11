'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

/**
 * WEBSOCKET
 * 创建时间:2018-6-14
 * 创建人:LWZ
 */
exports.default = function () {
    /**
     * 
     * @param {连接地址} url 
     * @param {每个WebSocket规范的可选字符串或协议数组} protocols 
     * @param {配置} options 
                  调试消息被打印到console.debug().
                debug: false,
                  WebSocket是否应尝试立即连接 
                automaticOpen: true,
                  尝试重新连接之前要延迟的毫秒数。 
                reconnectInterval: 1000,
                  延迟重新连接尝试的最大毫秒数
                maxReconnectInterval: 30000,
                  重新连接延迟的增加率。允许重新连接尝试在问题持续时退后 
                reconnectDecay: 1.5,
                  在关闭和重试之前等待连接成功的最长时间（以毫秒为单位
                timeoutInterval: 2000
    */
    function QuantSocket(url, protocols, options) {

        var settings = {

            /** 这个实例是否应该记录调试消息。调试消息被打印到console.debug(). */
            debug: false,

            /** WebSocket是否应尝试立即连接 */
            automaticOpen: true,

            /** 尝试重新连接之前要延迟的毫秒数。 */
            reconnectInterval: 1000,

            /** 延迟重新连接尝试的最大毫秒数。*/
            maxReconnectInterval: 30000,

            /** 重新连接延迟的增加率。允许重新连接尝试在问题持续时退后 */
            reconnectDecay: 1.5,

            /** 在关闭和重试之前等待连接成功的最长时间（以毫秒为单位）*/
            timeoutInterval: 3000,

            //呼吸参数
            breatheParams: { oper: 'touch' },

            //呼吸时间
            breatheTime: 30000
        };
        if (!options) {
            options = {};
        }

        for (var key in settings) {
            if (typeof options[key] !== 'undefined') {
                this[key] = options[key];
            } else {
                this[key] = settings[key];
            }
        }

        this.url = url;

        this.reconnectAttempts = 0;

        this.readyState = WebSocket.CONNECTING;

        this.protocol = null;

        var self = this;
        var ws;
        var forcedClose = false;
        var timedOut = false;
        var eventTarget = document.createElement('div');

        eventTarget.addEventListener('open', function (event) {
            self.onopen(event);
        });
        eventTarget.addEventListener('close', function (event) {
            self.onclose(event);
        });
        eventTarget.addEventListener('connecting', function (event) {
            self.onconnecting(event);
        });
        eventTarget.addEventListener('message', function (event) {
            self.onmessage(event);
        });
        eventTarget.addEventListener('error', function (event) {
            self.onerror(event);
        });

        this.addEventListener = eventTarget.addEventListener.bind(eventTarget);
        this.removeEventListener = eventTarget.removeEventListener.bind(eventTarget);
        this.dispatchEvent = eventTarget.dispatchEvent.bind(eventTarget);

        function content() {
            var falg = ws || { readyState: 0 };
            switch (falg.readyState) {
                case 0:
                    console.info("正在连接");
                    break;
                case 1:
                    console.log("连接成功，可以通信了");
                    break;
                case 2:
                    console.log("正在关闭");
                    break;
                case 3:
                    console.info("已经关闭，或者打开连接失败。---正在释放资源。等待重新建立！");
                    break;
                default:
                    // this never happens
                    break;
            }
        }

        function generateEvent(s, args) {
            content();
            if (s === "open") {
                self.touch();
            }
            if (s === 'close' || s === "error") {
                clearInterval(self.touch_timeout);
            }
            var evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(s, false, false, args);
            return evt;
        };

        this.open = function (reconnectAttempt) {
            ws = new WebSocket(self.url, protocols || []);

            if (!reconnectAttempt) {
                eventTarget.dispatchEvent(generateEvent('connecting'));
            }

            if (self.debug || QuantSocket.debugAll) {
                console.debug('QuantSocket', 'attempt-connect', self.url);
            }

            var localWs = ws;
            var timeout = setTimeout(function () {
                if (self.debug || QuantSocket.debugAll) {
                    console.debug('QuantSocket', 'connection-timeout', self.url);
                }
                timedOut = true;
                localWs.close();
                timedOut = false;
            }, self.timeoutInterval);

            ws.onopen = function (event) {
                clearTimeout(timeout);
                if (self.debug || QuantSocket.debugAll) {
                    console.debug('QuantSocket', 'onopen', self.url);
                }
                self.protocol = ws.protocol;
                self.readyState = WebSocket.OPEN;
                self.reconnectAttempts = 0;
                var e = generateEvent('open');
                e.isReconnect = reconnectAttempt;
                reconnectAttempt = false;
                eventTarget.dispatchEvent(e);
            };

            ws.onclose = function (event) {
                clearTimeout(timeout);
                ws = null;
                if (forcedClose) {
                    self.readyState = WebSocket.CLOSED;
                    eventTarget.dispatchEvent(generateEvent('close'));
                } else {
                    self.readyState = WebSocket.CONNECTING;
                    var e = generateEvent('connecting');
                    e.code = event.code;
                    e.reason = event.reason;
                    e.wasClean = event.wasClean;
                    eventTarget.dispatchEvent(e);
                    if (!reconnectAttempt && !timedOut) {
                        if (self.debug || QuantSocket.debugAll) {
                            console.debug('QuantSocket', 'onclose', self.url);
                        }
                        eventTarget.dispatchEvent(generateEvent('close'));
                    }

                    var timeout = self.reconnectInterval * Math.pow(self.reconnectDecay, self.reconnectAttempts);
                    setTimeout(function () {
                        self.reconnectAttempts++;
                        self.open(true);
                    }, timeout > self.maxReconnectInterval ? self.maxReconnectInterval : timeout);
                }
            };
            ws.onmessage = function (event) {
                if (self.debug || QuantSocket.debugAll) {
                    console.debug('QuantSocket', 'onmessage', self.url, event.data);
                }
                var e = generateEvent('message');
                e.data = event.data;
                eventTarget.dispatchEvent(e);
            };
            ws.onerror = function (event) {
                if (self.debug || QuantSocket.debugAll) {
                    console.debug('QuantSocket', 'onerror', self.url, event);
                }
                eventTarget.dispatchEvent(generateEvent('error'));
            };
        };

        if (this.automaticOpen == true) {
            this.open(false);
        }

        this.send = function (data) {
            if (ws) {
                if (self.debug || QuantSocket.debugAll) {
                    console.debug('QuantSocket', 'send', self.url, data);
                }
                return ws.send(data);
            } else {
                throw 'INVALID_STATE_ERR : Pausing to reconnect websocket';
            }
        };
        this.touch = function (e) {
            var data = self.breatheParams;
            this.send(JSON.stringify(data));
            self.touch_timeout = setTimeout(function () {
                self.touch();
            }, self.breatheTime);
        };

        this.close = function (code, reason) {
            // Default CLOSE_NORMAL code
            if (typeof code == 'undefined') {
                code = 1000;
            }
            forcedClose = true;
            if (ws) {
                ws.close(code, reason);
            }
        };

        this.refresh = function () {
            if (ws) {
                ws.close();
            }
        };
    }

    QuantSocket.prototype.onopen = function (event) {};
    QuantSocket.prototype.onclose = function (event) {};
    //状态
    QuantSocket.prototype.onconnecting = function (event) {};
    QuantSocket.prototype.onmessage = function (event) {};
    QuantSocket.prototype.onerror = function (event) {};

    QuantSocket.debugAll = false;

    QuantSocket.CONNECTING = WebSocket.CONNECTING;
    QuantSocket.OPEN = WebSocket.OPEN;
    QuantSocket.CLOSING = WebSocket.CLOSING;
    QuantSocket.CLOSED = WebSocket.CLOSED;

    return QuantSocket;
}();