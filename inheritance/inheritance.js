var eatable = {
    create : function create(name , type) {
        var newVar = Object.create(this);
        newVar.Name = name;
        newVar.type = type;
        return newVar;
    },
    eat : function eat() {
        console.log('Eating '+ this.Name + 'and it is a '+ this.type);
    }
};

var fruit = {
    create : function create(name) {
       
    }
}

fruit.create('apple');