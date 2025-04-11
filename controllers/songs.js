const songus = require("../models/songs");

const getAllSongs= async(req,res)=>{
    const {songname,artistname,language,sort,select}=req.query;
    const queryObject={};
    if(songname){
      
        queryObject.songname={$regex:songname,$options:"i"};
      
    }
    
if(artistname){
    queryObject.artistname={$regex:artistname,$options:"i"};
    
}
    
if(language){
    queryObject.language=language;
}

let apidata = songus.find(queryObject);

if(sort){
    let sortfix=sort.replace(","," ");
  apidata=apidata.sort(sortfix);
}
if(select){
    let selectfix=select.replace(","," ");
  apidata=apidata.select(selectfix);
}

let page = Number(req.query.page)||1
let limit= Number(req.query.limit)||8
let skip =(page-1)*limit;
apidata=apidata.skip(skip).limit(limit);



     const mysongslist = await apidata;
  //  const mydata = await songis.find(req.query);
    res.status(200).json({mysongslist});
};

const getAllSongsTesting= async(req,res)=>{
    const songs = await songus.find(req.query);
    res.status(200).json({songs,nbHits: songs.length});
};


module.exports={getAllSongs,getAllSongsTesting};