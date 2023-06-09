import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { DropLinks, DropLinksSearchOptions, DropLinkClaim } from "@droplinks/sdk"

const inter = Inter({ subsets: ['latin'] })
require('dotenv').config()

DropLinks.init(process.env.KEY)

export default function Home() {
  const getDropLinks = function () {
    DropLinks.getDropLinks({claimed: true}).then((dropLinks) => {
      dropLinks.forEach((dropLink) => {
        console.log('dropLink', dropLink)
        const {id, claimCode, publicAddress, locked, claimLink, campaignId, claimed} = dropLink
      })
    });
  }

  const createDropLink = function () {
    DropLinks.create().then((dropLink) => {
      console.log('created dropLink', dropLink)
      const {id, claimCode, publicAddress, locked, claimLink, campaignId, claimed} = dropLink
    });
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <button onClick={createDropLink}>Create DropLink</button>
        <button onClick={getDropLinks}>Get DropLinks</button>
      </main>
    </>
  )
}
