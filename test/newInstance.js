function MessageModal (){

}

MessageModal.prototype.newInstance= (_props) =>{
    return {
        show () {
          console.log("111")
        }
      }
}

const Instance = MessageModal.prototype.newInstance();
Instance.show();

new MessageModal().newInstance().show();

var Obj = {};
Obj.newInstance = (_props) => {
    return {
        show () {
          console.log(_props)
        }
      }
}
Obj.newInstance("aaa").show()

console.log(typeof Obj)

console.log(typeof MessageModal)


