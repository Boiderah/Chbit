import React from 'react'
import "./Company.css"
import Navbar from '../../Component/Navbar'
import cone from "../../assets/Res/cone.png";
import btc2 from "../../assets/Res/btc2.png";
import btcmin from "../../assets/Res/btcmin.png";
import Dgreen from "../../assets/Res/Dgreen.png";
import lgreen from "../../assets/Res/lgreen.png";
import yellow from "../../assets/Res/yellow.png";
import blue from "../../assets/Res/blue.png";
import tick from "../../assets/Res/tickGood.png";
import people from "../../assets/Res/people.png";
import Footer from '../../Component/Footer';

const Company = () => {
  return (
    <div className="CompanyCont">
          <Navbar/>
          <div className="compdivi">

        <div id="comdiv1">
            <div className="comptxt1">
        <div >
          <img src={lgreen} alt="" />
          </div>
                <h1>About Getbit</h1>
                <p>
                  Getbit started in 2017 as a P2P digital currency exchange. It 
quickly grew into a platform where individuals can trade and
manage cryptocurrencies, and digital assets conveniently. Today,
we offer a trusted platform for cryptocurrency transactions.We are
building technology that will redefine the way people do financial
transactions through blockchain technology.
                </p>
            </div>

            <div className="compimg1">
            <img src={cone} alt="" />

            </div>
        </div>
          </div>

          <div className="compdivii">
            <div className="compdiv2">

            <div >
          <img src={Dgreen} alt="" />
          </div>

              <div className="fourcont">
                <h1>Our Mission</h1>
                <p>
                  Our mission is to leverage use of the blockchain and <br />
other frontier technologies to solve problems in <br />
society.
                  </p>
              </div>
              <div className="fourcont">
               <img src={btcmin} alt="" />
              </div>
              </div>

              <div className="compdiv2i">
              <div className="fourcont">
                <img src={btc2} alt="" />
                </div>

                <div >
          <img src={yellow} alt="" />
          </div>

                <div className="fourcont">
                <h1>Our Vision</h1>
                <p>
                At Getbit, we have a vision: to be the infrastructure <br />
for blockchain payments across emerging markets.
                </p>
              </div>

              <div>
          <img src={blue} alt="" />
          </div>

              </div>

          </div>

          <div className="compdiviii">
            <div className="compdiv3box">
              <h1>our values</h1>
              <div id="valuecontent">
                <div className="valuebox">
                  <img src={tick} alt="" />
                  <p>Innovation</p>
                </div>
                <div className="valuebox">
                  <img src={tick} alt="" />
                  <p>Impact</p>
                </div>
                <div className="valuebox">
                  <img src={tick} alt="" />
                  <p>Communication</p>
                </div>
                <div className="valuebox">
                  <img src={tick} alt="" />
                  <p>Passion</p>
                </div>
                <div className="valuebox">
                  <img src={tick} alt="" />
                  <p>Honesty</p>
                </div>
                <div className="valuebox">
                  <img src={tick} alt="" />
                  <p>Judgement</p>
                </div>
                <div className="valuebox">
                  <img src={tick} alt="" />
                  <p>Curiousity</p>
                </div>

              </div>

            </div>

          </div>

          <div className="complastdiv">
            <div id="complastdiv1">
              <div className="lastcomimg">

                <div id="lstimg">
                <img src={lgreen}  alt="" />
                </div>

                <h1>Stay connected with our community</h1>
                <p>Trade with the coolest people in crypto, there is an <br /> extra spot reserved for you. Join us now</p>

                <div className="TakeMeThere">
                  <div className="TakeMeThere1">
                    <h5>Yes, Take Me There</h5>
                  </div>
                  </div>

              </div>
              <div className="lastcomimg">
                <div className="peopleimg">
                <img src={people} alt="" />
                </div>
              </div>
            </div>
          </div>

          <Footer/>
    </div>
  )
}

export default Company