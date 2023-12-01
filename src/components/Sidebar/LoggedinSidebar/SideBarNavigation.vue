<script setup lang="ts">
  import SettingsLogo from "../../icons/IconSettings.vue"
  import LineIcon from "../../icons/IconLine.vue"
  import RegisteredNav from "@/components/Sidebar/LoggedinSidebar/RegisteredNav.vue";
  import IconLogout from "@/components/icons/IconLogout.vue";
  import IconChampionsLab from "@/components/icons/IconChampionsLab.vue";

  import {useSidebarOpen} from "@/stores/sidebarOpen";
  const openBar = useSidebarOpen()
  import {useRouter} from "vue-router";
  const router = useRouter();
  const goToHome = () => {
    router.push('/')
  };
</script>

<template>
    <nav :class="openBar.isSidebarOpen ? 'w-64' : 'w-24'"
        class=" mx-auto bg-white rounded-r-3xl flex flex-col justify-between items-center">
      <div class=" mt-11">
        <div>
            <IconChampionsLab @click="openBar.toggleSidebar" class="mx-auto "/>
        </div>
        <div class=" mt-7">
          <LineIcon />
        </div>
        <div >
          <RegisteredNav />
        </div>
      </div>
      <div>
        <div>
          <SettingsLogo class="mx-auto"/>
          <icon-logout @click="goToHome()" class=" mx-auto mb-9 mt-11 cursor-pointer"/>
        </div>


      </div>
    </nav>

</template>