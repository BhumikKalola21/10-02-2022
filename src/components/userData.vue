<template>
  <section>
    <form @click.prevent="submitData">
      <div class="in">
        <input type="text" placeholder="enetr your name"  v-model="enteredname"/>
        <input type="number" placeholder="enter your age" v-model="enteredage" />
        <button>submit</button>
      </div>
    </form>
  </section>
</template>
<script>
export default {
    emit:['set-data'],
    data(){
        return{
            enteredname: '',
            enteredage: ''
        };      
    },
    methods:{
        submitData(){
            this.$emit('set-data',this.enteredname,this.enteredage);
        }
    }
};
</script>
<style>
.in {
  text-align: center;
  padding: 5px;
  margin: auto;
}
</style>
