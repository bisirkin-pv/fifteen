(function (){    
    'use strict'
    
    let version = '0.0.1'
        ,lastUpdateDate = '30.10.2019'
    
    var state = []
        ,table = undefined
        ,count_move = 0
    
    /*
        Object: FifteenGame, constructor
    */
    function FifteenGame(){
    }
        
    /*  
        Object: FifteenGame, return current version
        return: String - current version
    */
    function getVersion(){
        return version
    }
    
    /*  
        Object: FifteenGame, return current version
        In: DomElement table - Table for playing field
    */
    function init(table_game){
        table = table_game
        for(let i=0; i<16; i++){
            state.push(i)
        }
        start()
    }
    
    /*  
        Object: FifteenGame, create table for game
    */
    function tableHTML(){
        _clearTableHTML()
        let i = 0
        for(let row = 1; row < 5; row++){
            var tr = document.createElement('tr')
            for(let cell = 1; cell < 5; cell++){
                var td = document.createElement('td')
                td.innerHTML = state[i]
                td.dataset.number = i
                if(state[i] === 0){
                    td.classList = 'zero_block'
                }else{
                    td.classList = ''
                }
                tr.appendChild(td)
                i++
            }
            table.appendChild(tr)
        }

    }
    
    /*  
        Object: FifteenGame, remove rows in table 
    */
    function _clearTableHTML(){
        while(table.rows.length > 0) {
            table.deleteRow(0);
        }
    }
    
    /*  
        Object: FifteenGame, start new game
    */
    function start(){
        _shuffle(state)
        tableHTML()
    }
    
    /*
        Object: FifteenGame, suffle
        In: Array array - digit array
    */
    function _shuffle(array){
        for(let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
    
    /*
        Object: FifteenGame, sets the listener for updates when the focus is lost
        In: String selectorSource - css selector to start button
    */
    function addListener(sourceElementId){
        let sourceElement = document.querySelector(sourceElementId);
        let action = "click";
                sourceElement.addEventListener(action, function(obj){                    
                     start()
                }, true);
    }
    
    /*
        Functions available from outside
    */
    FifteenGame.getVersion = getVersion
    FifteenGame.init = init
    FifteenGame.start = start
    FifteenGame.addListener = addListener
   

    /*
        "Export" the FifteenGame to the outside of the module
    */
    window.FifteenGame = FifteenGame
}())