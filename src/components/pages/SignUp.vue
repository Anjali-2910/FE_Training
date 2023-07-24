<template>
  <form  @submit.prevent="submitForm" action="">
    <div class="form-control">
      <label for="first-name">First Name</label>
      <input id="first-name" name="first-name" type="text" />
    </div>
    <div class="form-control">
      <label for="last-name">Last Name</label>
      <input id="last-name" name="last-name" type="text" />
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <input id="password" name="password" type="password" />
    </div>
    <div><button>Sign Up</button></div>
   
  </form>
</template>

<script>
export default {
  methods:{
    data(){
      return {
        firstName:''
      }

    },
    submitForm(){

    }
    
  }
  
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
  height: 20rem;
  background: linear-gradient(
    to right,
    #ffffff 0%,
    #ffffff 50%,
    #0059df 50%,
    #0059df 100%
  );
}
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}
input {
  display: block;

  font: inherit;
  margin-top: 0.5rem;
  background: #d9d9d9;
  border-style: none;
  height: 30px;
  width: 220px;
  border-radius: 2px;
}

button {
  font: inherit;
  border: 1px solid #0059df;
  background-color: #0059df;
  color: white;
  cursor: pointer;
  /* padding: 0.75rem 2rem; */
  border-radius: 2px;
  height: 30px;
  width: 220px;
  /* margin: 1.5rem; */
  margin-top: 1.5rem;
}

/* button:hover,
button:active {
  border-color: #0059DF;
  background-color: #0059DF;
} */
</style>
