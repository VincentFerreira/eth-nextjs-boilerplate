import { Button, Link, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import abi from "../utils/Dungeon.json"
import { useConnect, useAccount, defaultChains, defaultL2Chains } from 'wagmi'
import { ethers } from "ethers";
import React, { useState } from 'react';


import { useTransaction } from 'wagmi'
import { BigNumber } from '@ethersproject/bignumber'

const Home: NextPage = () => {
  const [isOwnerOfDungeons,setOwnerOfDungeon] = useState(false);


  //Contracts info
  const contractAddress = process.env.DUNGEON_CONTRACT;
  const contractABI = abi.abi;

  //user info
  const [{ data: accountData, error: accountError, loading: accountLoading }] = useAccount({
    fetchEns: true,
  })

  const getIsOwnerOfDungeons = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        /*
        * You're using contractABI here
        */
        const dungeonContract = new ethers.Contract(contractAddress, contractABI, signer);

        let isOwner = await dungeonContract.isOwnerOfDungeons()
        setOwnerOfDungeon((prevState) => !prevState);
        console.log("User has a dungeon");
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const mintDungeon= async () => {
    try {
      setOwnerOfDungeon(true)
    } catch (error) {
      console.log(error);
    }
  }

  // const handleClick = () => {
  //   sendTransaction({ to: "0x0FfCfcC9EB64597c1522b5e4507020Ccc29054e5", value: utils.parseEther("0.01") })
  // }
  return (
    <div className={styles.container}>
      <Head>
        <title>Dungeon Business - The Dungeon</title>
        <meta name="description" content="The dungeon of dungeon business" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
        {accountData ? (
          <Button
              backgroundColor="hsla(11,80%,31%,1)"
              borderRadius="25px"
              borderColor="#b35b13"
              borderWidth="2px"
              margin={2.5}
              _hover={{
                bg: 'red.900'
              }}
              _active={{
                bg: '#121212'
              }}
              onClick={() => mintDungeon()}
            >
              <p>Mint your dungeon : 1.5 $AVAX</p>
            </Button>
        ) : (
          <div>Please connect</div>
        )
        }
        {isOwnerOfDungeons ?(
            <Button>coucou</Button>
          ) : ( <Button>



            
          </Button>)}
        </div>
      </main>
    </div>
  )
}

export default Home
