<template>
  <div>
    <div class="box-detail mb-5">
      <b-row class="mb-5">
        <b-col class="text-center">
          <h3 class="mb-0">Customer Lead For HP</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col xs="6" sm="6" md="4">
          <b-form-group label="Username">
            <b-form-input
              v-model="filters.firstname"
              trim
              maxlength="20"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col xs="6" sm="6" md="4">
          <b-form-group label="Lastname">
            <b-form-input
              v-model="filters.lastname"
              trim
              maxlength="20"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col xs="6" sm="6" md="4">
          <b-form-group label="Monthly Income">
            <b-form-input
              v-model="filters.monthlyincome"
              trim
              maxlength="20"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col xs="6" sm="6" md="4">
          <b-form-group label="Select Province">
            <b-form-select
              v-model="filters.province"
              :options="optionprovince"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col xs="6" sm="6" md="4">
          <b-form-group label="Select Contract Time">
            <b-form-select
              v-model="filters.contact"
              :options="optioncontact"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col xs="6" sm="6" md="4">
          <b-form-group label="Select Status">
            <b-form-select
              v-model="filters.status"
              :options="optionstatus"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col xs="6" sm="6" md="4">
          <b-form-group label="Mobile">
            <b-form-input
              v-model="filters.mobile"
              trim
              maxlength="10"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col xs="6" sm="6" md="4">
          <b-form-group label="Date From">
            <b-form-datepicker
              v-model="filters.datefrom"
              locale="en-US"
              autocomplete="off"
              :date-format-options="{
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              }"
            ></b-form-datepicker>
          </b-form-group>
        </b-col>
        <b-col xs="6" sm="6" md="4">
          <b-form-group label="Date To">
            <b-form-datepicker
              v-model="filters.dateto"
              locale="en-US"
              autocomplete="off"
              :date-format-options="{
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              }"
            ></b-form-datepicker>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="text-right">
        <b-col>
          <b-button variant="primary">
            <span><i class="fas fa-search"></i></span>
            <span>Search</span>
          </b-button>
        </b-col>
      </b-row>

      <pre>{{ filters }}</pre>
    </div>

    <div class="box-detail mb-5">
      <b-row>
        <b-col>
          <div class="mb-4">
            <b-button variant="outline-primary">Excel</b-button>
            <b-button @click="showModalAssign" variant="warning text-white"
              >Assign</b-button
            >
          </div>
          <b-table
            :items="items"
            :fields="fields"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            striped
            responsive
            sticky-header="600px"
            sort-icon-left
            selectable
            select-mode="multi"
            @row-selected="onRowSelected"
          >
            <template #cell(selected)="{ rowSelected }">
              <template v-if="rowSelected">
                <span aria-hidden="true">&check;</span>
                <span class="sr-only">Selected</span>
              </template>
              <template v-else>
                <span aria-hidden="true">&nbsp;</span>
                <span class="sr-only">Not selected</span>
              </template>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </div>

    <b-modal ref="my-modal-assign" centered size="lg" hide-header hide-footer>
      <div class="d-block">
        {{ this.selected.length }}
        <b-row class="my-4">
          <b-col>
            <b-form-group label="Select Status">
              <b-form-select
                v-model="filtersmodel.workstatus"
                :options="optionworkstatus"
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Select Sale">
              <b-form-select
                v-model="filtersmodel.sale"
                :options="optionsale"
              ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row class="text-right">
          <b-col>
            <b-button variant="primary">Save Status</b-button>
            <b-button @click="hideModalAssign">Close Modal</b-button>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  components: {},
  layout(context) {
    return 'admin'
  },
  middleware: '',
  data: function () {
    return {
      filters: {
        firstname: '',
        lastname: '',
        monthlyincome: '',

        province: null,
        contact: null,
        status: null,

        mobile: '',
        datefrom: '',
        dateto: '',
      },
      filtersmodel: {
        workstatus: null,
        sale: null,
      },

      selected: [],

      optionprovince: [{ value: null, text: 'Please select ' }],
      optioncontact: [{ value: null, text: 'Please select ' }],
      optionstatus: [{ value: null, text: 'Please select ' }],
      optionworkstatus: [{ value: null, text: 'Please select ' }],
      optionsale: [{ value: null, text: 'Please select ' }],

      sortBy: 'age',
      sortDesc: false,
      fields: [
        { key: 'selected', sortable: false },
        { key: 'last_name', sortable: true },
        { key: 'first_name', sortable: true },
        { key: 'age', sortable: true },
        { key: 'isActive', sortable: false },
      ],
      items: [
        {
          isActive: true,
          age: 40,
          first_name: 'Dickerson',
          last_name: 'Macdonald',
        },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
      ],
    }
  },
  computed: {},
  mounted() {},
  methods: {
    onRowSelected(items) {
      this.selected = items
    },
    showModalAssign() {
      this.filtersmodel.workstatus = null
      this.filtersmodel.sale = null
      this.$refs['my-modal-assign'].show()
    },
    hideModalAssign() {
      this.$refs['my-modal-assign'].hide()
    },
  },
}
</script>

<style></style>
