<template>
  <div>
    <h2>Fill in the Form to Continue</h2>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider
          name="Name"
          rules="required|alpha"
          v-slot="{ errors }"
        >
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="formData.name" />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          name="E-mail"
          rules="required|email"
          v-slot="{ errors }"
        >
          <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="formData.email" />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          name="Phone Number"
          rules="required|alpha_num"
          v-slot="{ errors }"
        >
          <div class="form-group">
            <label>Phone Number</label>
            <input
              type="number"
              class="form-control"
              v-model.number="formData.phoneNumber"
            />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          name="House Address"
          rules="required"
          v-slot="{ errors }"
        >
          <div class="form-group">
            <label>House Address</label>
            <input
              type="text"
              class="form-control"
              v-model="formData.address"
            />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          name="Bank Verification Number"
          rules="required|digits:11"
          v-slot="{ errors }"
        >
          <div class="form-group">
            <label>Bank Verification Number(BVN)</label>
            <input
              type="number"
              class="form-control"
              v-model.number="formData.bvn"
            />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider>
          <Range @change="formData.amount = $event" :values="sliderValues" />
        </ValidationProvider>
        <button type="submit" class="btn btn-success text-center">
          Submit
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import Range from "./Range";
export default {
  components: {
    Range,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    // month: 0,
    formData: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      bvn: "",
      amount: "",
    },
    sliderValues: [],
  }),
  created() {
    this.sliderValues = [
      {
        months: "1 month",
        amount: `${this.product.price}`,
      },
      {
        months: "2 months",
        amount: `${this.product.price}` / 2,
      },
      {
        months: "3 months",
        amount: `${this.product.price}` / 3,
      },
      {
        months: "4 months",
        amount: `${this.product.price}` / 4,
      },
      {
        months: "5 months",
        amount: `${this.product.price}` / 5,
      },
      {
        months: "6 months",
        amount: `${this.product.price}` / 6,
      },
    ];
  },
  methods: {
    onSubmit() {
      const data = this.formData;
      data.months = this.sliderValues.find(
        (value) => value.amount === data.amount
      ).months;
      console.log(data);
    },
  },
};
</script>

<style>
.form-group,
h2,
h3,
.btn {
  font-family: Poppins;
}
.form-group span {
  color: red;
  font-size: 10px;
}
form .btn {
  background-color: #419403;
  width: 150px;
}
form .btn:hover {
  background-color: #419403;
}
</style>
