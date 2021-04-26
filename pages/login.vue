<template>
    <form class="form__login w-1/3 mx-auto">
        <TitlePage title="Se connecter"/>
        <!-- <FormGroup textLabel="Email" inputType="email" :inputModel="email" />
        <FormGroup textLabel="Password" inputType="password" :inputModel="password" /> -->
        <div class="form__group">
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input class="border-2 rounded-sm my-1 h-10 w-full" type="email" v-model="email" :name="email"/>
        </div>
        <div class="form__group">
            <label class="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input class="border-2 rounded-sm my-1 h-10 w-full" type="password" v-model="password" :name="password"/>
        </div>
        <div class="button">
            <div class="btn__connect">
                <Button btnTitle="Se connecter" :btnFunction="login"/>
            </div>
            
            <div>
            <Button btnTitle="S'inscrire" :btnFunction="registration"/>
            </div>  
        </div>
        


        <div class="message__error text-red-800" v-if="messageError">
             {{messageError}}
        </div>
    </form>
</template>

<script>

    import TitlePage from '../components/TitlePage'

    export default {
        components: {

            TitlePage
        },
        data: function() {
            return {
                email: "",
                password: "",
                messageError: ""
            }
        },
        methods: {
            registration: function() {
                this.$router.push('registration')
            },
            login: function() {
                const body = {
                    email: this.email,
                    password: this.password
                }
                this.$login(body)
                .then((data) => {
                    if(data.auth) {
                        localStorage.setItem("token", data.token)
                        this.$store.commit('isAuth');
                        this.$router.push('account')
                        
                    }
                    else {
                        this.messageError = "email ou mot de passe n'est pas valide"
                    }
                })
                .catch(err => console.log(err))
            }
        }
    }
</script>

<style scoped>
    .form__group {
       margin: 40px 0px;
   }
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
   .button{
       display: flex;
       
   }
   .btn__connect{
       margin-right: 35px;
   }
</style>