<template>
    <div class="container">
        
        <div class="loader" v-if="loading">loading...</div>
        <div class="search__form">
            <p>Entrez le produit rechercher  : </p>
            <input class="search__input" placeholder="Recherche" type="text" name="searchValue" v-model="searchValue"/>
        </div>
        <div class="products grid grid-cols-4 gap-4 ">
        <div class="product__grid flex justify-center" v-for="product in filteredShop" :key="product.id">
            <div class="product__item grid justify-items-center">
                
                <NuxtLink :to="`/product/${product.id}`" >
                <img class="product__image h-41" :src=product.image>
                <p>{{product.title}}</p>
                <p>{{product.price}}€</p>
                </NuxtLink>
            </div>
        </div>
       </div>
    </div>
</template>

<script>

    import TitlePage from '../components/TitlePage';
    import Products from '../apollo/queries/products.gql';

    export default {
         components: {

            TitlePage
        },
        data: function() {
            return {
                searchValue:"",
                productsArray: [],
                loading: 0
            }
        },
        computed: {
            filteredShop: function() {
                let filter = new RegExp(this.searchValue, 'i');
                return this.productsArray.filter(item=>item.title.match(filter));
            }
        },
        apollo: {
            $loadingKey: "loading",
            productsArray: {
                prefetch: true,
                query: Products,
                update(data) {
                    console.log(data.products);
                    return data.products;
                }
            }
        }
        
    }
</script>

<style scoped>
    .container {
  margin: 0 auto;
  min-height: 20vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 35px;
}
.search__form {
    margin-top: 55px;
    margin-bottom: 55px;
}
.search__form p{
    color: #414141;
letter-spacing: .8px;
font-weight: 700;
font-size: 15px;
line-height: 1.1;
font-family: roboto condensed,sans-serif;
text-transform: uppercase;
width: 100%;
outline: none !important;
text-decoration: none !important;
text-align: center;
}
.search__input{
    margin-top:10px;
    border:#161616 2px solid;
}
</style>