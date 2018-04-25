function hello2(name) {
    return `hello, ${name} ${name}`
}

export default function hello(name) {
    return hello2(name)
}

console.log(hello("World"))