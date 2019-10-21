<template>
  <q-page class="bg-grey-1">
    <img src="~assets/llaves_final.png"
      style="position: absolute; width: 100%; height: 100%" />
    <div class="row q-pa-lg">
      <!-- Clasificados lado left -->
      <div class="col-2 q-ml-xl">
        <div class="row">
          <div class="col-12 q-ml-xl q-mt-xs">
            <q-btn size="20px"
              class="q-px-xl q-ml-xl q-py-xs"
              align="center"
              color="primary"
              label="UDO 25" />
          </div>
          <div class="button1 col-12 q-mt-xs">
            <q-btn size="20px"
              class="q-px-xl q-py-xs"
              align="center"
              outline
              color="primary"
              label="1000" />
          </div>
          <div class="col-12 q-ml-xl q-mt-xs">
            <q-btn size="20px"
              class="button2 q-px-xl q-ml-xl q-py-xs"
              align="center"
              color="primary"
              label="UDO 25" />
          </div>
          <div class="button1 col-12 q-mt-xs">
            <q-btn size="20px"
              class="q-px-xl q-py-xs"
              align="center"
              outline
              color="primary"
              label="1000" />
          </div>
        </div>
      </div>
      <!-- Ganador lado left -->
      <div class="col-2 q-ml-xl">
        <div class="row">
          <div class="col-12 q-mt-xs">
            <q-btn size="20px"
              class="button3 q-px-xl q-ml-xl q-py-xs"
              align="center"
              color="negative"
              label="UDO 25" />
          </div>
          <div class="button4 col-12 q-mt-xs">
            <q-btn size="20px"
              class="q-ml-xl q-px-xl q-py-xs"
              align="center"
              outline
              color="negative"
              label="1000" />
          </div>
          <div class="col-12 q-mt-xs">
            <q-btn size="20px"
              class="button6 q-px-xl q-ml-xl q-py-xs"
              align="center"
              color="negative"
              label="UDO 25" />
          </div>
          <div class="button4 col-12 q-mt-xs">
            <q-btn size="20px"
              class="q-ml-xl q-px-xl q-py-xs"
              align="center"
              outline
              color="negative"
              label="1000" />
          </div>
        </div>
      </div>
      <!-- GANADOR Y 3er puesto- Center -->
      <div class="col-2 q-ml-lg">
        <div class="row">
          <div class="col-12 q-mt-xl">
            <q-btn size="30px"
              class="q-px-xl q-ml-md q-py-xs"
              align="center"
              color="primary"
              label="UDO 25" />
          </div>
          <div class="button5 col-12 q-mt-xl">
            <q-btn size="20px"
              class="q-px-xl  q-ml-md q-py-xs"
              align="center"
              color="primary"
              label="UDO 25" />
          </div>
        </div>
      </div>
      <!-- Ganador lado right -->
      <div class="col-2 q-ml-xl">
        <div class="row">
          <div class="col-12 q-mt-xs">
            <q-btn size="20px"
              class="button3 q-px-xl q-ml-md q-py-xs"
              align="center"
              color="negative"
              label="UDO 25" />
          </div>
          <div class="button8 col-12 q-mt-xs">
            <q-btn size="20px"
              class="q-px-xl q-py-xs"
              align="center"
              outline
              color="negative"
              label="1000" />
          </div>
          <div class="col-12 q-mt-xs">
            <q-btn size="20px"
              class="button6 q-px-xl q-ml-md q-py-xs"
              align="center"
              color="negative"
              label="UDO 25" />
          </div>
          <div class="button8 col-12 q-mt-xs">
            <q-btn size="20px"
              class="q-px-xl q-py-xs"
              align="center"
              outline
              color="negative"
              label="1000" />
          </div>
        </div>
      </div>
      <!-- Clasificados lado right -->
      <div class="col-2 q-ml-xl">
        <div class="row">
          <div class="col-12 q-ml-xs q-mt-xs">
            <q-btn size="20px"
              class="q-px-xl q-ml-md q-py-xs"
              align="center"
              color="primary"
              label="UDO 25" />
          </div>
          <div class="col-12 q-mt-xs">
            <q-btn size="20px"
              class="button7 q-px-xl q-py-xs"
              align="center"
              outline
              color="primary"
              label="1000" />
          </div>
          <div class="col-12 q-ml-xs q-mt-xs">
            <q-btn size="20px"
              class="button2 q-px-xl q-ml-md q-py-xs"
              align="center"
              color="primary"
              label="UDO 25" />
          </div>
          <div class="button7 col-12 q-mt-xs">
            <q-btn size="20px"
              class="q-px-xl q-py-xs"
              align="center"
              outline
              color="primary"
              label="1000" />
          </div>
        </div>
      </div>
    </div>
    <q-toolbar>
      <img src="~assets/speTrans.png"
        class="spe q-mt-xs self-end"
        style="height: 150px">
      <q-space></q-space>
    </q-toolbar>
  </q-page>
</template>

<style>
.button1 {
  margin-left: 110px;
}
.button2 {
  margin-top: 200px;
}
.button3 {
  margin-top: 150px;
}
.button4 {
  margin-left: 10px;
}
.button8 {
  margin-left: 30px;
}
.button5 {
  margin-left: 15px;
  margin-top: 430px;
}
.button6 {
  margin-top: 370px;
}
.button7 {
  margin-left: 30px;
}
.spe {
  margin-top: 30px;
}
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
