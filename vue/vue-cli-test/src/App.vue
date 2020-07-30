<template>
  <div id="app">
    <div></div>
    <Menu :theme="theme3" active-name="1">
      <template v-for="item in subMenus">
        <Submenu :name="item.menuId" :key="item.name">
          <template slot="title">
            <Icon :type="item.remark" ></Icon>
            <span class="layout-text">{{item.title}}</span>
          </template>
          <template v-for="child in item.childMenus">
            <MenuItem
              :name="child.menuId"
              :key="child.name"
              :class="{'ivu-menu-item-active' :$route.path == child.address}"
            >
              <router-link class="rotuer-link-sub" :to="child.address" :key="child.menuId">
                <Icon :type="child.remark" ></Icon>
                <span class="layout-text">{{child.title}}</span>
              </router-link>
            </MenuItem>
          </template>
        </Submenu>
      </template>
    </Menu>
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "App",
  data() {
    return {
      subMenus: [
        {
          menuId: 106643,
          name: "refundMonitor",
          title: "公共管理",
          address: "/refundMonitor",
          orderNo: 5,
          type: 4,
          remark: "ios-settings",
          hasPermission: true,
          childMenus: [
            {
              menuId: 113129,
              name: "MessageTemplateConfig",
              title: "短信模板配置",
              address: "/MessageTemplateConfig",
              orderNo: 10,
              type: 4,
              remark: "chatbox-working",
              hasPermission: true,
              childMenus: [],
            },
            {
              menuId: 96747,
              name: "LogTemplateSetting",
              title: "日志模板管理",
              address: "/LogTemplateSetting",
              orderNo: 11,
              type: 4,
              remark: "folder",
              hasPermission: true,
              childMenus: [],
            },
            {
              menuId: 92743,
              name: "empTypeSetting",
              title: "员工配置",
              address: "/empTypeSetting",
              orderNo: 12,
              type: 4,
              remark: "wrench",
              hasPermission: true,
              childMenus: [],
            },
            {
              menuId: 96571,
              name: "publicManagement",
              title: "公告管理",
              address: "/publicManagement",
              orderNo: 13,
              type: 4,
              remark: "calendar",
              hasPermission: true,
              childMenus: [],
            },
            {
              menuId: 106465,
              name: "airlineReminding",
              title: "航司提醒配置",
              address: "/airlineReminding",
              orderNo: 14,
              type: 4,
              remark: "wrench",
              hasPermission: true,
              childMenus: [],
            },
            {
              menuId: 114686,
              name: "CustomeLogTemplate",
              title: "自定义日志模板管理",
              address: "/CustomeLogTemplate",
              orderNo: 15,
              type: 4,
              remark: "folder",
              hasPermission: true,
              childMenus: [],
            },
          ],
        },
      ],
       theme3: 'light'
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

</style>
