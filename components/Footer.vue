<template>
    <footer class="footer__main">
        <div class="footer__nav"></div>
        <div class="footer__logo"></div>
        <div class="footer__bottom text-center">
            <p>
                {{copyright}}
            </p>
        </div>
    </footer>
</template>

<script>
    export default {
        data: function() {
            return {
                copyright: "Copyright 2021"
            }
        }
    }
</script>

<style scoped>
   .footer__main{
       position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  
  color: black;
  text-align: center;
  margin-top:35px;
   }
</style>