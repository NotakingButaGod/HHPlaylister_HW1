import jsTPS_Transaction from "../../common/jsTPS.js"
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initModel) {
        super();
        this.model = initModel;
        
    }

    doTransaction() {
        this.id = this.model.songtodelete;
        this.songtoundo = this.model.getSong(this.id);
        this.model.deleteSong(this.id);

    }
    
    undoTransaction() {
        //console.log(this.songtoundo);
        //console.log(this.songtoundo.title);
        //console.log(this.id);
    
        this.model.addNewSong(this.songtoundo.title,this.songtoundo.artist,this.songtoundo.youTubeId,this.id);
    }

}