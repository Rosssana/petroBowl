<template>
  <q-page class="bg-blue-grey-1">
    <div class="row q-pa-xl justify-center">
      <div class="col-md-12 col-lg-11 q-pb-lg bg-white">
        <!-- titlee -->
        <div class="row q-pa-md q-pb-xl justify-around">
          <div class="col-11">
            <q-toolbar-title class="text-h3 text-primary text-left text-bold"
              style="height: 70px">
              Regular round: 1
            </q-toolbar-title>
          </div>
        </div>
        <!-- logos -->
        <div class="row q-mt-xs q-pa-md justify-center">
          <div class="col-6">
            <div class="row q-pa-sm justify-center">
              <div class="col-xs-8 col-sm-5 col-md-3 col-lg-2">
                <img src="~assets/UDO.png"
                  style="height: 150px">
              </div>
              <div class="col-12">
                <q-toolbar-title class="text-h3 text-center text-primary text-bold">
                  UDO 25
                </q-toolbar-title>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="row q-pa-sm justify-center">
              <div class="col-xs-8 col-sm-5 col-md-3 col-lg-2">
                <img src="~assets/LUZ.png"
                  style="height: 150px">
              </div>
              <div class="col-12">
                <q-toolbar-title class="text-h3 text-center text-primary text-bold">
                  LUZ 34
                </q-toolbar-title>
              </div>
            </div>
          </div>
        </div>
        <!-- competition time -->
        <div class="row q-pa-xs justify-center">
          <div class="col-xs-4 col-sm-3 col-md-3 col-lg-1">
            <q-btn size="50px"
              class="q-px-xl q-py-xs"
              align="center"
              outline
              disable
              label="10:00" />
          </div>
        </div>
        <!-- Score -->
        <div class="row q-mt-xs q-pa-md justify-center">
          <div class="col-6">
            <div class="row q-pa-sm justify-center">
              <div class="col-xs-8 col-sm-5 col-md-3 col-lg-2">
                <q-btn size="35px"
                  class="q-px-xl q-py-xs"
                  align="center"
                  outline
                  disable
                  label="175" />
              </div>
              <div class="col-12 q-mt-xs">
                <q-toolbar-title class="text-h3 text-center text-primary text-bold">
                  Score
                </q-toolbar-title>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="row q-pa-sm justify-center">
         <div class="col-xs-8 col-sm-5 col-md-3 col-lg-2">
                <q-btn size="35px"
                  class="q-px-xl q-py-xs"
                  align="center"
                  outline
                  disable
                  label="150" />
              </div>
              <div class="col-12 q-mt-xs">
                <q-toolbar-title class="text-h3 text-center text-primary text-bold">
                  Score
                </q-toolbar-title>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <q-toolbar>
      <img src="~assets/speTrans.png"
        class="q-mt-xs self-end"
        style="height: 150px">
      <q-space></q-space>
    </q-toolbar>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
