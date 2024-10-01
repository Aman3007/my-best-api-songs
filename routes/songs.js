const express =require("express");
const router =express.Router();

const{getAllSongs,getAllSongsTesting}=require("../controllers/songs")
router.route("/").get(getAllSongs);

router.route("/testing").get(getAllSongsTesting);

module.exports=router;