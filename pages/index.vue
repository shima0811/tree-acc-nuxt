<template>
    <div class="p-5">
        <div class="d-flex justify-content-between bg-info">
            <div class="p-2">جدول حساب ها</div>
            <div class="mt-2 d-flex crudIcons">
                <div title="اضافه کردن" v-if="treemode" data-bs-toggle="modal" data-bs-target="#addGroup"
                    @click="setIsNew(true)">
                    <i class="bi bi-plus-lg m-1"></i>
                </div>
                <div>
                    <i class="bi bi-pen m-1" title="ویرایش" data-bs-toggle="modal"
                        :data-bs-target="this.treemode ? '#addGroup' : '#addAccount'" @click="setIsNew(false)"></i>
                </div>
                <div data-bs-toggle="modal" data-bs-target="#delete" @click="setIsNew(false)">
                    <i class="bi bi-trash3 m-1" title="delete"></i>
                </div>
            </div>
        </div>
        <div class="my-2">
            <div class="accTree border-bottom" id="mainTree">

            </div>
        </div>

        <AccFormTreeAdd :selectedRow="selectedRow" @refresh="accTree" :isNew="isNew" />
        <AccFormAccount :updateCount="refreshTreeList" :selectedRow="this.selectedAccount" @refresh="accTree" :isNew="isNew" />
        <div class="modal fade text-left " id="delete" tabindex="-1" role="dialog" aria-labelledby="myModalLabel20"
            aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-primary">
                        <h5 class="modal-title white" id="myModalLabel160">حذف ردیف فاکتور</h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>

                    <div class="modal-body col-12">
                        <div class="mt-1">
                            <p>آیا از حذف {{ treemode ? selectedRow.name : selectedAccount.name }} اطمینان دارید ؟</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btnSet btnCancel d-flex" data-bs-dismiss="modal">
                            <span>بستن</span>
                        </button>
                        <button id="saveUserBtn" type="button" class="btnSet btnAdd ml-1 d-flex" data-bs-dismiss="modal"
                            @click.prevent="onDelete()">
                            <span>ثبت</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <ul class="dropdown-menu" id="context-menu" @click="hideContextMenu">
            <li data-bs-toggle="modal" data-bs-target="#addGroup" v-if="this.treemode" @click="setIsNew(true)">اضافه کردن
                زیر شاخه </li>
            <li v-if="this.treemode" data-bs-toggle="modal" data-bs-target="#addAccount" @click="setIsNew(true)">اضافه کردن
                حساب معین</li>
            <li data-bs-toggle="modal" data-bs-target="#delete" v-if="this.treemode" @click="setIsNew(false)">حذف کردن شاخه
            </li>
            <li v-if="!this.treemode" data-bs-toggle="modal" data-bs-target="#addAccount" @click="setIsNew(false)">ویرایش
                حساب معین</li>
            <li v-if="!this.treemode" data-bs-toggle="modal" data-bs-target="#delete" @click="setIsNew(false)">حذف حساب
                معین</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedRow: { id: '' },
            parentId: '',
            createCount: 0,
            treemode: true,
            selectedAccount: {},
            isNew: true,
            refreshTreeList:0
        }
    },
    created() {

    },
    mounted() {
        this.accTree()
        document.addEventListener('click', () => {
            this.hideContextMenu()
        })


    },
    methods: {
        setIsNew(_isNew) {
            this.isNew = _isNew
            if (_isNew) {
                this.selectedRow.pastName = this.selectedRow.name
                this.selectedRow.name = ''
            }
            else {
                this.selectedRow.name = this.selectedRow.name && this.selectedRow.name.length > 0 ? this.selectedRow.name : this.selectedRow.pastName
            }
        }
        ,
        async onDelete() {
            // let res = await this.$fn.CallApi('delete', this.treemode ? 'acctree/delete/' + this.selectedRow.id : 'accaccount/delete/' + this.selectedAccount.id, true)
            // if (res.isok) {
            //     this.$fn.SuccessToastify(res.data.message)
            //     await this.accTree()
            // }
            // else
            //     this.$fn.ErrorToastify(res.data.message)
        },
        setCurrent(_div) {
            document.querySelectorAll('.current').forEach(el => {
                el.classList.remove('current');
            })
            _div.classList.add('current')
        }
        ,
        selectItem(_item, _mode) {
            console.log("11111111111111", _item, _mode)
            if (_mode) {
                this.selectedRow = _item
                this.selectedAccount = { treeId: _item.id }
            }
            else {
                this.selectedAccount = _item
            }
            this.treemode = _mode
        },
        showContextMenu(_x, _y) {
            document.getElementById('context-menu').style.display = 'block'
            let width = document.getElementById('context-menu').offsetWidth
            //رفع مشکل خارج شدن از صفحه
            let positionX = window.innerWidth < width + _x ? _x - width : _x
            document.getElementById('context-menu').style.top = _y + 'px'
            document.getElementById('context-menu').style.left = positionX + 'px'
        },
        hideContextMenu() {
            document.getElementById('context-menu').style.display = 'none'
        },
        async accTree() {
            this.refreshTreeList++
            let _tree = document.getElementById('mainTree')
            _tree.innerHTML = ''
            let res = await this.$fn.CallApi('get', 'acctree/nestedlist', false)

            if (res.isok) {
                let x = res.data
                x.forEach(item => {
                    item.child = JSON.parse(item.child) || []
                    item.account = JSON.parse(item.account) || []
                })
                console.log(x);
                let _ul = await this.createNestedElement(x)
                _tree.appendChild(_ul)
                if (this.createCount == 0)
                    document.head.innerHTML +=
                        `<style>
                    .accTree .current{
                        background-color:#e7f0f6;
                    }
                    .accTree ul{
                        margin:0 !important;
                        padding:0 !important;
                    }

                .accTree li .icon {
                    color: #2E388F;
                    width: 30px;
                    height:30px;
                    position: relative;
                }

                    .accTree li .icon::after {
                        content: '\\F64D';
                        font-weight: 900;
                        font-family: 'bootstrap-icons' !important;
                        position: absolute;
                        top: 10%;
                    }
                    
                    
                    .accTree .icon.openSub::after{
                        content: '\\F63B';
                }
                .accTree .icon.free::after{
                    content:'\\F309'
                }
                .accTree .icon.star::after{
                    content:'\\F589'
                }
              

               .accTree li ul{
                    width: 100%;
                    height: 0;
                    max-height: 0px;
                    overflow: hidden;
                    opaity:0;
                    transition: max-height 0.4s, height 0.4s ,opacity:0.2s;
                }
         
                .accTree li {
                    color: rgb(56, 56, 56);
                    position:relative;
                    border-bottom: 1px solid #b9b9b9;
                  
                }
                .accTree ul>li:nth-last-child(1){
                    border-bottom: unset;
                }
                .accTree li ul.open {
                        padding-right: 15px!important;
                        max-height: 200vh;
                        height: 100%;
                        opacity:1;
                        transition: max-height 0.4s, height 0.4s , opacity:0.2s;
                        border-top: 1px solid #b9b9b9;

                    }
                    .liContainer{
                        display:flex;
                        align-items:center;
                        padding: 10px 0;
                    }
                    .liContainer  .title{
                        margin-right:10px;
                    width:100%;
                   color:#2c3891;
                   font-weight: 500;
                }
                    .liContainer  .tafsil{
                        width:100%;
                    max-width:200px;
                   color:#2c3891;
                   font-weight: 500;
                }


                </style>`
            }
            this.createCount++
        },
        async createNestedElement(_data) {

            let _ul = document.createElement('ul')
            let THIS = this
            _ul.classList.add('w-100')

            for await (let item of _data) {
                let _subUl = null
                let _accTafsil = null
                let _li = document.createElement('li')
                let _title = document.createElement('div')
                _title.classList.add('title')
                _title.innerText += `${item.name}`
                let _icon = document.createElement('div')
                _icon.classList.add('icon')
                let _titlecontainer = document.createElement('div')
                _titlecontainer.classList.add('liContainer')
                //اضافه کردن زیرگروه ها
                if (item.child && item.child.length > 0) {
                    _subUl = await this.createNestedElement(item.child)
                }
                //اضافه کردن معین ها
                else if (item.account && item.account.length > 0) {
                    if (!_subUl) {
                        _subUl = document.createElement('ul')
                    }
                    for await (let el of item.account) {
                        let _accLi = document.createElement('li')
                        let _accTitle = document.createElement('div')
                        _accTitle.classList.add('title')
                        let _accDiv = document.createElement('div')
                        _accDiv.classList.add('liContainer')
                        _accTitle.innerText += `${el.name}`
                        let _accIcon = document.createElement('div')
                        _accTafsil = document.createElement('div')
                        _accTafsil.innerText = el.tafsil
                        _accTafsil.classList.add('tafsil')
                        _accIcon.classList.add('icon')
                        _accIcon.classList.add('star')
                        _accDiv.appendChild(_accIcon)
                        _accDiv.appendChild(_accTitle)
                        _accDiv.appendChild(_accTafsil)
                        _accLi.appendChild(_accDiv)
                        _subUl.appendChild(_accLi)
                        _accTitle.addEventListener('click', (e) => {
                            e.stopPropagation()
                            THIS.selectItem(el, false)
                            THIS.setCurrent(_accDiv)
                        })
                        _accTitle.addEventListener('contextmenu', (e) => {
                            THIS.setCurrent(_accDiv, el)
                            e.preventDefault()
                            console.log('222222222', el);
                            THIS.selectItem(el, false)
                            THIS.showContextMenu(e.pageX, e.pageY)
                        })
                    }

                }
                //حالت بدون زیر محموعه
                else {
                    _icon.classList.add('free')
                }
                //اضافه کردن موارد ساخته شده به li
                _titlecontainer.appendChild(_icon)
                _titlecontainer.appendChild(_title)
                _li.appendChild(_titlecontainer)
                if (_subUl) {
                    _li.appendChild(_subUl)
                    _icon.onclick = () => {
                        _icon.classList.toggle('openSub')
                        _subUl.classList.toggle('open')
                    }
                }

                _titlecontainer.addEventListener('click', (e) => {
                    e.stopPropagation()
                    THIS.hideContextMenu()
                    THIS.selectItem(item, true)
                    THIS.setCurrent(_titlecontainer)
                })
                _titlecontainer.addEventListener('contextmenu', (e) => {
                    e.preventDefault()
                    console.log('3333333333', item);
                    THIS.selectItem(item, true)
                    THIS.setCurrent(_titlecontainer)
                    THIS.showContextMenu(e.pageX, e.pageY)
                })
                _ul.appendChild(_li)
            }
            return _ul
        }
    },


}
</script>


<style scoped lang="scss">
#context-menu {
    display: none;
    position: absolute;
    z-index: 99999;
    border: 1px solid #505050;
    background-color: #5c6572;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 10px;
}

#context-menu li {
    padding: 10px;
    color: #fff;
    cursor: pointer;
}

.accTree .current {
    background-color: #ffcb00
}

.accTree li>.icon {
    color: #2E388F;
    width: 30px;
    height: 100%;
    position: relative;
}

.accTree li>.icon::after {
    content: '\\F63B';
    font-weight: 900;
    font-family: 'bootstrap-icons' !important;
    position: absolute;
    top: 10%;
}


.accTree .icon.openSub::after {
    content: '\\F64D';
}

.accTree li>ul {
    width: 100%;
    height: 0;
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.4s, height 0.4s;
}

.accTree li {
    color: rgb(56, 56, 56);
    border-bottom: 1px solid #b9b9b9;
    padding: 10px 0;
    position: relative;
}

.accTree li ul.open {
    padding: 10px 12px 5px 0 !important;
    max-height: 200vh;
    height: 100%;
    transition: max-height 0.4s, height 0.4s;
}
</style>
