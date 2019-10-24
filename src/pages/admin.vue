<template>
  <q-page class="bg-blue-grey-1">
    <div class="q-ml-xl">
      <q-splitter v-model="splitterModel"
        style="height: 900px">

        <template v-slot:before>
          <q-tabs v-model="tab"
            vertical
            dense
            class="text-accent bg-blue-grey-1"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator>
            <q-tab name="datos"
              icon="settings"
              label="General data" />
            <q-tab name="team"
              icon="settings"
              label="Team" />
            <q-tab name="panel"
              icon="settings"
              label="panel" />
            <q-tab name="confrontations"
              icon="settings"
              label="confrontations" />
          </q-tabs>
        </template>

        <template v-slot:after>
          <q-tab-panels v-model="tab"
            animated
            transition-prev="jump-up"
            transition-next="jump-up">
            <!-- Sección General data -->
            <q-tab-panel name="datos">
              <div class="text-h5 q-mb-md" style="height: 800px">General data
                <q-stepper class="q-mt-md"
                  v-model="step"
                  header-nav
                  ref="stepper"
                  color="primary"
                  animated
                  vertical>
                  <q-step :name="1"
                    title="Moderator"
                    icon="add_comment"
                    :done="done1">
                    <div class="row">
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Last name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done1 = true; step = 2 }"
                        color="primary"
                        label="Continue" />
                    </q-stepper-navigation>
                  </q-step>

                  <q-step :name="2"
                    title="ScoreKeeper"
                    icon="add_comment"
                    :done="done2">
                    <div class="row">
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Last name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done2 = true; step = 3 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 1"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>

                  <q-step :name="3"
                    title="TimeKeeper"
                    icon="add_comment"
                    :done="done3">
                    <div class="row">
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Last name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done3 = true; step = 4 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 2"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                  <q-step :name="4"
                    title="Administrator"
                    icon="add_comment"
                    :done="done4">
                    <div class="row">
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Last name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn color="primary"
                        @click="done4 = true"
                        label="Finish" />
                      <q-btn flat
                        @click="step = 3"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                </q-stepper>
                <div>
                  <q-btn label="Reset"
                    push
                    color="white"
                    text-color="primary"
                    align="center"
                    @click="reset"
                    class="q-mb-md q-mt-xl" />
                </div>
              </div>
            </q-tab-panel>
            <!-- Sección team -->
            <q-tab-panel name="team">
              <div class="text-h5 q-mb-md">Registration of team
                <q-stepper class="q-mt-md"
                  v-model="step"
                  header-nav
                  ref="stepper"
                  color="primary"
                  animated
                  vertical>
                  <q-step :name="1"
                    title="Team 1"
                    icon="add_comment"
                    :done="done1">
                    <div class="row">
                      <div class="col-3">
                        <q-select v-model="model"
                          :options="options"
                          label="university" />
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Team name:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Leader:"
                          expanded/>
                      </div>
                    </div>
                    <q-toolbar-title class="text-subtitle1 text-primary text-left">
                      Members
                    </q-toolbar-title>
                    <div class="row">
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done1 = true; step = 2 }"
                        color="primary"
                        label="Continue" />
                    </q-stepper-navigation>
                  </q-step>

                  <q-step :name="2"
                    title="Team 2"
                    icon="add_comment"
                    :done="done2">
                    <div class="row">
                      <div class="col-3">
                        <q-select v-model="model"
                          :options="options"
                          label="university" />
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Team name:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Leader:"
                          expanded/>
                      </div>
                    </div>
                    <q-toolbar-title class="text-subtitle1 text-primary text-left">
                      Members
                    </q-toolbar-title>
                    <div class="row">
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done2 = true; step = 3 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 1"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>

                  <q-step :name="3"
                    title="Team 4"
                    icon="add_comment"
                    :done="done3">
                    <div class="row">
                      <div class="col-3">
                        <q-select v-model="model"
                          :options="options"
                          label="university" />
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Team name:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Leader:"
                          expanded/>
                      </div>
                    </div>
                    <q-toolbar-title class="text-subtitle1 text-primary text-left">
                      Members
                    </q-toolbar-title>
                    <div class="row">
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done3 = true; step = 4 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 2"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                  <q-step :name="4"
                    title="Team 4"
                    icon="add_comment"
                    :done="done4">
                    <div class="row">
                      <div class="col-3">
                        <q-select v-model="model"
                          :options="options"
                          label="university" />
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Team name:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Leader:"
                          expanded/>
                      </div>
                    </div>
                    <q-toolbar-title class="text-subtitle1 text-primary text-left">
                      Members
                    </q-toolbar-title>
                    <div class="row">
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done4 = true; step = 5 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 3"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                  <q-step :name="5"
                    title="Team 5"
                    icon="add_comment"
                    :done="done5">
                    <div class="row">
                      <div class="col-3">
                        <q-select v-model="model"
                          :options="options"
                          label="university" />
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Team name:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Leader:"
                          expanded/>
                      </div>
                    </div>
                    <q-toolbar-title class="text-subtitle1 text-primary text-left">
                      Members
                    </q-toolbar-title>
                    <div class="row">
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done5 = true; step = 6 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 4"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                  <q-step :name="6"
                    title="Team 6"
                    icon="add_comment"
                    :done="done6">
                    <div class="row">
                      <div class="col-3">
                        <q-select v-model="model"
                          :options="options"
                          label="university" />
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Team name:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Leader:"
                          expanded/>
                      </div>
                    </div>
                    <q-toolbar-title class="text-subtitle1 text-primary text-left">
                      Members
                    </q-toolbar-title>
                    <div class="row">
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done6 = true; step = 7 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 5"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                  <q-step :name="7"
                    title="Team 7"
                    icon="add_comment"
                    :done="done7">
                    <div class="row">
                      <div class="col-3">
                        <q-select v-model="model"
                          :options="options"
                          label="university" />
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Team name:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Leader:"
                          expanded/>
                      </div>
                    </div>
                    <q-toolbar-title class="text-subtitle1 text-primary text-left">
                      Members
                    </q-toolbar-title>
                    <div class="row">
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done7 = true; step = 8 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 6"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                  <q-step :name="8"
                    title="Team 8"
                    icon="add_comment"
                    :done="done7">
                    <div class="row">
                      <div class="col-3">
                        <q-select v-model="model"
                          :options="options"
                          label="university" />
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Team name:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Leader:"
                          expanded/>
                      </div>
                    </div>
                    <q-toolbar-title class="text-subtitle1 text-primary text-left">
                      Members
                    </q-toolbar-title>
                    <div class="row">
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done8 = true; step = 9 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 7"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                  <q-step :name="9"
                    title="Team 9"
                    icon="add_comment"
                    :done="done9">
                    <div class="row">
                      <div class="col-3">
                        <q-select v-model="model"
                          :options="options"
                          label="university" />
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Team name:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Leader:"
                          expanded/>
                      </div>
                    </div>
                    <q-toolbar-title class="text-subtitle1 text-primary text-left">
                      Members
                    </q-toolbar-title>
                    <div class="row">
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done9 = true; step = 10 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 8"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                  <q-step :name="10"
                    title="Team 10"
                    icon="add_comment"
                    :done="done10">
                    <div class="row">
                      <div class="col-3">
                        <q-select v-model="model"
                          :options="options"
                          label="university" />
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Team name:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Leader:"
                          expanded/>
                      </div>
                    </div>
                    <q-toolbar-title class="text-subtitle1 text-primary text-left">
                      Members
                    </q-toolbar-title>
                    <div class="row">
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done10 = true; step = 11 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 10"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                  <q-step :name="11"
                    title="Team 11"
                    icon="add_comment"
                    :done="done11">
                    <div class="row">
                      <div class="col-3">
                        <q-select v-model="model"
                          :options="options"
                          label="university" />
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Team name:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Leader:"
                          expanded/>
                      </div>
                    </div>
                    <q-toolbar-title class="text-subtitle1 text-primary text-left">
                      Members
                    </q-toolbar-title>
                    <div class="row">
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done11 = true; step = 12 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 10"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                  <!-- ultimo -->
                  <q-step :name="12"
                    title="Team 12"
                    icon="add_comment"
                    :done="done12">
                    <div class="row">
                      <div class="col-3">
                        <q-select v-model="model"
                          :options="options"
                          label="university" />
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Team name:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Leader:"
                          expanded/>
                      </div>
                    </div>
                    <q-toolbar-title class="text-subtitle1 text-primary text-left">
                      Members
                    </q-toolbar-title>
                    <div class="row">
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="Name member:"
                          expanded/>
                      </div>
                      <div class="col-3">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                    </div>

                    <q-stepper-navigation>
                      <q-btn color="primary"
                        @click="done4 = true"
                        label="Finish" />
                      <q-btn flat
                        @click="step = 11"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                </q-stepper>
                <div>
                  <q-btn label="Reset"
                    push
                    color="white"
                    text-color="primary"
                    align="center"
                    @click="reset"
                    class="q-mb-md q-mt-xl" />
                </div>
              </div>
            </q-tab-panel>
            <!-- Sección panel -->
            <q-tab-panel name="panel">
              <div class="text-h5 q-mb-md">Jurors register
                <q-stepper class="q-mt-md"
                  v-model="step"
                  header-nav
                  ref="stepper"
                  color="primary"
                  animated
                  vertical>
                  <q-step :name="1"
                    title="Team 1"
                    icon="add_comment"
                    :done="done1">
                    <div class="row">
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Last name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done1 = true; step = 2 }"
                        color="primary"
                        label="Continue" />
                    </q-stepper-navigation>
                  </q-step>

                  <q-step :name="2"
                    title="Team 2"
                    icon="add_comment"
                    :done="done2">
                    <div class="row">
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Last name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done2 = true; step = 3 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 1"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>

                  <q-step :name="3"
                    title="Team 4"
                    icon="add_comment"
                    :done="done3">
                    <div class="row">
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Last name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done3 = true; step = 4 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 2"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                  <q-step :name="4"
                    title="Team 4"
                    icon="add_comment"
                    :done="done4">
                    <div class="row">
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Last name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done4 = true; step = 5 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 3"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                  <q-step :name="5"
                    title="Team 5"
                    icon="add_comment"
                    :done="done5">
                    <div class="row">
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Last name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done5 = true; step = 6 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 4"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                  <q-step :name="6"
                    title="Team 6"
                    icon="add_comment"
                    :done="done6">
                    <div class="row">
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Last name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done6 = true; step = 7 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 5"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                  <q-step :name="7"
                    title="Team 7"
                    icon="add_comment"
                    :done="done7">
                    <div class="row">
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Last name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done7 = true; step = 8 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 6"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                  <q-step :name="8"
                    title="Team 8"
                    icon="add_comment"
                    :done="done8">
                    <div class="row">
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Last name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done8 = true; step = 9 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 7"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                  <q-step :name="9"
                    title="Team 9"
                    icon="add_comment"
                    :done="done9">
                    <div class="row">
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Last name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done9 = true; step = 10 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 8"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                  <q-step :name="10"
                    title="Team 10"
                    icon="add_comment"
                    :done="done10">
                    <div class="row">
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Last name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done10 = true; step = 11 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 10"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                  <q-step :name="11"
                    title="Team 11"
                    icon="add_comment"
                    :done="done11">
                    <div class="row">
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Last name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done11 = true; step = 12 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 10"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                  <!-- ultimo -->
                  <q-step :name="12"
                    title="Team 12"
                    icon="add_comment"
                    :done="done12">
                    <div class="row">
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Last name:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="ID:"
                          expanded/>
                      </div>
                      <div class="col-6">
                        <q-input v-model="text"
                          label="Email:"
                          expanded/>
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn color="primary"
                        @click="done4 = true"
                        label="Finish" />
                      <q-btn flat
                        @click="step = 11"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                </q-stepper>
                <div>
                  <q-btn label="Reset"
                    push
                    color="white"
                    text-color="primary"
                    align="center"
                    @click="reset"
                    class="q-mb-md q-mt-xl" />
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="confrontations">
              <div class="text-h5 q-mb-md" style="height: 800px">Assign confrontations
                <q-stepper class="q-mt-md"
                  v-model="step"
                  header-nav
                  ref="stepper"
                  color="primary"
                  animated
                  vertical>
                  <q-step :name="1"
                    title="Regular rounds"
                    icon="add_comment"
                    :done="done1">
                    <q-toolbar-title class="text-subtitle1 text-primary text-left">
                      Round 1
                    </q-toolbar-title>
                    <div class="row">
                      <div class="col-6">
                        <q-select v-model="model"
                          :options="options1"
                          label="Select team" />
                      </div>
                      <div class="col-6">
                        <q-select v-model="model"
                          :options="options1"
                          label="Select team" />
                      </div>
                    </div>
                    <q-toolbar-title class="text-subtitle1 text-primary text-left">
                      Round 2
                    </q-toolbar-title>
                    <div class="row">
                      <div class="col-6">
                        <q-select v-model="model"
                          :options="options1"
                          label="Select team" />
                      </div>
                      <div class="col-6">
                        <q-select v-model="model"
                          :options="options1"
                          label="Select team" />
                      </div>
                    </div>
                    <q-toolbar-title class="text-subtitle1 text-primary text-left">
                      Round 3
                    </q-toolbar-title>
                    <div class="row">
                      <div class="col-6">
                        <q-select v-model="model"
                          :options="options1"
                          label="Select team" />
                      </div>
                      <div class="col-6">
                        <q-select v-model="model"
                          :options="options1"
                          label="Select team" />
                      </div>
                    </div>
                    <q-toolbar-title class="text-subtitle1 text-primary text-left">
                      Round 4
                    </q-toolbar-title>
                    <div class="row">
                      <div class="col-6">
                        <q-select v-model="model"
                          :options="options1"
                          label="Select team" />
                      </div>
                      <div class="col-6">
                        <q-select v-model="model"
                          :options="options1"
                          label="Select team" />
                      </div>
                    </div>
                    <q-toolbar-title class="text-subtitle1 text-primary text-left">
                      Round 5
                    </q-toolbar-title>
                    <div class="row">
                      <div class="col-6">
                        <q-select v-model="model"
                          :options="options1"
                          label="Select team" />
                      </div>
                      <div class="col-6">
                        <q-select v-model="model"
                          :options="options1"
                          label="Select team" />
                      </div>
                    </div>
                    <q-toolbar-title class="text-subtitle1 text-primary text-left">
                      Round 6
                    </q-toolbar-title>
                    <div class="row">
                      <div class="col-6">
                        <q-select v-model="model"
                          :options="options1"
                          label="Select team" />
                      </div>
                      <div class="col-6">
                        <q-select v-model="model"
                          :options="options1"
                          label="Select team" />
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done1 = true; step = 2 }"
                        color="primary"
                        label="Continue" />
                    </q-stepper-navigation>
                  </q-step>

                  <q-step :name="2"
                    title="Semifinal rounds"
                    icon="add_comment"
                    :done="done2">
                    <q-toolbar-title class="text-subtitle1 text-primary text-left">
                      Semifinal round 1
                    </q-toolbar-title>
                    <div class="row">
                      <div class="col-6">
                        <q-select v-model="model"
                          :options="options1"
                          label="Select team" />
                      </div>
                      <div class="col-6">
                        <q-select v-model="model"
                          :options="options1"
                          label="Select team" />
                      </div>
                    </div>
                    <q-toolbar-title class="text-subtitle1 text-primary text-left">
                      Semifinal round 2
                    </q-toolbar-title>
                    <div class="row">
                      <div class="col-6">
                        <q-select v-model="model"
                          :options="options1"
                          label="Select team" />
                      </div>
                      <div class="col-6">
                        <q-select v-model="model"
                          :options="options1"
                          label="Select team" />
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn @click="() => { done2 = true; step = 3 }"
                        color="primary"
                        label="Continue" />
                      <q-btn flat
                        @click="step = 1"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                  <q-step :name="3"
                    title="Final round"
                    icon="add_comment"
                    :done="done3">
                    <q-toolbar-title class="text-subtitle1 text-primary text-left">
                      Final round
                    </q-toolbar-title>
                    <div class="row">
                      <div class="col-6">
                        <q-select v-model="model"
                          :options="options1"
                          label="Select team" />
                      </div>
                      <div class="col-6">
                        <q-select v-model="model"
                          :options="options1"
                          label="Select team" />
                      </div>
                    </div>
                    <q-toolbar-title class="text-subtitle1 text-primary text-left">
                      Third place
                    </q-toolbar-title>
                    <div class="row">
                      <div class="col-6">
                        <q-select v-model="model"
                          :options="options1"
                          label="Select team" />
                      </div>
                      <div class="col-6">
                        <q-select v-model="model"
                          :options="options1"
                          label="Select team" />
                      </div>
                    </div>
                    <q-stepper-navigation>
                      <q-btn color="primary"
                        @click="done4 = true"
                        label="Finish" />
                      <q-btn flat
                        @click="step = 2"
                        color="primary"
                        label="Back"
                        class="q-ml-sm" />
                    </q-stepper-navigation>
                  </q-step>
                </q-stepper>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </template>

      </q-splitter>
    </div>
    <q-toolbar class="spe">
      <img src="~assets/speTrans.png"
        style="height: 150px">
      <q-space></q-space>
    </q-toolbar>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  data () {
    return {
      tab: 'datos',
      splitterModel: 20,
      step: 1,
      done1: false,
      done2: false,
      done3: false,
      done4: false,
      model: null,
      options: [
        'UDO', 'UNEFA', 'UCV', 'LUZ', 'PSM'
      ],
      options1: [
        'Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5', 'Team 6', 'Team 7', 'Team 8', 'Team 9', 'Team 10', 'Team 11', 'Team 12'
      ]
    }
  },

  methods: {
    reset () {
      this.done1 = false
      this.done2 = false
      this.done3 = false
      this.done4 = false
      this.step = 1
    }
  }
}
</script>
