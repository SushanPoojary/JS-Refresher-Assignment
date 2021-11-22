module.exports = function(name){
    this.name = name;
    this.msg = function(){
        return this.name + " " + "you have a great taste being an anime fan!";
    }
}