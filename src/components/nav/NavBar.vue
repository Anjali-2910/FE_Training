<template>
  
    <header>
      <nav>
        <ul>
          <li>
            <router-link to="/signup">SignUp</router-link>
          </li>
          <li>
            <router-link to="/login">Login</router-link>        </li>
        </ul>
      </nav>
    </header>
  </template>

<script>


export default {
  components:{
   
  }

};
</script>

<style  scoped>
header {
  width: 50%;
  margin: auto;
  height: 3rem;
  background-color: #d4d4d7;


}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
 
}
</style>
