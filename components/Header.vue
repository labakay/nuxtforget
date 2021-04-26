<template>
    <header class="header__main">
        
        <nav class="header__nav">
            
            <ul class="nav__wrapper">
                <div class="logo">
                    <h1>Paldaproject</h1>
                </div>
                <li class="nav__item">
                    <NuxtLink to="/" class="nav__link">
                        Accueil
                    </NuxtLink>
                </li>
                <li class="nav__item">
                    <NuxtLink to="/eshop" class="nav__link">
                        Sneakers
                    </NuxtLink>
                </li>
                <li class="nav__item">
                    <NuxtLink to="/wishlist" class="nav__link">
                        Favoris
                    </NuxtLink>
                </li>
                <li class="nav__item">
                    <NuxtLink to="/panier" class="nav__link">
                        Panier
                    </NuxtLink>
                </li>
                <li class="nav__item">
                    <NuxtLink to="/account" class="nav__link">
                        Mon compte
                    </NuxtLink>
                </li>
                <li class="nav__item">
                    <NuxtLink to="/contact" class="nav__link">
                        Contact
                    </NuxtLink>
                </li>
                <li class="nav__item">
                    <NuxtLink to="/login" class="nav__link">
                        Se connecter
                    </NuxtLink>
                </li>
                <div>
                  
                </div>
                 
            </ul>
            
        </nav>
        
    
    </header>
</template>

<script>

 

    export default {
       
    }
</script>

<style scoped>
    .nav__wrapper {
        display:flex;
        align-items:center;
        justify-content:center;
        background-color: #161616;
        max-width: 100%;
        height: 58px;
    }
    .nav__wrapper li{
        margin: 0px 20px;
        color: #ffffff;
        font-family: Helvetica, 'Helvetica Neue', Arial, 'Lucida Grande', sans-serif;
        text-transform: uppercase;
        font-weight: 600;
        
    }
    .nav__wrapper li:hover{      
        color: #767170;  
    } 
    .logo h1{
        position: relative;
        right: 300px;
        font-family: Brush Script MT,cursive; 
        font-weight: 800;
        font-style: normal;
        font-size: 30px;
        text-transform: uppercase;
        line-height: 1.2em;
        color:#c8c86a;
        font-style: italic;
    }
</style>