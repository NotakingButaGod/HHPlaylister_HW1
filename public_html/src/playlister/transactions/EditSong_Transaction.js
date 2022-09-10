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
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initModel,oldsong,newsong,id) {
        super();
        this.model = initModel;
        this.oldsong1 = {title: oldsong.title, artist: oldsong.artist, youTubeId: oldsong.youTubeId};
        this.newsong1 = {title: newsong.title, artist: newsong.artist, youTubeId: newsong.youTubeId};
        this.id1 = id;
        this.individualedit = [];
    }

    doTransaction() {
        //this.individualedit.push({title: this.oldsong.title});
        //console.log(this.individualedit);
        this.model.editSong(this.id1,this.newsong1.title,this.newsong1.artist,this.newsong1.youTubeId);
        
        //this.model.editSong(this.id,name,artist,youtubeid);

        //console.log(this.editsonglist);
    }
    
    undoTransaction() {
        console.log(this.oldsong1);
        this.model.editSong(this.id1,this.oldsong1.title,this.oldsong1.artist,this.oldsong1.youTubeId);
    }

}