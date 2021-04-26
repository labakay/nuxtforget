<template>
    <div class="title__page my-5">
        <h1 class="text-center text-5xl uppercase font-semibold text-teal-900">
            {{ title }}
        </h1>
    </div>
</template>

<script>
    export default {
        name:"TitlePage",
        props: {
            title: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    h1{
  font-family: swiss721bt-blackoutline,sans-serif;
text-transform: uppercase;
font-size: 2.5rem;
color: #000;
font-weight: 900;
text-decoration: none;
max-width: 100%;
margin-bottom: 35px;
font-weight: bold;
text-shadow: #161616 1px 0 1px;
}
</style>