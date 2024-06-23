<template>
    <div class="modal fade text-left w-100" id="addAccount" tabindex="-1" role="dialog" aria-labelledby="myModalLabel20"
        aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog  modal-dialog-centered modal-dialog-scrollable " role="document">

            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h5 class="modal-title white" id="myModalLabel160">
                        اضافه کردن حساب معین
                    </h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>

                <div class="modal-body col-12">
                    <form id="accountForm">
                        <div class="form-group col-12">
                            <label for="verify">نام حساب</label>
                            <input type="text" name="name" class="form-control" v-model="selectedRow.name" />
                        </div>
                        <div class="form-group mt-2" v-if="isNew">
                            <label for="verify">نام شاخه</label>
                            <select name="treeId" class="form-select" v-model="selectedRow.treeId">
                                <option :value="item.id" v-for="item in treeList" :key="item.id">
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>
                        <div class="form-group mt-2">
                            <label for="verify">ماهیت حساب</label>
                            <select name="nature" class="form-select" v-model="selectedRow.nature">
                                <option :value="item.value" v-for="(item,index) in natures" :key="index">
                                    {{ item.title }}
                                </option>
                            </select>
                        </div>
                        <div class="form-group mt-2">
                            <label for="verify">نوع حساب</label>
                            <select name="kind" class="form-select" v-model="selectedRow.kind">
                                <option :value="item.value" v-for="(item,index) in kinds" :key="index">
                                    {{ item.title }}
                                </option>
                            </select>
                        </div>
                        <div class="form-group mt-2" v-if="isNew">
                            <label for="verify"> جدول تفضیل مرتبط</label>
                            <select name="configTableId" class="form-select" v-model="selectedRow.configTableId">
                                <option :value="item.id" v-for="item in tables" :key="item.id">
                                    {{ item.title }}
                                </option>
                            </select>
                        </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btnSet btnCancel d-flex" data-bs-dismiss="modal">
                        <span>بستن</span>
                    </button>
                    <button @click="onSaveAccount()" id="saveUserBtn" type="button" class="btnSet btnAdd ml-1 d-flex"
                        data-bs-dismiss="modal">
                        <span>ثبت</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            treeList: [],
            natures: [],
            kinds: [],
            tables: [],
            treeList: [],
        }
    },
    props: {
        selectedRow: {
            type: Object
        },
        isNew: {
            type: Boolean
        },
        updateCount: {
            type: Number
        }
    },
    watch: {
        updateCount: {
            immediate: true,
            handler: async function () {
                await this.getTreeList()
            }
        }
    },
    async mounted() {
        await this.getTreeList()
        await this.getNatureList()
        await this.getTableList()
        await this.getkindList()
    },
    methods: {
        async onSaveAccount() {
            let data = await this.$fn.FormToJson('accountForm')
            let res = this.isNew ? await this.$fn.CallApi('post', 'accaccount/add', true, data) :
            await this.$fn.CallApi('put', 'accaccount/edit/'+this.selectedRow.id, true, data) 
            if (res.isok) {
                this.$fn.SuccessToastify('عملیات با موفقیت انجام شد.')
                await this.getTreeList()
                this.$emit('refresh')
            } else {
                this.$fn.ErrorToastify('مشکلی پیش آمده، دوباره تلاش کنید.')
            }
        },
        async getNatureList() {
            let res = await this.$fn.CallApi('get', 'accNatureConfig/list', true)
            if (res.isok) {
                this.natures = res.data
            }
        },
        async getkindList() {
            let res = await this.$fn.CallApi('get', 'acckindConfig/list', true)
            if (res.isok) {
                this.kinds = res.data
            }
        },
        async getTableList() {
            let res = await this.$fn.CallApi('get', 'accTableNameConfig/list', true)
            if (res.isok) {
                this.tables = res.data
            }
        },
        async getTreeList() {
            let res = await this.$fn.CallApi('get', 'acctree/list/isnotparent', true)
            if (res.isok) {
                this.treeList = res.data
            }
        }
    }
}
</script>