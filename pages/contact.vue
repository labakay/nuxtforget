<template>
    <div>
        <TitlePage title="contact"/>
        <form class="form__contact w-1/3 mx-auto">
        <div class="form__group">
            <label class="block text-sm font-medium text-gray-700" for="name">Nom</label>
            <input class="border-2 rounded-sm my-1 h-10 w-full" type="text" v-model="name" :name="name"/>
        </div>
        <div class="form__group">
            <label class="block text-sm font-medium text-gray-700" for="email">Email</label>
            <input class="border-2 rounded-sm my-1 h-10 w-full" type="email" v-model="email" :name="email"/>
        </div>
        <div class="form__group">
            <label class="block text-sm font-medium text-gray-700" for="subject">Sujet</label>
            <input class="border-2 rounded-sm my-1 h-10 w-full" type="text" v-model="subject" :name="subject"/>
        </div>
        <div class="form__group">
            <label class="block text-sm font-medium text-gray-700" for="message">Message</label>
            <textarea class="border-2 rounded-sm my-1 h-10 w-full" v-model="message" :name="message"/>
        </div>
        <div>
            <Button btnTitle="Envoyer" :btnFunction="sendMail"/>
           
        </div>
        <div class="success__message" v-if="successMessage"></div>
    </form>
    </div>
</template>

<script>
    // API KEY : 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 
    import TitlePage from "../components/TitlePage";
    import sgMail from "@sendgrid/mail";
    sgMail.setApiKey("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")
    
    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                email: "",
                name: "",
                subject: "",
                message:"",
                successMessage: ""
            }
        },
        methods:{
            sendMail: function() {
                fetch('/api/send-email', {
                    method: "POST",
                    headers: {
                        "Content-type":"application/json"
                    },
                    body: JSON.stringify({
                        name: this.name,
                        email: this.email,
                        subject: this.subject,
                        message: this.message
                    })
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.successMessage=data.message
                })
                .then(() => {
                    console.log("email envoyé")
                })
                .catch(err => console.log(err))
                console.log(this.name, this.email, this.subject, this.message)
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
   .form__group textarea{
       margin-top:10px;
    border:#161616 1px solid;
    margin-bottom: 35px;
   }
</style>