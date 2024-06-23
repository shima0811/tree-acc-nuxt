<template>

<div class="modal fade text-left w-100" id="addGroup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel20"
            aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
            <div class="modal-dialog  modal-dialog-centered modal-dialog-scrollable " role="document">

                <div class="modal-content">
                    <div class="modal-header bg-primary">
                        <h5 class="modal-title white" id="myModalLabel160">
                            {{ isNew ? 'اضافه کردن دسته' : 'ویرایش دسته' }}
                        </h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>

                    <div class="modal-body col-12">
                        <form id="newGroup">
                            <div class="form-group col-12">
                                <label for="verify">نام گروه</label>
                                <input type="text" name="name" class="form-control" v-model="selectedRow.name" />
                            </div>
                            <div class="form-group mt-2" v-if="isNew">
                                <label for="verify">نام شاخه</label>
                                <select name="parentId" class="form-select" v-model="selectedRow.id">
                                    <option value=""></option>
                                    <option :value="selectedRow.id" v-for="selectedRow in treeList" :key="selectedRow.id">
                                        {{ selectedRow.name }}
                                    </option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btnSet btnCancel d-flex" data-bs-dismiss="modal">
                            <span>بستن</span>
                        </button>
                        <button @click="onSaveGroup()" id="saveUserBtn" type="button" class="btnSet btnAdd ml-1 d-flex"
                            data-bs-dismiss="modal">
                            <span>ثبت</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default{
    data(){
        return{
            treeList: [],
        }
    },
    props:{
        selectedRow:{
            type:Object
        },
        isNew:{
            type:Boolean
        }
    },
    mounted(){
        this.getTreeList()
    },
    methods:{
        async onSaveGroup() {
            // let data = await this.$fn.FormToJson('newGroup')
            // let res =this.isNew ? await this.$fn.CallApi('post', 'acctree/add', true, data) : await this.$fn.CallApi('put', 'acctree/edit/'+this.selectedRow.id, true, data)
            // if (res.isok) {
            //     this.$fn.SuccessToastify('عملیات با موفقیت انجام شد.')
            //     await this.getTreeList()
            //     this.$emit('refresh')
            // } else {
            //     this.$fn.ErrorToastify('مشکلی پیش آمده، دوباره تلاش کنید.')
            // }

        },
        async getTreeList() {
            // let res = await this.$fn.CallApi('get', 'acctree/list/havenotaccount', true)
            // if (res.isok) {
            //     this.treeList = res.data
            // }
        },
    }
}
</script>