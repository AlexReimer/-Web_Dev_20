function printContext(){
    console.log(this)
}
printContext();

const user = {
    name: 'Vasya',
    print: function () {
        console.log(this.name)
    }
}

user.print();