import { Button, Link } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useTransaction } from 'wagmi'
import { BigNumber } from '@ethersproject/bignumber'

const Home: NextPage = () => {
  const [{ data, error, loading }, sendTransaction] = useTransaction({
    request: {
      to: '0x0FfCfcC9EB64597c1522b5e4507020Ccc29054e5',
      value: BigNumber.from('10000000000000000'), // 1 ETH
    },
  })

  // const handleClick = () => {
  //   sendTransaction({ to: "0x0FfCfcC9EB64597c1522b5e4507020Ccc29054e5", value: utils.parseEther("0.01") })
  // }
  return (
    <div className={styles.container}>
      <Head>
        <title>Dungeon Business</title>
        <meta name="description" content="ETH + Next.js DApp Boilerplate by ilyxium" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          Opening soon !
        </h2>

        <div className={styles.grid}>
          <Link href='https://twitter.com/ilyxium' isExternal>
            <Button
              backgroundColor="hsla(11,80%,31%,1)"
              borderRadius="25px"
              borderColor="#b35b13"
              borderWidth="2px"
              margin={2.5}
              _hover={{
                bg: 'hsla(11,80%,31%,1)'
              }}
              _active={{
                bg: 'hsla(11,80%,31%,1)'
              }}
              onClick={() => ""}
            >
              <p>Follow us on twitter</p>
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
