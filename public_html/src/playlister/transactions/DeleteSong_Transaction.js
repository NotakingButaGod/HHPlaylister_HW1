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
    constructor(initModel,songtodelete,id) {
        super();
        this.model = initModel;
        this.songtodelete1 = {title: songtodelete.title, artist: songtodelete.artist, youTubeId: songtodelete.youTubeId};
        this.id1 = id;
    }

    doTransaction() {
        this.model.deleteSong(this.id1);

    }
    
    undoTransaction() {
        //console.log(this.songtoundo);
        //console.log(this.songtoundo.title);
        //console.log(this.id);
        this.model.addNewSong(this.songtodelete1.title,this.songtodelete1.artist,this.songtodelete1.youTubeId,this.id1);
    }

}