function greet(name: string | null) {
    if (name)
        console.log(name.toLocaleUpperCase)
    else 
        console.log('Hola!')
}

greet(null)