import React, { PureComponent } from "react";
import metamaskIcon from "./metamask.svg";

import Web3 from 'web3';

//import { Entity, Scene } from "aframe-react";
import "./styles.css";

const items = []
const itemsonchain = []
const itemschar = []
const itemsonchainmma = []

for (let i = 0; i < 3; i++) {
        const rand = Math.floor(Math.random() * 2000);;
        var index = rand;
        var s = index+"";
        var newImageUrl = '/images/loot/' + s + '.png';
        items.push(<div class="card col-md-4" ><img class="img-fluid"  src={newImageUrl} /><div class="card-body"> <h5 class="card-title">NO {index}</h5></div></div>)
}
for (let i = 1; i < 4; i++) {
        const rand = i;;
        var index = rand;
        var s = index+"";
        var newImageUrl = '/images/loot' + s + '.png';
        itemsonchain.push(<div class="card col-md-4" ><img class="img-fluid" src={newImageUrl} /><div class="card-body"> <h5 class="card-title">NO {index}</h5></div></div>)
}
for (let i = 1; i < 4; i++) {
        const rand = Math.floor(Math.random() * 250);;
        var index = rand;
        var s = index+"";
        var newImageUrl = '/images/loot-characters/' + s + '.png';
        itemschar.push(<div class="card col-md-4" ><img class="img-fluid" src={newImageUrl} /><div class="card-body"> <h5 class="card-title">NO {index}</h5></div></div>)
}
for (let i = 1; i < 4; i++) {
        const rand = i;
        var index = rand;
        var s = index+"";
        var newImageUrl = '/images/mmaloot' + s + '.png';
        itemsonchainmma.push(<div class="card col-md-4" ><a href="https://app.nftrade.com/assets/bsc/0x48bf76b0dcc1326ae962b9301c40ee1ea399e186" ><img class="img-fluid" src={newImageUrl} /></a><div class="card-body"> <h5 class="card-title">NO {index} </h5></div></div>)
}
function mouseEnter(control) {
  console.log("mouseEnter: ", control);
}

function mouseLeave(control) {
  console.log("mouseLeave: ", control);
}


const ConnectToMetamask = ({ connectToMetamask }) => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">
          Meme Genesis
        </h1>
        In the depths of the metaverse, there exists a world unlike any other. It's a land where the currency is not measured in dollars or euros, but in memes. In this place, the memes flow like a river, and those who can create the best ones hold the keys to the kingdom.
        <hr className="my-2" />
        It all started when a group of intrepid meme-makers decided to create their own world, a place where they could be free to create and share their memes without fear of censorship or judgment. They called it MemeLand, and it quickly became the go-to destination for anyone looking to get their meme fix.
        <hr className="my-2" />
        But it wasn't just a place for sharing memes. MemeLand was a world of its own, with its own customs, traditions, and even its own economy. The most popular memes became the most valuable currency, and those who could create the best ones were treated like royalty.
        <hr className="my-2" />
        The inhabitants of MemeLand were a quirky bunch, but they all shared a common bond - a love of memes. They would spend their days creating new and hilarious content, sharing it with each other, and engaging in fierce competitions to see who could come up with the funniest material.
        <hr className="my-2" />
        But MemeLand was not without its challenges. There were always those who sought to cheat the system, creating fake memes or stealing the work of others. And there were those who tried to monopolize the meme market, hoarding all the best content for themselves.
        <hr className="my-2" />
        Despite these challenges, MemeLand continued to thrive, a beacon of creativity and humor in a world that often seemed bleak and dreary. It was a place where the power of laughter and the joy of creation reigned supreme, and where the only thing that really mattered was the ability to make people laugh.
        <hr className="my-2" />
        And so, in the heart of the metaverse, MemeLand continued to flourish, a shining example of what could be accomplished when people came together to share their passions and celebrate the things that truly make life worth living.
        <hr className="my-4" />
        <a href="https://memegenesis.com" >MemeGenesis.com</a>
        <hr className="my-4" />
        <button
          onClick={connectToMetamask}
          className="btn btn-primary d-flex align-items-center"
          style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
        >
          Connect Wallet
        </button>
        <hr className="my-4" />

      </div>
      <hr className="my-4" />




      <div className="container">
        <hr className="my-4" />
            Meme Genesis &copy; 2023 All rights reserved.
        <hr className="my-4" />
      </div>
    </div>
  );
};

export default ConnectToMetamask;
