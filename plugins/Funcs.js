import axios from 'axios';

import bootstrap from "~/static/assets/js/bootstrap";
class Funcs {



    //===========================    
    async SetHeadConfig(_isaut) {
        let config = {
            'content-type': 'application/json'
        };
        if (_isaut) {
            let AuthStr = 'Bearer ' 
            config = {
                'content-type': 'application/json',
                'Authorization': AuthStr
            };
        }
        return config;
    }

    ReturnError(_error) {
        if (!(window.location.origin.indexOf('localhost') > -1))
            console.clear()
        if (_error.response && _error.response.status && _error.response.status == 404) {
            return {
                isok: false,
                data: {
                    message: "خطای مسیر"
                }
            }
        }
        if (_error.response && _error.response.status && _error.response.status == 401) {
            return {
                isok: false,
                data: {
                    message: "شما دسترسی لازم را ندارید ، مجددا وارد شوید"
                }
            }
        }
        else {
            if (_error.response && _error.response.data)
                return {
                    isok: false,
                    data: _error.response.data
                }
            else
                return {
                    isok: false,
                    data: {
                        message: "سرور در دسترس نمی باشد"
                    }
                }

        }
    }

    async PostApi(_url, _isaut, _data, _options) {
        let signal = _options.controller ? _options.controller.signal : ''
        let config = await this.SetHeadConfig(_isaut);
        const res = await axios.post(_url, _data, {
            headers: config,
            signal: signal
        })
            .then(response => {
                // if (response.data && response.data.toString().trim().length > 3)

                return {
                    isok: true,
                    data: response.data
                };

            })
            .catch(error => {
                return this.ReturnError(error);
            });
        if (_options.preloader)
            this.preloaderHandler(false)
        return res;
    }

    async PutApi(_url, _isaut, _data, _options) {
        let config = await this.SetHeadConfig(_isaut);
        const res = await axios.put(_url, _data, {
            headers: config
        })
            .then(response => {

                return {
                    isok: true,
                    data: response.data
                };

            })
            .catch(error => {
                return this.ReturnError(error);
            });
        if (_options.preloader)
            this.preloaderHandler(false)
        return res;
    }

    async GetApi(_url, _isaut, _options) {
        let config = await this.SetHeadConfig(_isaut);
        let signal = _options.controller ? _options.controller.signal : ''
        let cancelToken=_options.cancel?_options.cancel.token:''
        const res = await axios.get(_url, {
            headers: config,
            responseType: _url.includes('download') ? 'blob' : '',
            signal: signal,
            cancelToken:cancelToken
        })
            .then(response => {
                return {
                    isok: true,
                    data: response.data
                };

            })
            .catch(error => {
                if(axios.isCancel(error))
                return {isok:true ,data:[]}
                return this.ReturnError(error);
            });
        if (_options.preloader)
            this.preloaderHandler(false)
        return res;
    }

    async DeleteApi(_url, _isaut, _options) {
        let config = await this.SetHeadConfig(_isaut)
        const res = await axios.delete(_url, {
            headers: config
        })
            .then(response => {

                return {
                    isok: true,
                    data: response.data
                };

            }).catch(error => {
                return this.ReturnError(error)
            })
        if (_options.preloader)
            this.preloaderHandler(false)

        return res
    }




    async CallApi(_method, _url, _isaut, _data = null, _options = {}) {
    console.log("🚀 ~ Funcs ~ CallApi ~ _method:", _url)

        let result;
            let Url = 'https://af395c89-af57-4929-94a6-c5e6c80a6b16.mock.pstmn.io/'+ _url;
            if (Url == _url)
                _method = ''
            switch (_method.toLowerCase()) {
                case "get":
                    result = await this.GetApi(Url, _isaut, _options);
                    break;
                case "post":
                    result = await this.PostApi(Url, _isaut, _data, _options);
                    break;
                case "put":
                    result = await this.PutApi(Url, _isaut, _data, _options);
                    break;
                case "delete":
                    result = await this.DeleteApi(Url, _isaut, _options);
                    break;
                default:
                    return {
                        isok: false,
                        data: ''
                    };
            }
            if (result && !result.isok && _options.showalert) {
                try {
                    let text = result.data[0].value;
                    alert(text);
                } catch {
                }
            }

        return result;
    }

}


export default async (context, inject) => {
    // window.$fn = new Funcs();
    let fn = new Funcs();
    inject('fn', fn);
}