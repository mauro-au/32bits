<template>
  <div>
    <section class="search">
    <h1 >Busqueda</h1>
    <form>
      <div class="form-row justify-content-center">
        <div class="col-sm-3 my-1">
          <label class="sr-only" for="inlineFormInputName">Name</label>
          <input type="text" class="form-control" id="inlineFormInputName" v-model="code" @keyup.enter="searchCode" />
        </div>
        <div class="col-auto my-1">
          <button @click.prevent="searchCode" class="btn btn-primary">Buscar</button>
        </div>
      </div>
    </form>
    </section>
    <br>
    <h5>Cantidad de productos en stock - {{ inStock.length }}</h5>

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Codigo</th>
          <th scope="col">Nombre</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
          <th scope="col">Destacado</th>
        </tr>
      </thead>
      <tbody v-if="showResult">
        <tr v-for="(product, index) in inStock" :key='index' :style="{background: product.color }">
          <th scope="row">{{index}}</th>
          <td v-text="product.code"></td>
          <td v-text="product.name"></td>
          <td v-text="product.stock"></td>
          <td v-text="product.price"></td>
          <td v-text="product.featured"></td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr :style="{background: this.searchResults.color }">
          <th scope="row">1</th>
          <td v-text="this.searchResults.code"></td>
          <td v-text="this.searchResults.name"></td>
          <td v-text="this.searchResults.stock"></td>
          <td v-text="this.searchResults.price"></td>
          <td v-text="this.searchResults.featured"></td>
        </tr>
      </tbody>
    </table>

    <hr />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      code: '',
      showResult: true,
      searchResults: ''
    };
  },
  methods: {
    searchCode(){
      let result = this.byId(this.code)
      this.showResult = false
      this.searchResults = result
    }
  },
  computed: {
    ...mapGetters(["inStock", "byId"])
  }
};
</script>

<style>
  .search h1{
    text-align: center;
    margin-bottom: 25px;
  }
  .table th, .table td{
    border: none;
    font-weight: bold;
  }
</style>