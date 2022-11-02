const fs = require("fs");
const fetch = require("node-fetch");
const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.YT_API_KEY;


async function pegarVideos(query, resultsPerPage, order){
    let idSJCC = process.env.JCTV_CHANNEL_ID;
    let vidInfos = {
      links: [],
      titulos: [],
      descritivos:[]
    };
    let tubeURL = "https://www.youtube.com/embed/";
    let url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&channelId=${idSJCC}&q=${query}&videoEmbeddable=true&maxResults=${resultsPerPage}`;
    if(order){
        url = `${url}&order=${order}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    //console.log(data.items[0].id.videoId);

    for(let i = 0; i < data.items.length; i++){
        vidInfos.links[i] = tubeURL.concat(data.items[i].id.videoId);
        vidInfos.titulos[i] = data.items[i].snippet.title;
        vidInfos.descritivos[i] = data.items[i].snippet.description;
        //console.log(vidInfos.links[i]);
        //console.log(vidInfos.titulos[i]);
        //console.log(vidInfos.descritivos[i]);
    }
    return vidInfos;
}

//pegarVideos("crime", 10, "date");

module.exports = {pegarVideos}