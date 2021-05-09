<template>
  <h1>{{ title }}</h1>
  <p>Wellcome..</p>
  <teleport to="#modals" v-if="showModal">
      <Modal theme="sale" @close="toggleModal">
        
        <template v-slot:links>
          <a href="#">Sign up now</a>
          <a href="#">More info</a>
        </template>
    
        <h1>Ninja Giveway!!!! </h1>
        <p>Grab your ninja swag for half price!</p>

      </Modal>
  </teleport>

    <teleport to="#modals" v-if="showModalTwo">
      <Modal @close="toggleModalTwo">
  
        <h1>Sign up to the newsletter </h1>
        <p>for Update and promos code!</p>

      </Modal>
  </teleport>

  <button @click.alt="toggleModal">Open Model (ALT)</button>
  <p>Second button</p>
  <button @click="toggleModalTwo">Open Modal2</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal } ,
  data(){
    return{
      title: 'My First Veu App :)',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal;
    },
    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo;
    },  
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    }
  }


}
</script>

<style>
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
