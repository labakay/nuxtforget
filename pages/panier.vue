<template>
<div>
    <div>
        <TitlePage title="Panier"/>
    </div>
  <div class="container">
     
     
    <div class="favoris" v-for="product in productArray" :key="product.id">
       
        <NuxtLink :to="`/product/${product.id}`">
            <img class="product__image" :src=product.image>
            <p>{{ product.title }}</p>
            <p>{{product.price}}€</p>
        </NuxtLink>
        <div class="btn__delete">
          <button type="submit" v-on:click="()=>removeProductPanier(product)">X</button>
        </div>
         
    </div>
  
    
  </div>
  
    <div class="total">
        <h3>total: {{newTotal}}€ </h3>
        <Button btnTitle="paiement" :btnFunction="paiement"/>
         
    </div>
  <div class="btn__deleteall">
      
      <Button btnTitle="supprimer tous les produits" :btnFunction="clearAllProducts"/>
      
    </div>
</div>
    
</template>

<script>
    import panier from '../mixins/panier';
    import TitlePage from '../components/TitlePage'
    import Button from '../components/Button'

    export default {
        head: {
            title: "Panier",
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: "My description meta data"
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'vue JS, JavaScript, frontend'
                }
            ]
        },
        components: {

            TitlePage,
            Button
        },
         data: function () {
        return {
            productArray: [],
            total: 0,
            newTotal: 0,
            user: {},
            products: [],
            userOrder: ""
        };
    },
    methods: {
      clearAllProducts: function () {
        this.clearPanier();
        this.productArray = this.getProductPanier();
      },
      paiement: function() {
           const token =  localStorage.getItem('token');
            if(token) {
                const jwtDecoded = this.$decodeJwt(token); 
                
                this.$getMe(jwtDecoded.id, token)
                .then(data => {
                    
                    this.user = data;
                   this.userOrder = this.user._id;
                    
                })
                .catch(err=>console.log(err))
               
            }
            if(this.user){
                 const body = {
                            amountTotal: this.newTotal,
                            products: this.products,
                            user: this.userOrder
                        }
                       
                        
                this.$createOrder(body)
                 .then((data) => {
                    
                    if(data) {
                        console.log(data)
                        this.$router.push('/account');
                    }
                    else {
                        console.log("failed")
                    }
                })
                .catch(err => console.log(err))
                console.log("login")
            }
            else{
                console.log("not login")
            }
          
      }
    },
    mounted() {
        
        this.productArray = this.getProductPanier();
       
        for(var i=0; i<this.productArray.length; i++) {
            
            this.total += this.productArray[i].price;
            this.newTotal =  this.total.toFixed(2);
            this.products.push(this.productArray[i].id);
        }
        // console.log(this.products)
        
    },
   
    mixins:[panier]
    }
</script>

<style scoped>
     .container {
    display: flex;
  margin: 0 auto;
  min-height: 20vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 35px;
}

  .btn__deleteall{
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 55px;
  }
  .btn__delete{
    color: red;
    
  }
  .product__image{
      width: 100px;
      height: 100px;
      float: left;
  }
  .total{
     justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 55px;
    font-weight: bold;
    font-size: 20px;
    
    margin-bottom: 5px;
    text-transform: uppercase;
  }
</style>