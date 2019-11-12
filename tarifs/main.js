var tarife = {
      tarifelist :[
​
          {festNetz1 : 1 , mobilFunk1 : 9},
​
          {festNetz2 : 3 , mobilFunk2 : 19}
​
                  ],
​
      getGünstigstenTarif: function (anrufliste){
          var price = 0
          for(i=0; i< anrufliste.length; i++){
              var anruf = anrufliste[i]
              var direction = anruf.split(" ")[0]
              var anschluss = anruf.split(" ")[4]          
              if(direction == "out"){
                  if(anschluss == "mobil"){
                      price += this.tarifelist[0].mobilFunk1 
                  }else{
                      price += this.tarifelist[0].festNetz1
                  }
                    
              }
​
          
          
          }
          return price
                                                          
      },
}