<template>
    <div class="container">
        <div class="message__error text-center" v-if="!isLogged">
            <p>vous n'êtes pas connécté</p>
        </div>
        <div class="user__content text-center" v-else>
        <TitlePage title="ACCOUNT PAGE"/>
        <p>Nom: {{user.lastName}}</p>
        <p>Prénom: {{user.firstName}}</p>
        <p>Email: {{user.email}}</p>
        <p>Téléphone: +33{{user.telephone}}</p>
        <p>Adresse: {{user.adresse}}</p>
        <div class="input__wrapper">
            <Button btnTitle="Modifier votre profil" :btnFunction="edit"/>
        </div>
        <div class="input__wrapper">
            <Button btnTitle="Se déconnecter" :btnFunction="logout"/>
        </div>
        <div >
            <h1>VOS COMMANDES</h1>
           
        </div>
       <div class="commande" v-for="commande in commandeList" :key="commande.id">
            <div>
                <h3>Commande N° {{commande._id}}</h3>
                <p>Date de la commande : {{commande.createdAt | moment("dddd, MMMM Do YYYY, h:mm:ss a")}} </p>
                <p>{{commande.user.firstName}} {{commande.user.lastName}}</p>
                <p>Montant : {{commande.amountTotal}}€</p>
                
            </div>
        </div>
        <div >
        
        
        </div>
    </div>
  

       
</div>
    
</template>

<script>
    import TitlePage from "../components/TitlePage";
    import Button from "../components/Button";
    import VueJwtDecode from "vue-jwt-decode";
    import moment from 'moment';

    export default {
        components: {
            TitlePage,
            Button
        },
        data: function() {
            return {
                isLogged: false,
                user:{},
                orders:{},
                commandeList: []
            }
        },
        filters: {
            moment: function (date) {
                return moment(date).format('DD-MM-YY, h:mm a');
            }
        },
        middleware:"auth",
        methods: {
            logout: function() {
                localStorage.removeItem('token');
                this.$store.commit('loggedOut');
                this.isLogged = false;
                this.$router.push('/');
            },
            edit: function() {
                this.$router.push('editprofile');
            }
        },
        fetch() {
            const token =  localStorage.getItem('token');
            if(token) {
                
                const jwtDecoded = this.$decodeJwt(token); 
                // console.log(jwtDecoded);
                this.$getMe(jwtDecoded.id, token)
                .then(data => {
                    // console.log(data);
                    this.isLogged = true;
                    this.user = data;
                    
                })
                .catch(err=>console.log(err))
            }
            if(this.user) {
                this.$getOrders()
                .then(data => {
                    this.orders = data;
                    
                    for(var i=0; i<data.length; i++) {
                        var idUserInOrder = data[i].user._id
                        // console.log(data[i].user._id)
                        for(var j=0; j<data[i].products.length; j++){
                            if(idUserInOrder == this.user._id){
                                
                           
                                this.commandeList.push(data[i]);
                                
                                this.commandeList.splice(i)
                                // this.productList = data[i].products[j]
                               
                               
                            }
                            
                          
                        }
                       
                    }
                     console.log(this.productList)
                })
                
                .catch(err=>console.log(err))
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
.input__wrapper{
    margin-top: 35px;
    margin-bottom: 35px;
}
.commande{
    text-align: left;
    border-width:2px;
border-style:solid;
border-color:black;
margin-bottom: 55px;
}
.commande h3{
    color: black;
padding: 5px 0 9px;
letter-spacing: .8px;
font-weight: 700;
font-size: 20px;
line-height: 1.1;
max-width: 520px;
font-family: roboto condensed,sans-serif;
text-transform: uppercase;
width: 100%;
outline: none !important;
text-decoration: none !important;
text-align: left;
margin-left: 10px;
}
.commande p{
   color: #414141;
margin-top: .3rem;
margin-bottom: .6rem;
padding: 5px 0 9px;
letter-spacing: .8px;
font-weight: 700;
font-size: 15px;
line-height: 1.1;
max-width: 520px;
font-family: roboto condensed,sans-serif;
text-transform: uppercase;
width: 100%;
outline: none !important;
text-decoration: none !important;
text-align: left;
margin-left: 10px;
}
</style>