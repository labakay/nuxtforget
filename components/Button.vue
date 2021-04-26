<template>
    <div>
        <button class="btn" @click.prevent="btnFunction">
            {{btnTitle}}
        </button>
    </div>
</template>

<script>
    export default {
        name:'Button',
        props: {
            btnTitle: String,
            btnFunction: Function
        }
    }
</script>

<style scoped>
    .btn{
        background: #282828;
    background-color: rgb(40, 40, 40);
color: #ffffff;
border: 1px solid #282828;
padding: 0 20px;
text-align: center;
cursor: pointer;
min-height: 44px;
height: 40px;
line-height: 1.2;
vertical-align: top;
font-family: Helvetica, 'Helvetica Neue', Arial, 'Lucida Grande', sans-serif;
font-weight: bold;
font-style: normal;
font-size: 13px;
text-transform: uppercase;
letter-spacing: 1px;
    }
</style>