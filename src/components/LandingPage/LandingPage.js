import React from "react";
import Header from "../Header/Header";
import styles from "./LandingPage.module.css";
import Nft from "../../assets/headerNft.svg";
import splashVector from "../../assets/splashVector.svg";
import goldenSvg from "../../assets/golden.svg";
import Logo from "../../assets/Logo.svg";
import discord from "../../assets/discord.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import { Data } from "./collectionData";
const LandingPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.leftContent}>
            <img src={Nft} alt='nft' width='500px' height='450px' />
          </div>
          <div className={styles.rightContent}>
            <div className={styles.rightWrapper}>
              <div className={styles.splashVector}>
                <img src={splashVector} alt='splash vector' />
              </div>
              <h2 className={styles.exclusive}>EXCLUSIVE</h2>
              <h4 className={styles.title}>newest NFT release</h4>
              <p className={styles.text}>
                <span style={{ fontWeight: "800" }}>The BILLIONAIRE CLUB</span>{" "}
                is a private collection of 10 000 billionaire
                <span style={{ display: "block" }}>
                  apes NFTs—unique digital collectibles. The apes are stored as
                </span>
                ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
                <span className={styles.reveal}>Reveal on October 20th</span>
              </p>

              <div style={{ marginTop: "20px" }}>
                <input type='text' placeholder='your@email.com' />
                <button className={styles.button}>Register</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.collectionsWrapper}>
          <h1 className={styles.collectionsHeader}>Collections</h1>
          <p className={styles.collectionsText}>
            With more than 180+ hand drawn traits, each NFT is unique and comes
            with a membership to an exclusive{" "}
            <span style={{ display: "block" }}>
              group of successful investors. Join an ambitious ever-growing
              community with multiple benefits and utilities.
            </span>
          </p>
          <div className={styles.gridContainer}>
            {Data.map((item) => (
              <>
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <div
                      className={styles.cardFirstContent}
                    >
                      <img
                        src={item.Image}
                        alt='image__'
                        className={styles.cardImage}
                      />
                      <p className={styles.textStyles}>@knight</p>
                    </div>
                    <div className={styles.cardFirstContent}>
                      <img src={item.Star} alt='image__' className={styles.starIcon}/>
                      <p className={styles.textStyles}>213</p>
                    </div>
                  </div>
                  <div className={styles.img_container}>
                    <img src={item.Nft} width='90%' alt='NFT_img' />
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardText}>
                      <p className={styles.nftText}>Current bid</p>
                      <p className={styles.textStyles}>0.54ETH</p>
                    </div>
                    <div className={styles.cardText}>
                      <p className={styles.nftText}>Ending in</p>
                      <p className={styles.textStyles}> 12h 55m 2s</p>
                    </div>
                  </div>
                </div>
              
              </>
            ))}
          </div>
        </div>
        <div className={styles.goldenContainer}>
          <div className={styles.goldenWrapper}>
            <div className={styles.goldenContent}>
              <h1 className={styles.goldenTitle}>The Golden Guests</h1>
              <p className={styles.goldenText}>
                The Golden Guests edition by the Billionaire Club are the rarest
                NFTs. <span style={{ display: "block" }}></span>They are all
                hand drawn and have no element in common with the
                <span style={{ display: "block" }}></span>
                regular collection.
              </p>
              <button className={styles.goldenButton}>
                Join us to register for the Presale
              </button>
            </div>
            <div className={styles.goldenImage}>
              <img
                src={goldenSvg}
                alt='golden svg'
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <h1>Get Aped With Us!</h1>
            <div className={styles.signup}>Sign up for our newsletter</div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.footer}>
            <div className={styles.footerLogo}>
              <div className={styles.footerImage}>
                <img src={Logo} alt='logo' />
              </div>
              <div className={styles.footerTerms}>
                <div>Terms of service</div>
                <div>Privacy policy</div>
              </div>
            </div>
            <div className={styles.footerSocials}>
              <img src={twitter} alt='twitter logo' />
              <img src={discord} alt='discord logo' />
              <img src={instagram} alt='instagram logo' />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;



