<template>
    <div class="container">
        <div class="features">
          <div class="detail">
            <div>
                <img class="product__image" :src=productDetail.image>
            </div>
          <div>
            <h3>{{productDetail.title}}</h3>
             <div>
            
        </div>
            <p>{{productDetail.price}}€</p>
            <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor in. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>{{productDetail.description}}</p>
            
          </div>
          
          </div>

    </div>
    <div class="button">
        <div class="panier">
            <Button btnTitle="ajouter au panier" :btnFunction="() => addToPanier(productDetail)" />
        </div>
        <div class="favoris">
            <Button btnTitle="ajouter au favoris" :btnFunction="() => addToWishlists(productDetail)" /> 
        </div>
        

    </div>
    
    </div>
</template>

<script>

    import TitlePage from '../../components/TitlePage'
    import Product from '../../apollo/queries/product.gql'
    import Button from "../../components/Button"
    import wishlist from "../../mixins/wishlist"
    import panier from "../../mixins/panier"

    export default {
        components: {
            Button,
            TitlePage
        },
        data: function() {
            return {
                productDetail: {}
            }
        },
        created() {
            console.log(this.$route.params.id)
        },
        apollo: {
            productDetail: {
                query: Product,
                variables() {
                    return {
                        id: this.$route.params.id
                    }   
                },
                update(data) {
                    console.log(data.product);
                    return data.product;
                }
            }
        },
         mixins: [wishlist, panier],
};
    
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
    .detail{
  display: flex;
  align-items:center;
  margin-bottom: 55px;
}
    .button{
         display: flex;
  align-items:center;
  margin-bottom: 55px;

    }
    .panier{
        margin-right: 20px;
    }
</style>