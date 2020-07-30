  var content =`客官，您的机票还未付款哦！@airLine,@flyOffDate，总支付金额@payAmount元，请在@expireDate之前戳这里支付@payLink，或登录"手机客户端--我的--待支付订单"去付款哦` 
  content = content.replace(/@([a-zA-Z]+)/g, (match, $1) => {
          console.log(match+"----"+$1);
          console.log($1 =="@airLine");
        
          return  $1;
        });
      
  
        console.log(content);
