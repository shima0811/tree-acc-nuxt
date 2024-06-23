<template>
  <div id="app" class="acc-layout">
    <nav class="nav-acc-top">

      <div class="toggle-acc" @click="extendMenu">
      </div>
      <div class="acc-logo">
      </div>
      <nuxt-link to="/admin">
        <div class="d-flex"> <div class=" quitAcc pt-3">خروج از حسابداری </div><div class="go-back "></div>
        </div>
      </nuxt-link>
    </nav>
    <div class="acc-main">
      <nav :class="[extendedMenu ? 'extended' : '', 'nav-acc-rigth']">
        <ul class="acc-menu">
          <li class="acc-menu-item acc-dropdown">
            <nuxt-link to="#">
              <div class="acc-icon ">
                <img src="/assets/images/icon/budget.png" alt="">
              </div>
              <div class="acc-menu-item-title">
                حسابداری
              </div>
            </nuxt-link>
            <ul class="acc-submenu">
              <li class="acc-menu-item ">
                <nuxt-link to="#">
                  <div class="acc-icon ">
                    <img src="/assets/images/icon/adddoc.png" alt="">
                  </div>
                  <div class="acc-menu-item-title">
                    ایجاد سند جدید
                  </div>
                </nuxt-link>
              </li>
              <li class="acc-menu-item current">
                <nuxt-link to="#">
                  <div class="acc-icon ">
                    <img src="/assets/images/icon/doclist.png" alt="">
                  </div>
                  <div class="acc-menu-item-title">
                    لیست اسناد
                  </div>
                </nuxt-link>
              </li>
              <li class="acc-menu-item ">
                <nuxt-link to="#">
                  <div class="acc-icon ">
                    <img src="/assets/images/icon/calendar.png" alt="">
                  </div>
                  <div class="acc-menu-item-title">
                    بستن سال مالی
                  </div>
                </nuxt-link>
              </li>
              <li class="acc-menu-item ">
                <nuxt-link to="#">
                  <div class="acc-icon ">
                    <img src="/assets/images/icon/table.png" alt="">
                  </div>
                  <div class="acc-menu-item-title">
                    جدول حسابها
                  </div>
                </nuxt-link>
              </li>
            </ul>
          </li>

          <li class="acc-menu-item acc-dropdown">
            <nuxt-link to="#">
              <div class="acc-icon ">
                <img src="/assets/images/icon/bank.png" alt="">
              </div>
              <div class="acc-menu-item-title">
                بانکها
              </div>
            </nuxt-link>
            <ul class="acc-submenu">
              <li class="acc-menu-item ">
                <nuxt-link to="#">
                  <div class="acc-icon ">
                    <img src="/assets/images/icon/adddoc.png" alt="">
                  </div>
                  <div class="acc-menu-item-title">
                    تعریف بانک
                  </div>
                </nuxt-link>
              </li>
              <li class="acc-menu-item ">
                <nuxt-link to="#">
                  <div class="acc-icon ">
                    <img src="/assets/images/icon/adddoc.png" alt="">
                  </div>
                  <div class="acc-menu-item-title">
                    دریافت
                  </div>
                </nuxt-link>
              </li>

              <li class="acc-menu-item ">
                <nuxt-link to="#">
                  <div class="acc-icon ">
                    <img src="/assets/images/icon/adddoc.png" alt="">
                  </div>
                  <div class="acc-menu-item-title">
                    پرداخت
                  </div>
                </nuxt-link>
              </li>

              <li class="acc-menu-item ">
                <nuxt-link to="#">
                  <div class="acc-icon ">
                    <img src="/assets/images/icon/adddoc.png" alt="">
                  </div>
                  <div class="acc-menu-item-title">
                    لیست ریز حساب
                  </div>
                </nuxt-link>
              </li>

            </ul>
          </li>



          <li class="acc-menu-item acc-dropdown">
            <nuxt-link to="#">
              <div class="acc-icon ">
                <img src="#" alt="">
              </div>
              <div class="acc-menu-item-title">
                اشخاص
              </div>
            </nuxt-link>
            <ul class="acc-submenu">
              <li class="acc-menu-item">
                <nuxt-link to="#">
                  <div class="acc-icon">
                    <img src="/assets/images/icon/cashdesk.png" alt="">
                  </div>
                  <div class="acc-menu-item-title">
                    تعریف اشخاص
                  </div>
                </nuxt-link>
              </li>
              <li class="acc-menu-item ">
                <nuxt-link to="#">

                  <div class="acc-icon ">
                    <img src="/assets/images/icon/cashflow.png" alt="">
                  </div>
                  <div class="acc-menu-item-title">
                    دریافت
                  </div>
                </nuxt-link>
              </li>
              <li class="acc-menu-item ">
                <nuxt-link to="#">
                  <div class="acc-icon ">
                    <img src="/assets/images/icon/cashflow.png" alt="">
                  </div>
                  <div class="acc-menu-item-title">
                    پرداخت
                  </div>
                </nuxt-link>
              </li>
              <li class="acc-menu-item ">
                <nuxt-link to="#">
                  <div class="acc-icon ">
                    <img src="/assets/images/icon/cashflow.png" alt="">
                  </div>
                  <div class="acc-menu-item-title">
                    لیست ریز حساب ها
                  </div>
                </nuxt-link>
              </li>
            </ul>
          </li>

          <li class="acc-menu-item acc-dropdown">
            <nuxt-link to="#">
              <div class="acc-icon ">
                <img src="/assets/images/icon/profile.png" alt="">
              </div>
              <div class="acc-menu-item-title">
                حسابها
              </div>
            </nuxt-link>
            <ul class="acc-submenu">
              <li class="acc-menu-item ">
                <nuxt-link to="#">
                  <div class="acc-icon">
                    <img src="/assets/images/icon/cashdesk.png" alt="">
                  </div>
                  <div class="acc-menu-item-title">
                    صندوق ها
                  </div>
                </nuxt-link>
              </li>
              <li class="acc-menu-item  ">
                <nuxt-link to="#">
                  <div class="acc-icon ">
                    <img src="/assets/images/icon/cashflow.png" alt="">
                  </div>
                  <div class="acc-menu-item-title">
                    تنخواه گردان
                  </div>
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="acc-menu-item">
            <nuxt-link to="#">
              <div class="acc-icon ">
                <img src="/assets/images/icon/setting.png" alt="">
              </div>
              <div class="acc-menu-item-title">
                تنظیمات
              </div>
            </nuxt-link>
          </li>
          <li class="acc-menu-item acc-dropdown">
            <nuxt-link to="#">
              <div class="acc-icon ">
                <img src="/assets/images/icon/report.png" alt="">
              </div>
              <div class="acc-menu-item-title">
                گزارشات
              </div>
            </nuxt-link>
            <ul class="acc-submenu">
              <li class="acc-menu-item ">
                <nuxt-link to="#">
                  <div class="acc-icon">
                    <img src="/assets/images/icon/cashdesk.png" alt="">
                  </div>
                  <div class="acc-menu-item-title">
                    تفصیل بر اساس زمان
                  </div>
                </nuxt-link>
              </li>
              <li class="acc-menu-item ">
                <nuxt-link to="#">
                  <div class="acc-icon">
                    <img src="/assets/images/icon/cashdesk.png" alt="">
                  </div>
                  <div class="acc-menu-item-title">
                     تفصیل بر اساس حساب
                  </div>
                </nuxt-link>
              </li>

            </ul>
          </li>
          <li class="acc-menu-item ">
            <nuxt-link to="#">
              <div class="acc-icon ">
                <img src="/assets/images/icon/check-book.png" alt="">
              </div>
              <div class="acc-menu-item-title">
                چک
              </div>
            </nuxt-link>
          </li>

        </ul>
      </nav>
      <div class="acc-content">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      extendedMenu: false,
    }
  },
  mounted() {
    let THIS = this
    let accMenuItems = document.querySelectorAll('.acc-menu-item')
    accMenuItems.forEach((item) => {
      item.addEventListener('click', function () {
        event.stopPropagation()
        accMenuItems.forEach((item) => item.classList.remove('current'))
        if (this.querySelector('.acc-submenu')) {
          if (THIS.extendedMenu) {
            this.classList.toggle('acc-focus-item')
            this.querySelector('.acc-submenu').classList.toggle('acc-show-sub')
          }
        } else {
          this.classList.add('current')
          if (window.innerWidth < 768)
            setTimeout(() => {
              THIS.extendedMenu = false
            }, 500)
        }
      })
      item.addEventListener('click', function () {
        if (!document.querySelector('.extended')) {
          if (!document.querySelector('#slot')) {
            let div = document.createElement('ul')
            div.id = 'slot'
            div.innerHTML = this.innerHTML
            div.classList.add('sidemenu')
            div.style.position = 'absolute'
            div.style.margin = '0'
            div.style.padding = '10px'
            div.style.zIndex = '5'
            div.style.background = '#e7f0f6'
            div.style.top =
              window.pageYOffset + this.getBoundingClientRect().top + 'px'
            div.style.right = '50px'
            div.style.boxShadow =
              ' rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'
            div.style.borderRadius = '10px'
            div.onclick = () => {
              div.remove()
            }
            div.onmouseleave = () => {
              setTimeout(() => {
                div.remove()
              }, 300)
            }
            document.querySelector('#app').appendChild(div)
          } else {
            document.querySelector('#slot').style.top =
              window.pageYOffset + this.getBoundingClientRect().top + 'px'
            document.querySelector('#slot').innerHTML = this.innerHTML
          }
        }
      })
    })
    document
      .getElementsByClassName('acc-content')[0]
      .addEventListener('click', (e) => {
        document.getElementById('slot')?.remove()
      })
  },

  methods: {
    extendMenu() {
      document.querySelectorAll('.acc-focus-item').forEach(item => {
        item.classList.remove('acc-focus-item')
      })
      document.querySelectorAll('.acc-show-sub').forEach(item => {
        item.classList.remove('acc-show-sub')
      })

      this.extendedMenu = !this.extendedMenu

      document.getElementById('slot')?.remove()
    },
  },
}
</script>

<style scoped lang="scss">
ul {
  margin: 0 !important;
  padding: 0 !important;
}

.acc-layout {
  font-family: 'vazir';

  * {
    color: rgb(97, 97, 97);
  }

  .nav-acc-top {
    width: 100%;
    height: 60px;
    background-color: #e7f0f6;
    display: flex;
    flex-wrap: nowrap;
    padding: 0 10px;
    border-bottom: 1px solid #ccc;

    @media screen and (max-width: 768px) {
      position: absolute;
      top: 0;
    }

    .toggle-acc {
      width: 50px;
      height: inherit;
      position: relative;

      &::after {
        content: '\F479';
        position: absolute;
        top: 0;
        right: 0;
        font-size: 25px;
        color: #2c3891;
        font-family: 'bootstrap-icons';
        line-height: 60px;
      }
    }

    .acc-logo {
      height: inherit;
      width: 100%;

      img {
        height: inherit;
        object-fit: cover;
      }

      @media screen and (max-width: 768px) {
        //100 vw - 60 px -60px
        width: calc(100% - 120px);

        @media screen and (max-width:768px) {
          width: 0px;
          overflow-x: hidden;
          position: absolute;
          top: 60px;
          right: 0;
          min-width: 0;
        }

        &.extended {
          min-width: 250px;
          transition: 0.4s;

          .acc-menu .acc-menu-item {
            &.acc-dropdown>a::after {
              content: '\F229';
              position: absolute;
              font-family: 'bootstrap-icons';
              left: 0px;
              color: #2C3891;
              transition: 0.4s;
            }

            a {
              justify-content: flex-start;


              .acc-menu-item-title {
                display: block;
                animation: fadeIn 1.2s;
              }
            }

            .acc-submenu {
              &.acc-show-sub {
                position: unset;

              }
            }
          }
        }

        .acc-menu {
          margin: 0 !important;
          padding: 10px 5px !important;
          font-weight: 500;

          .acc-menu-item {
            padding: 10px 10px 0 10px;
            position: relative;

            a {
              position: relative;
              justify-content: center;
              display: flex;
              flex-wrap: nowrap;
              align-items: center;
              height: 40px;
              width: 100%;


              .acc-icon {
                position: relative;
                width: 24px;
                height: 100%;
                display: flex;
                align-items: center;


                &::after {
                  position: absolute;
                  right: 0;
                  top: 0;
                  font-size: 20px;
                  font-family: bootstrap-icons;
                  color: #2C3891;
                  //a heigth
                  line-height: 40px;
                }

                &.has-extend {
                  content: '\F229';
                }




              }

              .acc-menu-item-title {
                padding-right: 10px;
                display: none;
                //a heigth
                line-height: 40px;
              }
            }

            &.current {
              border-radius: 8px;
              box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
            }

            &.acc-focus-item {
              font-weight: 700;

              >a::after {
                transform: rotate(180deg);
                transition: 0.4s;
              }
            }

            .acc-submenu {
              font-weight: 500;
              // display: none;
              max-height: 0;
              transition: 0.4s;
              animation: fadeOut 0.7s;
              overflow: hidden;


              &.acc-show-sub {
                // display: block;
                margin: 0 !important;
                padding: 10px 5px !important;
                max-height: 500px;
                transition: 0.4s;
                animation: fadeIn 0.3s;
              }
            }
          }


        }
      }

      .acc-content {
        width: 100%;
        height: calc(100vh - 60px);
        overflow-y: auto;
      }
    }
  }

  .go-back {
    // width: 50px;
    height: inherit;
    position: relative;

    &::after {
      content: '\F12E';
      position: absolute;
      top: 0;
      left: 0;
      font-size: 25px;
      color: #2c3891;
      line-height: 60px;
      font-family: 'bootstrap-icons';
    }
  }
}

.acc-main {
  display: flex;
  flex-wrap: nowrap;

  .nav-acc-rigth {
    background-color: #e7f0f6;

    //100vh - acc-top
    height: calc(100vh - 60px);
    overflow-y: auto;
    min-width: 30px;
    width: 50px;
    transition: 0.4s;

    @media screen and (max-width: 768px) {
      width: 0px;
      overflow-x: hidden;
      position: absolute;
      top: 60px;
      right: 0;
      min-width: 0;
    }

    &.extended {
      min-width: 250px;
      transition: 0.4s;

      .acc-menu .acc-menu-item {
        &.acc-dropdown>a::after {
          content: '\F229';
          position: absolute;
          font-family: 'bootstrap-icons';
          left: 0px;
          color: #2c3891;
          transition: 0.4s;
        }

        a {
          justify-content: flex-start;

          .acc-menu-item-title {
            display: block;
            animation: fadeIn 1.2s;
          }
        }

        .acc-submenu {
          &.acc-show-sub {
            position: unset;
          }
        }
      }
    }

    .acc-menu {
      margin: 0 !important;
      padding: 10px 5px !important;
      font-weight: 500;

      .acc-menu-item {
        padding: 10px 10px 0 10px;
        position: relative;

        a {
          position: relative;
          justify-content: center;
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          height: 40px;
          width: 100%;

          .acc-icon {
            position: relative;
            width: 24px;
            height: 100%;
            display: flex;
            align-items: center;

            &::after {
              position: absolute;
              right: 0;
              top: 0;
              font-size: 20px;
              font-family: bootstrap-icons;
              color: #2c3891;
              //a heigth
              line-height: 40px;
            }

            &.has-extend {
              content: '\F229';
            }
          }

          .acc-menu-item-title {
            padding-right: 10px;
            display: none;
            //a heigth
            line-height: 40px;
          }
        }

        &.current {
          border-radius: 8px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
            rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        }

        &.acc-focus-item {
          font-weight: 700;

          >a::after {
            transform: rotate(180deg);
            transition: 0.4s;
          }
        }

        .acc-submenu {
          font-weight: 500;
          // display: none;
          max-height: 0;
          transition: 0.4s;
          animation: fadeOut 0.7s;
          overflow: hidden;

          &.acc-show-sub {
            // display: block;
            margin: 0 !important;
            padding: 10px 5px !important;
            max-height: 500px;
            transition: 0.4s;
            animation: fadeIn 0.3s;
          }
        }
      }
    }
  }

  .acc-content {
    width: 100%;
    height: calc(100vh - 60px);
    overflow-y: auto;
  }
}


#slot {
  padding: 0 5px;

  .acc-submenu {
    font-weight: 500;
    // max-height: 0;
    transition: 0.4s;
    // animation: fadeOut 0.7s;
    overflow: hidden;
    border-top: 1px solid #ccc;
  }

  .acc-menu-item {
    padding: 10px 10px 0 10px;
    position: relative;
  }

  a {
    position: relative;
    justify-content: flex-start;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    height: 40px;
    width: 100%;

    .acc-icon {
      position: relative;
      width: 24px;
      height: 100%;
      display: flex;
      align-items: center;

      &::after {
        position: absolute;
        right: 0;
        top: 0;
        font-size: 20px;
        font-family: bootstrap-icons;
        color: #2c3891;
        //a heigth
        line-height: 40px;
      }

      &.has-extend {
        content: '\F229';
      }

      &.newdoc::after {
        content: '\F3AB';
      }
    }
  }

  .acc-menu-item-title {
    padding-right: 10px;
    display: block;
    //a heigth
    line-height: 40px;
  }
}
.quitAcc{
  font-size: 10px;
}
</style>
