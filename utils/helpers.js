module.exports = {
    test(){
        console.log("test helper!")
    },
    parseGreeting(name){
        return `${name} ${name === "Ivan" ? "You sexy beast!": ""}`
    }
}