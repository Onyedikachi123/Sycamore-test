<template>
  <div class="mt-5">
    <section id="breadcrumb" style="margin-top: 5.6rem">
      <b-container>
        <ol class="breadcrumb mt-5">
          <li class="active">Dashboard</li>
        </ol>
      </b-container>
    </section>

    <section id="main">
      <b-container>
        <b-row>
          <div class="col-md-3">
            <div class="list-group">
              <router-link
                to="/dashboard"
                class="list-group-item active main-color-bg"
              >
                <p>
                  <span class="sidebar-icon"
                    ><fa-icon icon="cog" class="card-icons"
                  /></span>
                  Dashboard
                </p>
              </router-link>
              <router-link to="/" class="list-group-item">
                <p>
                  <span class="sidebar-icon"
                    ><fa-icon icon="home" class="card-icons"
                  /></span>
                  Home
                </p>
              </router-link>
              <router-link to="#" class="list-group-item">
                <p>
                  <span class="sidebar-icon"
                    ><fa-icon icon="cog" class="card-icons"
                  /></span>
                  Dashboard
                </p>
              </router-link>
            </div>
            <div class="well">
              <h4>Disk space Used</h4>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 60%"
                >
                  60%
                </div>
              </div>
              <h4>Bandwidth Used</h4>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 40%"
                >
                  40%
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div class="panel">
              <div class="panel-heading">
                <h3 class="panel-title">Users Statistics</h3>
              </div>
              <b-container class="bv-example-row panel-body">
                <b-row>
                  <b-col>
                    <div class="well dash-box text-center">
                      <h2>
                        <span><fa-icon icon="user" class="card-icons"/></span>
                        200+
                      </h2>
                      <h4>Number of Users</h4>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="well dash-box text-center">
                      <h2>
                        <span><fa-icon icon="user" class="card-icons"/></span>
                        20
                      </h2>
                      <h4>Pending Request</h4>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="well dash-box text-center">
                      <h2>
                        <span><fa-icon icon="user" class="card-icons"/></span>
                        10
                      </h2>
                      <h4>Complete Request</h4>
                    </div>
                  </b-col>
                </b-row>
              </b-container>
            </div>
            <md-table
              class="mt-4"
              v-model="searched"
              md-sort="name"
              md-sort-order="asc"
              md-card
              md-fixed-header
            >
              <md-table-toolbar>
                <!-- <div class="md-toolbar-section-start">
                  <h1 class="md-title">Users</h1>
                </div> -->

                <md-field md-clearable class="md-toolbar-section-end">
                  <md-input
                    placeholder="Search by name..."
                    v-model="search"
                    @input="searchOnTable"
                  />
                </md-field>
              </md-table-toolbar>

              <md-table-empty-state
                md-label="No users found"
                :md-description="
                  `No user found for this '${search}' query. Try a different search term or create a new user.`
                "
              >
                <md-button class="md-primary md-raised" @click="newUser"
                  >Create New User</md-button
                >
              </md-table-empty-state>

              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{
                  item.id
                }}</md-table-cell>
                <md-table-cell md-label="Name" md-sort-by="name">{{
                  item.name
                }}</md-table-cell>
                <md-table-cell md-label="Email" md-sort-by="email">{{
                  item.email
                }}</md-table-cell>
                <md-table-cell
                  md-label="Phone Number"
                  md-sort-by="phoneNumber"
                  >{{ item.phoneNumber }}</md-table-cell
                >
                <md-table-cell md-label="House Address" md-sort-by="address">{{
                  item.address
                }}</md-table-cell>
                <md-table-cell
                  md-label="Bank Verification Number(BVN)"
                  md-sort-by="BVN"
                  >{{ item.bvn }}</md-table-cell
                >
                <md-table-cell md-label="Amount" md-sort-by="amount">{{
                  item.amount
                }}</md-table-cell>
                <md-table-cell
                  md-label="Payment per month"
                  md-sort-by="period"
                  >{{ item.period }}</md-table-cell
                >
              </md-table-row>
            </md-table>
          </div>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
const toLower = (text) => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  if (term) {
    return items.filter((item) => toLower(item.name).includes(toLower(term)));
  }

  return items;
};

export default {
  name: "TableSearch",
  data: () => ({
    search: null,
    searched: [],
    users: [
      {
        id: 1,
        name: "Shawna Dubbin",
        email: "sdubbin0@geocities.com",
        phoneNumber: "08136547896",
        address: "15 johnson",
        amount: "₦234,000",
        period: "2 months"
      },
      {
        id: 2,
        name: "Odette Demageard",
        email: "odemageard1@spotify.com",
        phoneNumber: "08136547896",
         address: "15 johnson",
        amount: "₦234,000",
        period: "2 months"
      },
      {
        id: 3,
        name: "Vera Taleworth",
        email: "vtaleworth2@google.ca",
        phoneNumber: "08136547896",
         address: "15 johnson",
        amount: "₦234,000",
        period: "2 months"
      },
      {
        id: 4,
        name: "Lonnie Izkovitz",
        email: "lizkovitz3@youtu.be",
        phoneNumber: "08136547896",
         address: "15 johnson",
        amount: "₦234,000",
        period: "2 months"
      },
      {
        id: 5,
        name: "Thatcher Stave",
        email: "tstave4@reference.com",
        phoneNumber: "08136547896",
         address: "15 johnson",
        amount: "₦234,000",
        period: "2 months"
      },
      {
        id: 6,
        name: "Karim Chipping",
        email: "kchipping5@scribd.com",
        phoneNumber: "08136547896",
         address: "15 johnson",
        amount: "₦234,000",
        period: "2 months"
      },
      {
        id: 7,
        name: "Helge Holyard",
        email: "hholyard6@howstuffworks.com",
        phoneNumber: "08136547896",
         address: "15 johnson",
        amount: "₦234,000",
        period: "2 months"
      },
      {
        id: 8,
        name: "Rod Titterton",
        email: "rtitterton7@nydailynews.com",
        phoneNumber: "08136547896",
        address: "15 johnson",
        amount: "₦234,000",
        period: "2 months"
      },
      {
        id: 9,
        name: "Gawen Applewhite",
        email: "gapplewhite8@reverbnation.com",
        phoneNumber: "08136547896",
         address: "15 johnson",
        amount: "₦234,000",
        period: "2 months"
      },
      {
        id: 10,
        name: "Nero Mulgrew",
        email: "nmulgrew9@plala.or.jp",
        phoneNumber: "08136547896",
         address: "15 johnson",
        amount: "₦234,000",
        period: "2 months"
      },
      {
        id: 11,
        name: "Cybill Rimington",
        email: "crimingtona@usnews.com",
        phoneNumber: "08136547896",
         address: "15 johnson",
        amount: "₦234,000",
        period: "2 months"
      },
      {
        id: 12,
        name: "Maureene Eggleson",
        email: "megglesonb@elpais.com",
        phoneNumber: "08136547896",
         address: "15 johnson",
        amount: "₦234,000",
        period: "2 months"
      },
      {
        id: 13,
        name: "Cortney Caulket",
        email: "ccaulketc@cbsnews.com",
        phoneNumber: "08136547896",
         address: "15 johnson",
        amount: "₦234,000",
        period: "2 months"
      },
      {
        id: 14,
        name: "Selig Swynfen",
        email: "sswynfend@cpanel.net",
        phoneNumber: "08136547896",
         address: "15 johnson",
        amount: "₦234,000",
        period: "2 months"
      },
      {
        id: 15,
        name: "Ingar Raggles",
        email: "iragglese@cbc.ca",
        phoneNumber: "08136547896",
         address: "15 johnson",
        amount: "₦234,000",
        period: "2 months"
      },
      {
        id: 16,
        name: "Karmen Mines",
        email: "kminesf@topsy.com",
        phoneNumber: "08136547896",
        address: "15 johnson",
        amount: "₦234,000",
        period: "2 months"
      },
      {
        id: 17,
        name: "Salome Judron",
        email: "sjudrong@jigsy.com",
        phoneNumber: "08136547896",
         address: "15 johnson",
        amount: "₦234,000",
        period: "2 months"
      },
      {
        id: 18,
        name: "Clarinda Marieton",
        email: "cmarietonh@theatlantic.com",
        phoneNumber: "08136547896",
         address: "15 johnson",
        amount: "₦234,000",
        period: "2 months"
      },
      {
        id: 19,
        name: "Paxon Lotterington",
        email: "plotteringtoni@netvibes.com",
        phoneNumber: "08136547896",
         address: "15 johnson",
        amount: "₦234,000",
        period: "2 months"
      },
      {
        id: 20,
        name: "Maura Thoms",
        email: "mthomsj@webeden.co.uk",
        phoneNumber: "08136547896",
         address: "15 johnson",
        amount: "₦234,000",
        period: "2 months"
      },
    ],
  }),
  methods: {
    newUser() {
      window.alert("Noop");
    },
    searchOnTable() {
      this.searched = searchByName(this.users, this.search);
    },
  },
  created() {
    this.searched = this.users;
  },
};
</script>

<style>
.panel {
  margin: 8px 0px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.panel-heading {
  background-color: #e23939 !important;
  border-color: #e23939 !important;
  color: #ffffff !important;
  padding: 7px 15px 2px;
}
.panel-heading h3 {
  font-size: 14px;
}
.panel-body {
  padding: 30px 30px 12px;
}

.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
}
span {
  font-size: 37.2537px;
}
.list-group {
  padding-left: 0;
  margin-bottom: 20px;
  margin-top: 10px;
}

.list-group-item {
  position: relative;
  display: block;
  background-color: #fff;
  border: 1px solid #ddd;
}

.list-group a {
  text-decoration: none !important;
}

.list-group p {
  margin-bottom: 0px;
}

.main-color-bg {
  background-color: #e23939 !important;
  border-color: #e23939 !important;
  color: #ffffff !important;
}
.sidebar-icon {
  font-size: 15px;
}
.progress {
  height: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}
.progress-bar {
  background-color: #000;
}
</style>
