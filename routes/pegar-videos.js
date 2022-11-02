const fs = require("fs");
const fetch = require("node-fetch");
const API_KEY = "AIzaSyCMVvtWwzEooexyKHBuYV9a7VhxpB9hEyc";

async function pegarVideos(query, resultsPerPage, order){
    let idSJCC = "";
    let vidlinks = [];
    let tubeURL = "https://www.youtube.com/watch?v=";
    let url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&q=${query}`;
    if (resultsPerPage) {
        url = `${url}&maxResults=${resultsPerPage}`;
      }else if(resultsPerPage && order){
        url = `${url}&maxResults=${resultsPerPage}&order=${order}`;
      }else if(order){
        url = `${url}&order=${order}`;
      }

    const response = await fetch(url);
    const data = await response.json();
    //console.log(data.items[0].id.videoId);

    for(let i = 0; i < data.items.length; i++){
        vidlinks[i] = tubeURL.concat(data.items[i].id.videoId);
        //console.log(vidlinks[i]);
    }

    return vidlinks;
}

//pegarVideos("crime", 10, "date");

module.exports = {pegarVideos}