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
          Burbank Live
        </h1>
        Introducing the Doggos of Burbank, an NFT collection featuring beautiful and unique AI-generated dog pictures.
        <hr className="my-4" />

        These one-of-a-kind digital artworks were created by our talented team of artists, using the latest in machine learning technology. Each piece is a unique representation of the many furry friends that call Burbank home.
        <hr className="my-4" />

        But this collection is more than just beautiful art. By purchasing an NFT from the Doggos of Burbank collection, you'll be supporting our local news service and helping us to continue providing essential coverage to the community.
        <hr className="my-4" />
        Get your own piece of history and support your local news service at the same time. Collect the Doggos of Burbank today.

        <hr className="my-4" />
        <a href="https://burbanklive.com" >BurbankLive.com</a>
        <hr className="my-4" />
        <img src="images/preview.gif" width="100%" />
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
            Burbank Live &copy; 2021 All rights reserved.
        <hr className="my-4" />
      </div>
    </div>
  );
};

export default ConnectToMetamask;
