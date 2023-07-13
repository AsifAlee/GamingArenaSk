import React from "react";
import PopUp from "../../components/PopUp";
import title from "../../assets/images/popup/guide-title.png";
import eventGiftTitle from "../../assets/images/popup/event-gifts-title.png";
import bg from "../../assets/images/popup/guide-bg.png";
import beansIcon from "../../assets/images/bean.png";
import "../../styles/popup.scss";
import { AppContext } from "../../MyContext";
import { useContext } from "react";
import Accordion from "../../components/Accordion";
import { baseUrl } from "../../service/api";

const Guide = () => {
  const { toggleGuidePopup, selectedLng } = useContext(AppContext);
  return (
    <PopUp bg={bg} popUpHandler={toggleGuidePopup}>
      <div className="guide-pop-up">
        <img src={title} className="title" />
        <div className="guide-main-content">
          <div className="event-gifts">
            <img src={eventGiftTitle} className="title" />
            <div className="gifts">
              <div className="single-gift">
                <img src={baseUrl + "/streamkar/gifts/40001665.png"} />
                <div className="gift-name">
                  <p>Empower</p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p>50,000 </p>
                    <img src={beansIcon} style={{ width: "3vw" }} />
                  </div>
                </div>
              </div>

              <div className="single-gift">
                <img src={baseUrl + "/streamkar/gifts/40001278.png"} />
                <div className="gift-name">
                  <p>Game World</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p>25,000 </p>
                    <img src={beansIcon} style={{ width: "3vw" }} />
                  </div>
                </div>
              </div>

              <div className="single-gift">
                <img src={baseUrl + "/streamkar/gifts/40001628.png"} />
                <div className="gift-name">
                  <p>Chocolate</p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p>5,000 </p>
                    <img src={beansIcon} style={{ width: "3vw" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {selectedLng === 0 ? (
            <div className="eng">
              <h3 className="heading">HOW TO PLAY</h3>
              <div className="section-info">
                {/* <h4>Daily Free Gifts :</h4> */}
              </div>
              <div className="guide-content">
                <Accordion title="DAILY FREE GIFT" defaultOpen={true}>
                  <div className="body-item">
                    <div className="list-item">
                      <span className="index">1.</span>
                      <p className="text">
                        A pop-up will appear daily when you open the web-page.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">2.</span>
                      <p className="text">
                        A <span className="highlighted">Gift Box</span> icon
                        will be displayed within this pop-up.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">3.</span>
                      <p className="text">
                        When you tap on the Gift Box icon, you will get free
                        rewards.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">4.</span>
                      <p className="text">
                        The pop-up will appear again next day at{" "}
                        <span className="highlighted">00:00:00 GMT</span>
                        when you open the web-page, & you will be able to claim
                        free reward again by clicking on the Gift Box Icon.
                      </p>
                    </div>
                  </div>
                </Accordion>
              </div>
              {/* <div className="section-info">
                <h4>Gaming Arena :</h4>
                <p>There are two parts in the Gaming Arena :</p>
                <ul>
                  <li>Billiards</li>
                  <li>Foosball</li>
                </ul>
              </div> */}
              <div className="guide-content">
                {/* billiards */}
                <Accordion title="BILLIARDS">
                  <div className="body-item">
                    <div className="list-item">
                      <span className="index">1.</span>
                      <p className="text">
                        When you send event gifts, you will get Gaming Points.
                        <br />
                        <span className="highlighted">
                          1 bean of event gift sent = 1 Gaming Point.
                        </span>
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">2.</span>
                      <p className="text">
                        On the webpage’s first tab, a billiards table will be
                        displayed, along with a Cue Stick beside it.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">3.</span>
                      <p className="text">
                        Below the billiards table, there will be a “Play”
                        button.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">4.</span>
                      <p className="text highlighted">
                        When you tap on the
                        <span className="highlighted">"Play"</span>
                        button, 20K Gaming points will be deducted, 2 balls will
                        be potted in the table and the “Play” button will be
                        disabled.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">5.</span>
                      <p className="text">
                        The
                        <span className="highlighted">"Play"</span>
                        button will only enable again when you recharge the cue
                        stick each time.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">6.</span>
                      <p className="text">
                        Below the Cue Stick, there will be a
                        <span className="highlighted">"Reccharge Cue"</span>
                        button. This button will be disabled by default.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">7.</span>
                      <p className="text">
                        After playing a shot successfully and receiving rewards,
                        the
                        <span className="highlighted">"Recharge Cue"</span>
                        button will enable.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">8.</span>
                      <p className="text">
                        Each time when you tap on the
                        <span className="highlighted">"Recharge Cue"</span>
                        button, Gaming points will be deducted and cue will be
                        charged.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">9.</span>
                      <p className="text highlighted">
                        You can't play the shot if you haven't charged the Cue
                        Stick.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">10.</span>
                      <p className="text">
                        Each time when you tap on the
                        <span className="highlighted">"Play"</span>
                        button successfully, you will win rewards and Claw
                        points. There’s a 50% chance of receiving 1 claw point
                        and a 50% chance of receiving 0 claw point.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">11.</span>
                      <p className="text">
                        These claw points will be used in the second part of the
                        event (Claw Crane).
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">12.</span>
                      <p className="text">
                        Above the
                        <span className="highlighted">“Play”</span>
                        button you will have the option to play a combo of{" "}
                        <span className="highlighted">x1, x10 & x100.</span>
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">13.</span>
                      <p className="text">
                        You have to select any one of the combos first then tap
                        on the
                        <span className="highlighted">“Play”</span>
                        button.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">14.</span>
                      <p className="text">
                        When you tap on the
                        <span className="highlighted">“Play”</span>
                        button successfully by selecting combo, gaming points
                        will be deducted & balls will be potted accordingly.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">15.</span>
                      <p className="text">
                        A<span className="highlighted">“Balls Potted”</span>
                        counter will be displayed on the webpage and the counter
                        will refresh daily at 00:00:00 GMT.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">16.</span>
                      <p className="text highlighted">
                        The user with the highest number of balls potted will
                        win beans pot rewards at 00:00:00 GMT.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">17.</span>
                      <p className="text">
                        <span className="highlighted">0.8% of spending</span>{" "}
                        will be collected in the BEANS POT and collected Beans
                        will be distributed among the top 3 Rankers of the
                        leaderboard, each day.
                      </p>
                    </div>
                  </div>
                </Accordion>
                {/* foosball */}
                <Accordion title="FOOSBALL">
                  <div className="body-item">
                    <div className="list-item">
                      <span className="index">1.</span>
                      <p className="text">
                        When you send event gifts, you will get Gaming Points.
                        <br />
                        <span className="highlighted">
                          1 bean of event gift sent = 1 Gaming Point.
                        </span>
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">2.</span>
                      <p className="text">
                        On the second tab of the webpage, a foosball table will
                        be displayed along with the
                        <span className="highlighted">“Play”</span>
                        button.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">3.</span>
                      <p className="text">
                        When you tap on the
                        <span className="highlighted">“Play”</span>
                        button successfully, 20K Gaming points will be deducted
                        and you will get either 1 score or 0 score.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">4.</span>
                      <p className="text highlighted">
                        Each time when you tap on the “Play” button
                        successfully, you will win rewards and Claw points.
                        There’s a 50% chance of receiving 1 claw point and a 50%
                        chance of receiving 0 claw point.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">5.</span>
                      <p className="text">
                        These claw points will be used in the second part of the
                        event (Claw Crane).
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">6.</span>
                      <p className="text">
                        A “Text input box” will be displayed on the webpage.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">7.</span>
                      <p className="text highlighted">
                        The default value of this text input box is
                        <span className="highlighted">“1”</span>& maximum value
                        is
                        <span className="highlighted">“99”</span>.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">8.</span>
                      <p className="text">
                        A<span className="highlighted">"Daily score"</span>
                        counter will be displayed on the webpage.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">9.</span>
                      <p className="text">
                        Each time when you get 1 score, the value
                        <span className="highlighted">“1”</span>
                        will be added to the
                        <span className="highlighted">"Daily score"</span>
                        counter.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">10.</span>
                      <p className="text">
                        This counter will refresh daily at 00:00:00 GMT.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">11.</span>
                      <p className="text highlighted">
                        The user with the highest daily score will win special
                        rewards.
                      </p>
                    </div>
                  </div>
                </Accordion>
                {/* Claw Crane */}
                <Accordion title="CLAW CRANE">
                  <div className="body-item">
                    <div className="list-item">
                      <span className="index">1.</span>
                      <p className="text">
                        In this part you will be able to get rewards/items from
                        the Claw Crane machine.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">2.</span>
                      <p className="text">
                        <span className="highlighted">“My Claw Points”</span>
                        counter will be displayed on the webpage.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">3.</span>
                      <p className="text">
                        Each time you get Claw Points from the first part of the
                        event, those points will be added in the
                        <span className="highlighted">“My Claw Points”</span>
                        counter.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">4.</span>
                      <p className="text">
                        A Claw Crane machine will be displayed on the webpage.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">5.</span>
                      <p className="text">
                        Below the claw crane machine, a{" "}
                        <span className="highlighted">“Get Item”</span> button
                        will be displayed
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">6.</span>
                      <p className="text highlighted">
                        10 claw points = 1 item (1 reward).
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">7.</span>
                      <p className="text">
                        Each time you tap on the{" "}
                        <span className="highlighted">“Get Item”</span> button
                        successfully, you will get 1 item as a reward.
                      </p>
                    </div>
                  </div>
                </Accordion>

                {/* Talent Wheel */}
                <Accordion title="TALENT WHEEL">
                  <div className="body-item">
                    <div className="list-item">
                      <span className="index">1.</span>
                      <p className="text">
                        There are two types of wheels on the webpage. Lucky
                        Wheel and VIP Wheel
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">2.</span>
                      <p className="text">
                        By receiving event gifts, you will get a chance to spin
                        the wheel.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">3.</span>
                      <p className="text highlighted">
                        Lucky Wheel has 25k Talent Points = 1 Chance <br /> VIP
                        Wheel has 100k Talent Points = 1 Chance
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">4.</span>
                      <p className="text">
                        When you spin the wheel, you will get rewards.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">5.</span>
                      <p className="text">
                        You can Spin the wheel using Combo options x1, x10,
                        x100.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">6.</span>
                      <p className="text">
                        {" "}
                        You can spin the wheel multiple times..
                      </p>
                    </div>
                  </div>
                </Accordion>

                <Accordion title="EVENT GIFTING" defaultOpen={true}>
                  <div className="body-item">
                    <span style={{ fontSize: "4vw" }}>For Users</span>
                    <div className="list-item">
                      <span className="index">1.</span>
                      <p className="text">
                        In the total ranking,
                        <span className="highlighted">
                          the top 3 users will be rewarded.
                        </span>
                        .
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">2.</span>
                      <p className="text">
                        Rewards will be sent after 7 working days of the event
                        end date.
                      </p>
                    </div>

                    <span style={{ fontSize: "4vw" }}>For Talents</span>
                    <div className="list-item">
                      <span className="index">1.</span>
                      <p className="text">
                        In the total ranking,{" "}
                        <span className="highlighted">
                          the top 3 talents will be rewarded.
                        </span>
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">2.</span>
                      <p className="text">
                        Rewards will be sent after 7 working days of the event
                        end date.
                      </p>
                    </div>
                  </div>
                </Accordion>
              </div>
            </div>
          ) : (
            <div className="urdu">
              <h3 className="heading">HOW TO PLAY</h3>
              <div className="section-info">
                {/* <h4>Daily Free Gifts :</h4> */}
              </div>
              <div className="guide-content">
                <Accordion title="DAILY FREE GIFT" defaultOpen={true}>
                  <div className="body-item">
                    <div className="list-item">
                      <span className="index">1.</span>
                      <p className="text">
                        Jab ap webpage open karen gay tou rozana aik pop-up show
                        hoga.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">2.</span>
                      <p className="text">
                        Is pop-up ma{" "}
                        <span className="highlighted">Gift Box icon</span>{" "}
                        display hoga.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">3.</span>
                      <p className="text">
                        Jab ap Gift Box icon pa click karen gay, tou apko free
                        rewards milein gay.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">4.</span>
                      <p className="text">
                        Pop-up agley din{" "}
                        <span className="highlighted">00:00:00 GMT</span> pa
                        dubara show hoga jab ap webpage open karen gay, aur ap
                        Gift Box icon pa click kar ke dubara free rewards haasil
                        kar sakte hain.
                      </p>
                    </div>
                  </div>
                </Accordion>
              </div>

              {/* <div className="section-info">
                <h4>Gaming Arena :</h4>
                <p>Gaming Arena ke 2 parts hain:</p>
                <ul>
                  <li>Billiards</li>
                  <li>Foosball</li>
                </ul>
              </div> */}
              <div className="guide-content">
                {/* billiards */}
                <Accordion title="BILLIARDS">
                  <div className="body-item">
                    <div className="list-item">
                      <span className="index">1.</span>
                      <p className="text">
                        Jab ap event gifts send karen gay tou ap haasil karen
                        gay Gaming points.
                        <br />
                        <span className="highlighted">
                          1 bean of event gift sent = 1 Gaming Point.
                        </span>
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">2.</span>
                      <p className="text">
                        Webpage ke pehle tab par, billiards table dikhaya
                        jayega, uske saath ek Cue Stick hogi.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">3.</span>
                      <p className="text">
                        Billiards table ke neeche,{" "}
                        <span className="highlighted">"Play"</span> button hoga.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">4.</span>
                      <p className="text highlighted">
                        Jab aap <span className="highlighted">"Play"</span>{" "}
                        button par tap karenge, tou 20K Gaming points deduct
                        honge, 2 balls table mein pot hongi aur
                        <span className="highlighted">"Play"</span> button
                        disable ho jayega.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">5.</span>
                      <p className="text">
                        <span className="highlighted">"Play"</span> button tab
                        hi enable hoga jab aap har baar Cue Stick recharge
                        karenge.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">6.</span>
                      <p className="text">
                        Cue Stick ke neeche,{" "}
                        <span className="highlighted">"Recharge Cue"</span>{" "}
                        button hoga. Ye button default mein disabled hoga.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">7.</span>
                      <p className="text">
                        Ek shot successfully khelne ke baad aur rewards hasil
                        karne ke baad,{" "}
                        <span className="highlighted">"Recharge Cue"</span>{" "}
                        button enable hoga.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">8.</span>
                      <p className="text">
                        Har baar jab aap{" "}
                        <span className="highlighted">"Recharge Cue"</span>{" "}
                        button par tap karenge, to Gaming points deduct honge
                        aur cue stick charge hogi.
                      </p>
                    </div>
                    <div className="list-item highlighted">
                      <span className="index highlighted">9.</span>
                      <p className="text">
                        Agar apne Cue Stick charge nahi ki hai, to aap shot nahi
                        khel sakte.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">10.</span>
                      <p className="text">
                        Har baar jab aap{" "}
                        <span className="highlighted">"Play"</span> button par
                        successfully tap karte hain, tab aap rewards aur Claw
                        points jeetein gay. 50% chances hai ki aapko 1 claw
                        point milega aur 50% chances hai ki aapko 0 claw point
                        milega.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">11.</span>
                      <p className="text">
                        Ye Claw points event ke dusre hisse (Claw Crane) main
                        istemal honge.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">12.</span>
                      <p className="text">
                        "Play" button ke upar aapko{" "}
                        <span className="highlighted">x1, x10 aur x100</span>
                        ke combo khelne ka option hoga.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">13.</span>
                      <p className="text">
                        Aapko pehle kisi ek combo ko select karna hoga phir
                        <span className="highlighted">"Play"</span> button par
                        tap karna hoga.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">14.</span>
                      <p className="text">
                        Jab aap combo select karke successfully{" "}
                        <span className="highlighted">"Play"</span> button par
                        tap karenge, to gaming points deduct honge aur balls
                        uske hisab se pot hongi.
                      </p>
                    </div>
                    <div className="list-item highlighted">
                      <span className="index highlighted">15.</span>
                      <p className="text">
                        Webpage par{" "}
                        <span className="highlighted">"Balls Potted"</span>{" "}
                        counter dikhaya jayega aur yeh counter roz 00:00:00 GMT
                        par refresh hoga.
                      </p>
                    </div>
                    <div className="list-item highlighted">
                      <span className="index highlighted">16.</span>
                      <p className="text">
                        Sabse zyada balls pott karne wale user ko 00:00:00 GMT
                        par beans pot rewards milenge.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">17.</span>
                      <p className="text">
                        BEANS POT mein kharch karne ka{" "}
                        <span className="highlighted">0.8%</span> collect kiya
                        jayega aur collect kiye gaye Beans leaderboard ke top 3
                        rankers ke beech har roz distribute kiye jayenge.
                      </p>
                    </div>
                  </div>
                </Accordion>
                {/* foosball */}
                <Accordion title="FOOSBALL">
                  <div className="body-item">
                    <div className="list-item">
                      <span className="index">1.</span>
                      <p className="text">
                        Jab ap event gifts send karen gay tou ap haasil karen
                        gay Gaming points.
                        <br />{" "}
                        <span className="highlighted">
                          1 bean of event gift sent = 1 Gaming Point.
                        </span>
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">2.</span>
                      <p className="text">
                        Dusre tab main webpage par ek foosball table dikhaya
                        jayega jiske saath{" "}
                        <span className="highlighted">"Play"</span> button hoga.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">3.</span>
                      <p className="text">
                        Jab aap <span className="highlighted">"Play"</span>{" "}
                        button par tap karte hain, toh 20K Gaming points deduct
                        ho jayenge aur aapko ya toh 1 score milega ya fir 0
                        score milega.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">4.</span>
                      <p className="text highlighted">
                        Har baar jab aap{" "}
                        <span className="highlighted">"Play"</span> button par
                        successfully tap karte hain, tab aap rewards aur Claw
                        points jeetein gay. 50% chances hai ki aapko 1 claw
                        point milega aur 50% chances hai ki aapko 0 claw point
                        milega.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">5.</span>
                      <p className="text">
                        Ye Claw points event ke dusre hisse (Claw Crane) main
                        istemal honge.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">6.</span>
                      <p className="text">
                        Webpage par ek{" "}
                        <span className="highlighted">" Text input box "</span>{" "}
                        dikhaya jayega.
                      </p>
                    </div>
                    <div className="list-item highlighted">
                      <span className="index highlighted">7.</span>
                      <p className="text">
                        Is text input box ka default value{" "}
                        <span className="highlighted">"1"</span> hoga aur
                        maximum value<span className="highlighted">"99"</span>{" "}
                        hogi.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">8.</span>
                      <p className="text">
                        Webpage par ek{" "}
                        <span className="highlighted">"Daily score "</span>{" "}
                        counter dikhaya jayega.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">9.</span>
                      <p className="text">
                        Har baar jab aap 1 score jeete hain, tab{" "}
                        <span className="highlighted">""Daily score"</span>
                        counter mein <span className="highlighted">"1"</span> ka
                        value add ho jayega.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">10.</span>
                      <p className="text">
                        Ye counter har roz 00:00:00 GMT par refresh hoga.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">11.</span>
                      <p className="text highlighted">
                        Rozana sabse zyada daily score wale user ko special
                        rewards milenge.
                      </p>
                    </div>
                  </div>
                </Accordion>
                {/* Claw Crane */}
                <Accordion title="CLAW CRANE">
                  <div className="body-item">
                    <div className="list-item">
                      <span className="index">1.</span>
                      <p className="text">
                        Is part mein aap Claw Crane machine se rewards/ items
                        jeet sakte hain.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">2.</span>
                      <p className="text">
                        Webpage par
                        <span className="highlighted">"My Claw Points"</span>
                        counter dikhaya jayega.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">3.</span>
                      <p className="text">
                        Har bar jab aap pehle hisse se Claw Points jeetain gay,
                        tab woh points
                        <span className="highlighted">"My Claw Points"</span>
                        counter mein add kar diye jayenge.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">4.</span>
                      <p className="text">
                        Webpage par ek Claw Crane machine dikhai jayegi.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">5.</span>
                      <p className="text">
                        Claw Crane machine ke neeche,
                        <span className="highlighted">"Get Item"</span> button
                        dikhaya jayega.
                      </p>
                    </div>
                    <div className="list-item highlighted">
                      <span className="index highlighted">6.</span>
                      <p className="text">
                        10 claw points = 1 item (1 reward).
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">7.</span>
                      <p className="text">
                        Har bar jab aap{" "}
                        <span className="highlighted">"Get Item"</span> button
                        par successfully tap karte hain, tab apko 1 item reward
                        mil jayega.
                      </p>
                    </div>
                  </div>
                </Accordion>

                {/* Talent Wheel */}
                <Accordion title="TALENT WHEEL">
                  <div className="body-item">
                    <div className="list-item">
                      <span className="index">1.</span>
                      <p className="text">
                        Webpage pa two types kay wheels hongy. Lucky Wheel and
                        VIP Wheel
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">2.</span>
                      <p className="text">
                        Event gifts receive kar kay apko wheel spin karne ka
                        moka miley ga.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">3.</span>
                      <p className="text highlighted">
                        Lucky Wheel 25k Talents Points = 1 Chance <br /> VIP
                        Wheel 100k Talents Points = 1 Chance
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">4.</span>
                      <p className="text">
                        Jab ap wheel spin karen gy, apko rewards miley gy.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">5.</span>
                      <p className="text">
                        Aap "Combo" option ka istamal karke wheel ko spin kar
                        sakte hain x1, x10, x100.
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">6.</span>
                      <p className="text">
                        Ap wheel ko aik sy zada dafa spin kar sakte hain.
                      </p>
                    </div>
                  </div>
                </Accordion>

                <Accordion title="EVENT GIFTING" defaultOpen={true}>
                  <div className="body-item">
                    <span style={{ fontSize: "4vw" }}>For Users</span>
                    <div className="list-item">
                      <span className="index">1.</span>
                      <p className="text">
                        Total ranking mein,
                        <span className="highlighted">
                          top 3 users ko rewards milein gay
                        </span>
                        .
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">2.</span>
                      <p className="text">
                        Rewards event khatam honay k 7 din baad tak send kiye
                        jayen gay.
                      </p>
                    </div>

                    <span style={{ fontSize: "4vw" }}>For Talents</span>
                    <div className="list-item">
                      <span className="index">1.</span>
                      <p className="text">
                        Total ranking mein
                        <span className="highlighted">
                          top 3 talents ko rewards miley gay.
                        </span>
                      </p>
                    </div>
                    <div className="list-item">
                      <span className="index">2.</span>
                      <p className="text">
                        Rewards event khatam honay k 7 din baad tak send kiye
                        jayen gay.
                      </p>
                    </div>
                  </div>
                </Accordion>
              </div>
            </div>
          )}
        </div>
      </div>
    </PopUp>
  );
};

export default Guide;
