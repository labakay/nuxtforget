<template>
    <form class="form__login w-1/3 mx-auto">
        <TitlePage title="Modfier votre profil"/>
        <!-- <FormGroup textLabel="Email" inputType="email" :inputModel="email" />
        <FormGroup textLabel="Password" inputType="password" :inputModel="password" /> -->
        <div class="form__group">
            <label class="block text-sm font-medium text-gray-700">Nom</label>
            <input class="border-2 rounded-sm my-1 h-10 w-full" type="text" v-model="lastName" :name="lastName" required/>
        </div>
        <div class="form__group">
            <label class="block text-sm font-medium text-gray-700">Prénom</label>
            <input class="border-2 rounded-sm my-1 h-10 w-full" type="text" v-model="firstName" :name="firstName" required/>
        </div>
        <div class="form__group">
            <label class="block text-sm font-medium text-gray-700">Adresse (adresse, cp, ville, pays)</label>
            <input class="border-2 rounded-sm my-1 h-10 w-full" type="text" v-model="adresse" :name="adresse" required/>
        </div>
         <div class="form__group">
            <label class="block text-sm font-medium text-gray-700">Téléphone</label>
            <input class="border-2 rounded-sm my-1 h-10 w-full" type="tel" v-model="telephone" :name="telephone" required/>
        </div>
    
         <div class="btn">
             <Button btnTitle="Modifier" :btnFunction="edit"/>
            
        </div>


        <div class="message__error text-red-800" v-if="messageError">
             {{messageError}}
        </div>
    </form>
</template>

<script>
    import TitlePage from '../components/TitlePage';

    export default {
        components: {
            TitlePage
        },
        
        data: function() {
            return {
                email: "",
                password: "",
                firstName: "",
                lastName: "",
                isAdmin:"",
                telephone:"",
                adresse:"",
                messageError: "",
                user: {}
            }
        },
        fetch() {
            const token =  localStorage.getItem('token');
            if(token) {
                
                const jwtDecoded = this.$decodeJwt(token); 
                console.log(jwtDecoded);
                this.$getMe(jwtDecoded.id, token)
                .then(data => {
                    console.log(data);
                    this.user = data;
                    
                })
                .catch(err=>console.log(err))
            }
        },
        methods: {
            edit: function() {
                const body = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.user.email,
                    password: this.user.password,
                    isAdmin: this.user.isAdmin,
                    telephone: this.telephone,
                    adresse: this.adresse
                }
                console.log(this.user._id)
                console.log(body)
                this.$updateUser(this.user._id, body)
                .then((data) => {
                    if(this.firstName != "" && this.lastName != "" &&
                   this.telephone != "" && this.adresse != "") {
                        console.log(data)
                        this.$router.push('account')

                    }
                     else {
                        console.log("failed")
                        this.messageError = "tous les champs ne sont pas correctement renseignés."
                    }
                })
                .catch(err => console.log(err))
            }
        }
    }
</script>

<style scoped>
    .form__group label {
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
text-align: left;
   }
   .form__group input{
       margin-top:10px;
    border:#161616 1px solid;
   }
   .btn{
       margin-top: 35px;
   }
</style>