# Create IPFS Dapp

Demo video:

I really like [create-react-app](https://github.com/facebook/create-react-app). You can just run `npx create-react-app` in your terminal and it will bootstrap a simple react application for you. It is used by thousands of developers around the world to easily get started ith a new react project.

On the other side, when I build an IPFS app, I always have to copy/paste my IPFS elements from my other projects to my new one, so I thought: It would be very usefull to have the equivalent of `create-react-app` but for IPFS. Introducing `create-ipfs-dapp` !

## About create-ipfs-dapp

As part of the Developer Tooling track, I've created a package that can bootstrap a basic IPFS Dapp with just one command `npx create-ipfs-dapp`, no need to install anything.

I've deployed my ipfs-template and create-ipfs-dapp packages on npm: https://www.npmjs.com/search?q=create-ipfs-dapp, so as long as you have node and npm, you can just run :

```sh
npx create-ipfs-dapp my-dapp
cd my-dapp
npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your dapp.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

## How it's made

`create-ipfs-dapp` is a fork of `create-react-app` but with an IPFS template. So far, I've only coded a basic template in Javascript that allows you to create a simple IPFS Dapp, but we plan on adding options later via an IPFS mini-grant to add an '--typescript' option to bootstrap the project in Typecript, an '--hardhat' to include an hardhat configuration with a demo smart contract, and much more...
