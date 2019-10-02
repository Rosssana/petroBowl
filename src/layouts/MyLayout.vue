<template>
  <q-layout view="lHH Lpr lFf">
    <q-header class="bg-primary"
      reveal>
      <q-toolbar>
        <img src="~assets/petro.svg"
          style="height: 100px">
        <q-toolbar-title class="text-h2 text-bold">
          PetroBowl
        </q-toolbar-title>
        <q-space></q-space>
        <div>
          <div class="row">
            <div class="text-h5">Timekeeper
              <q-avatar color="purple-9"
                text-color="blue-grey-2">
                <q-tooltip self="center middle"
                  content-class="bg-purple text-black">
                  chucenam
                </q-tooltip>R</q-avatar>
            </div>
          </div>
          <div class="row justify-end">
            <q-btn flat
              dense
              round
              @click="drawer = !drawer"
              icon="menu"
              aria-label="Menu" />
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer side="right"
      v-model="drawer"
      show-if-above
      :width="800"
      :breakpoint="500"
      :mini-width="20"
      bordered
      overlay
      aria-placeholder="20px"
      content-class="bg-blue-1 q-pa-lg">
      <div v-if="route === '/scoreKeeper'">
        <div class="row bg-primary text-white text-h5 text-center"
          style="height: 30px">
          <div class="col">Regular round #1</div>
        </div>
        <div class="row bg-primary text-grey-1 text-h5 text-center"
          style="height: 40px">
          <div class="col-6">A-Team: UDO 25</div>
          <div class="col-6">B-Team: LUZ 34</div>
        </div>
        <q-table class="my-sticky-header-table"
          :data="data"
          :columns="columns"
          row-key="name"
          color="info" />
      </div>
      <div v-if="route === '/timeKeeper'">
        <div>
          <div class="row bg-primary text-white text-h5 text-center"
            style="height: 30px">
            <div class="col">Regular round #2</div>
          </div>
          <div class="row bg-primary text-grey-1 text-h5 text-center"
            style="height: 40px">
            <div class="col-6">A-Team: UDO 25</div>
            <div class="col-6">B-Team: LUZ 34</div>
          </div>
          <div class="row q-pa-md">
            <div class="col-2">
              <div class="title2 text-h5 text-bold text-left text-center">
                Start time:
              </div>
            </div>
            <div class="col-3">
              <q-input outlined
                v-model="text"
                style="font-size: 25px"
                placeholder="9:00 am"
                disable/>
            </div>
          </div>
          <div class="row q-pa-md">
            <div class="col-2">
              <q-toolbar-title class="title2 text-h5 text-bold text-left text-center">
                Stop time:
              </q-toolbar-title>
            </div>
            <div class="col-3">
              <q-input outlined
                v-model="text"
                style="font-size: 25px"
                placeholder="9:00 am"
                disable/>
            </div>
          </div>
          <div class="row q-pa-md">
            <div class="col-2">
              <q-toolbar-title class="title2 text-h5 text-bold text-left text-center">
                Duration:
              </q-toolbar-title>
            </div>
            <div class="col-3">
              <q-input outlined
                v-model="text"
                style="font-size: 25px"
                placeholder="30:30:15"
                disable/>
            </div>
          </div>
        </div>
        <div>
          <div class="row bg-primary text-white text-h5 text-center"
            style="height: 30px">
            <div class="col">Regular round #2</div>
          </div>
          <div class="row bg-primary text-grey-1 text-h5 text-center"
            style="height: 40px">
            <div class="col-6">A-Team: UCV 57</div>
            <div class="col-6">B-Team: UDO 10</div>
          </div>
          <div class="row q-pa-md">
            <div class="col-2">
              <div class="title2 text-h5 text-bold text-left text-center">
                Start time:
              </div>
            </div>
            <div class="col-3">
              <q-input outlined
                v-model="text"
                style="font-size: 25px"
                placeholder="9:30 am"
                disable/>
            </div>
          </div>
          <div class="row q-pa-md">
            <div class="col-2">
              <q-toolbar-title class="title2 text-bold text-h5 text-left text-center">
                Stop time:
              </q-toolbar-title>
            </div>
            <div class="col-3">
              <q-input outlined
                v-model="text"
                style="font-size: 25px"
                placeholder="10:15 am"
                disable/>
            </div>
          </div>
          <div class="row q-pa-md">
            <div class="col-2">
              <q-toolbar-title class="title2 text-bold text-h5 text-left text-center">
                Duration:
              </q-toolbar-title>
            </div>
            <div class="col-3">
              <q-input outlined
                v-model="text"
                style="font-size: 25px"
                placeholder="45:05:54"
                disable/>
            </div>
          </div>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      drawer: true,
      miniState: false,
      columns: [
        {
          name: 'QID',
          required: true,
          label: 'QID',
          align: 'center',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'QT', align: 'center', label: 'QT', field: 'QT', sortable: true },
        { name: 'A', align: 'center', label: 'A', field: 'A', sortable: true },
        { name: 'B', align: 'center', label: 'B', field: 'B' },
        { name: 'Edit', align: 'center', label: 'Edit', field: 'Edit' },
        { name: 'Record', align: 'center', label: 'Record', field: 'Record' },
        { name: 'NEdit', align: 'center', label: 'N° Edit', field: 'NEdit', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: [
        {
          name: 1,
          QT: 'TU',
          A: 10,
          B: 0,
          Edit: 4.0,
          Record: 87,
          NEdit: '0'
        },
        {
          name: 2,
          QT: 'B',
          A: 50,
          B: 0,
          Edit: 4.3,
          Record: 129,
          NEdit: '0'
        },
        {
          name: 3,
          QT: 'TU',
          A: 0,
          B: 0,
          Edit: 0,
          Record: 'X',
          NEdit: 0
        },
        {
          name: 4,
          QT: 'TU',
          A: 0,
          B: 10,
          Edit: 4.3,
          Record: 413,
          NEdit: '1'
        },
        {
          name: 5,
          QT: 'B',
          A: 0,
          B: 25,
          Edit: 0,
          Record: 0,
          NEdit: '0'
        }
      ],
      route: this.$route.path
    }
  },
  methods: {
    openURL
  },
  created () {
    console.log(this.$route.path)
  }
}
</script>

<style>
.my-sticky-header-table .q-table__top {
  background-color: rgb(13, 76, 146);
  color: white;
}
.title2 {
  margin-top: 20px;
}
</style>
