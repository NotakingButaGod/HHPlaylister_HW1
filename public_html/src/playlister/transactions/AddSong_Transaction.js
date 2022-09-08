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
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initModel,id) {
        super();
        this.model = initModel;
        this.id = id;
    }

    doTransaction() {
        if(this.model.listofdeletedsongname.length !== 0){

            let name = this.model.listofdeletedsongname[this.model.listofdeletedsongname.length-1];
            console.log(name);
            let artist = this.model.listofdeletedsongartist[this.model.listofdeletedsongname.length-1];
            let youtubeid = this.model.listofdeletedsongyoutubeid[this.model.listofdeletedsongname.length-1];
            console.log(this.model.addNewSong(name,artist,youtubeid));
        }
        //this.model.addNewSong(this.list)
    }
    
    undoTransaction() {
        this.model.deleteSong(this.id);

    }

}