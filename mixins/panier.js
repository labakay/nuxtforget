export default {
    
    methods: {
        addToPanier(product) {
            let productBD = JSON.parse(localStorage.getItem('panier')) || [];
            let productObject = {
                id: this.productDetail.id,
                title: this.productDetail.title,
                description: this.productDetail.description,
                price: this.productDetail.price,
                image: this.productDetail.image
            }

            let indexOfExistingProduct = productBD.findIndex(
                (el) => el.id === productObject.id
            );
            if(indexOfExistingProduct !== -1) {
                this.$alert("Ce produit est déjà sur votre liste","","warning")
            }
            else {
                productBD.push(productObject)
                this.$alert(
                    "",
                    "Success",
                    "success"
                  ).then(() => console.log("Closed"));
                console.log("success")
            }

            localStorage.setItem('panier', JSON.stringify(productBD));
        },
        getProductPanier() {
            let productBD = JSON.parse(localStorage.getItem('panier'));
            return productBD;
        },
        clearPanier() {
            localStorage.removeItem('panier');
        },
        removeProductPanier(product) {
            let productBD = JSON.parse(localStorage.getItem('panier'))
            let indexOfExistingProduct = productBD.findIndex(
                (el) => el.id === product.id
            )

            if(productBD.length > 1) {
                productBD.splice(indexOfExistingProduct, 1)
                location.reload();
                console.log("supprimé")
            }
            else {
                productBD = []
                location.reload();
            }
            localStorage.setItem('panier', JSON.stringify(productBD));
        }
    }
}