export default ({app}, inject) => {
    inject('login', (body) => {
        return fetch(`${process.env.API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-type": "Application/json",
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
    }),
    //Pour récupérer un utilisateur "user/:id"
    inject('getMe', (id, token) => {
        return fetch(`${process.env.API_URL}/user/${id}`,{
            headers: {
                "Authorization":token
            }
        })
        .then(res=>res.json())
    }),
    inject('createUser', (body) => {
        return fetch(`${process.env.API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-type": "Application/json",
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
    }),
    inject('createOrder', (body) => {
        return fetch(`${process.env.API_URL}/orders`, {
            method: "POST",
            headers: {
                "Content-type": "Application/json",
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
    }),
    inject('getOrder', (id) => {
        return fetch(`${process.env.API_URL}/order/${id}`, {
            method: "GET"
        })
        .then(res => res.json())
    }),
    inject('getOrders', () => {
        return fetch(`${process.env.API_URL}/orders`, {
            method: "GET"
        })
        .then(res => res.json())
    }),
    inject('updateUser', (id, body) => {
        return fetch(`${process.env.API_URL}/user/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "Application/json",
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
    })

}