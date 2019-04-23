const Btn = require("./Btn");
class BtnPrimary extends Btn{
    
    get _backgroundColor(){
        return this.backgroundColor = '#ffffff';
    }

}

module.exports = BtnPrimary;