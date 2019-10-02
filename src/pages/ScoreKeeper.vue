<template>
  <q-page class="bg-blue-grey-1">
    <!-- question section -->
    <div class="row q-pa-md justify-center">
      <div class="col-md-auto">
        <q-btn size="30px"
          color="red-10"
          label="Toss Up" />
      </div>
      <div class="col-xs-7 col-sm-8 col-md-9 col-lg-10 self-center">
        <div class="title">
          QID #001: What color is the sky?
        </div>
      </div>
    </div>
    <div class="row q-pa-md justify-around">
      <!-- first team column -->
      <div class="col-md-5 q-pb-lg q-mt-lg bg-white">
        <!-- title - Team name -->
        <div class="row q-pa-md">
          <div class="col-xs-4 col-sm-3 col-md-4">
            <q-toolbar-title class="text-h4 text-white text-center bg-accent">
              Team-A:
            </q-toolbar-title>
          </div>
          <div class="col-xs-8 col-sm-9 col-md-8">
            <q-toolbar-title class="text-h4 text-left bg-accent text-white text-bold">
              Nombre equipo A
            </q-toolbar-title>
          </div>
        </div>
        <!-- Score -->
        <div class="row q-pa-md justify-center">
          <div class="col-12">
            <q-toolbar-title class="title1 text-h3 text-center text-primary text-bold">
              Score
            </q-toolbar-title>
          </div>
          <div class="col-auto q-mt-xl">
            <q-btn size="50px"
              class="q-px-xl q-py-xs"
              align="center"
              outline
              text-color="primary"
              label="10000" />
          </div>
        </div>
        <!-- Toolbar button -->
        <q-toolbar class="marks">
          <q-btn color="positive"
            class="buttonG">
            <q-icon center
              size="50px"
              name="check" />
          </q-btn>
          <q-btn color="negative"
            class="buttonF">
            <q-icon center
              size="50px"
              name="close" />
          </q-btn>
          <q-space/>
          <q-input outlined
            v-model="text"
            style="font-size: 25px"
            placeholder="Bonus"
            color="primary" />
        </q-toolbar>
      </div>
      <!-- secund team column -->
      <div class="col-md-5 q-mt-lg q-pb-lg bg-white">
        <!-- title - Team name -->
        <div class="row q-pa-md">
          <div class="col-xs-4 col-sm-3 col-md-4">
            <q-toolbar-title class="text-h4 text-white text-center bg-secondary">
              Team-B:
            </q-toolbar-title>
          </div>
          <div class="col-xs-8 col-sm-9 col-md-8">
            <q-toolbar-title class="text-h4 text-left bg-secondary text-white text-bold">
              Nombre equipo B
            </q-toolbar-title>
          </div>
        </div>
        <!-- Score -->
        <div class="row q-pa-md justify-center">
          <div class="col-12">
            <q-toolbar-title class="title1 text-h3 text-center text-secondary text-bold">
              Score
            </q-toolbar-title>
          </div>
          <div class="col-auto q-mt-xl">
            <q-btn size="50px"
              class="q-px-xl q-py-xs"
              align="center"
              outline
              text-color="secondary"
              label="10000" />
          </div>
        </div>
        <!-- Toolbar button -->
        <q-toolbar class="marks">
          <q-btn color="positive"
            class="buttonG">
            <q-icon center
              size="50px"
              name="check" />
          </q-btn>
          <q-btn color="negative"
            class="buttonF">
            <q-icon center
              size="50px"
              name="close" />
          </q-btn>
          <q-space/>
          <q-input outlined
            v-model="text"
            style="font-size: 25px"
            placeholder="Bonus"
            color="primary" />
        </q-toolbar>
      </div>
    </div>
    <div class="row justify-center q-mt-lg">
      <div class="col-auto">
        <q-btn color="positive">
          <q-icon left
            size="60px"
            name="save" />
          <div>Record</div>
        </q-btn>
      </div>
    </div>
    <q-toolbar>
      <img src="~assets/speTrans.png"
        style="height: 150px">
      <q-space></q-space>
    </q-toolbar>
  </q-page>
</template>

<style>
.title {
  background-color: white;
  padding: 20px;
  margin-inline-start: 10px;
}

.buttonQ {
  margin-inline-start: 40px;
}
.score {
  margin-inline-start: 330px;
  margin-top: 50px;
}
.title1 {
  margin-top: 30px;
}
.marks {
  margin-top: 100px;
}
.buttonF {
  margin-inline-start: 10px;
}
.buttonG {
  margin-inline-start: 10px;
}
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
