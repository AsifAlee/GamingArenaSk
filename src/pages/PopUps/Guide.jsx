import React from "react";
import PopUp from "../../components/PopUp";
import title from "../../assets/images/popup/guide-title.png";
import eventGiftTitle from "../../assets/images/popup/event-gifts-title.png";
import bg from "../../assets/images/popup/guide-bg.png";
import "../../styles/popup.scss";
import { AppContext } from "../../MyContext";
import { useContext } from "react";
import Accordion from "../../components/Accordion";
import { baseUrl } from "../../service/api";

const Guide = () => {
  const { toggleGuidePopup } = useContext(AppContext);
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
                <div className="gift-name">Empower</div>
              </div>

              <div className="single-gift">
                <img src={baseUrl + "/streamkar/gifts/40001278.png"} />
                <div className="gift-name">Game World</div>
              </div>

              <div className="single-gift">
                <img src={baseUrl + "/streamkar/gifts/40001628.png"} />
                <div className="gift-name">Chocolate</div>
              </div>
            </div>
          </div>
          <h3 className="heading">HOW TO PLAY</h3>
          <div className="section-info">
            <h4>Event Gifting :</h4>
          </div>
          <div className="guide-content">
            <Accordion title="EVENT GIFTING" defaultOpen={true}>
              <div className="body-item">
                <div className="list-item">
                  <span className="index">1.</span>
                  <p className="text">
                    When you send event gifts, you will get Gaming Points. 1
                    bean of event gift sent = 1 Gaming Point.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">2.</span>
                  <p className="text">
                    A Gift Box icon will be displayed within this pop-up.
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
                    The pop-up will appear again next day at 00:00:00 GMT when
                    you open the web-page, & you will be able to claim free
                    reward again by clicking on the Gift Box Icon.
                  </p>
                </div>
              </div>
            </Accordion>
          </div>
          <div className="section-info">
            <h4>Gaming Arena :</h4>
            <p>There are two parts in the Gaming Arena :</p>
            <ul>
              <li>Billiards</li>
              <li>Foosball</li>
            </ul>
          </div>
          <div className="guide-content">
            {/* billiards */}
            <Accordion title="BILLIARDS">
              <div className="body-item">
                <div className="list-item">
                  <span className="index">1.</span>
                  <p className="text">
                    When you send event gifts, you will get Gaming Points. 1
                    bean of event gift sent = 1 Gaming Point.
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
                    Below the billiards table, there will be a “Play” button.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">4.</span>
                  <p className="text">
                    When you tap on the “Play” button, 20K Gaming points will be
                    deducted, 2 balls will be potted in the table and the “Play”
                    button will be disabled.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">5.</span>
                  <p className="text">
                    The “Play” button will only enable again when you recharge
                    the cue stick each time.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">6.</span>
                  <p className="text">
                    Below the Cue Stick, there will be a “Recharge Cue” button.
                    This button will be disabled by default.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">7.</span>
                  <p className="text">
                    After playing a shot successfully and receiving rewards, the
                    “Recharge Cue” button will enable.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">8.</span>
                  <p className="text">
                    Each time when you tap on the “Recharge Cue” button, Gaming
                    points will be deducted and cue will be charged.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">9.</span>
                  <p className="text">
                    You can't play the shot if you haven't charged the Cue
                    Stick.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">10.</span>
                  <p className="text">
                    Each time when you tap on the “Play” button successfully,
                    you will win rewards and Claw points. There’s a 50% chance
                    of receiving 1 claw point and a 50% chance of receiving 0
                    claw point.
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
                    Above the “Play” button you will have the option to play a
                    combo of x1, x10 & x100.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">13.</span>
                  <p className="text">
                    You have to select any one of the combos first then tap on
                    the “Play” button.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">14.</span>
                  <p className="text">
                    When you tap on the “Play” button successfully by selecting
                    combo, gaming points will be deducted & balls will be potted
                    accordingly.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">15.</span>
                  <p className="text">
                    A “Balls Potted” counter will be displayed on the webpage
                    and the counter will refresh daily at 00:00:00 GMT.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">16.</span>
                  <p className="text">
                    The user with the highest number of balls potted will win
                    beans pot rewards at 00:00:00 GMT..
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">17.</span>
                  <p className="text">
                    0.8% of spending will be collected in the BEANS POT and
                    collected Beans will be distributed among the top 3 Rankers
                    of the leaderboard, each day.
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
                    When you send event gifts, you will get Gaming Points. 1
                    bean of event gift sent = 1 Gaming Point.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">2.</span>
                  <p className="text">
                    On the second tab of the webpage, a foosball table will be
                    displayed along with the “Play” button.2. On the second tab
                    of the webpage, a foosball table will be displayed along
                    with the “Play” button.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">3.</span>
                  <p className="text">
                    When you tap on the “Play” button successfully, 20K Gaming
                    points will be deducted and you will get either 1 score or 0
                    score.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">4.</span>
                  <p className="text">
                    Each time when you tap on the “Play” button successfully,
                    you will win rewards and Claw points. There’s a 50% chance
                    of receiving 1 claw point and a 50% chance of receiving 0
                    claw point.
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
                  <p className="text">
                    The default value of this text input box is “1” & maximum
                    value is “99”.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">8.</span>
                  <p className="text">
                    A “Daily score” counter will be displayed on the webpage.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">9.</span>
                  <p className="text">
                    Each time when you get 1 score, the value “1” will be added
                    to the “Daily score” counter.
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
                  <p className="text">
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
                    In this part you will be able to get rewards/items from the
                    Claw Crane machine. 2. “My Claw Points” counter will be
                    displayed on the webpage.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">2.</span>
                  <p className="text">
                    “My Claw Points” counter will be displayed on the webpage.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">3.</span>
                  <p className="text">
                    Each time you get Claw Points from the first part of the
                    event, those points will be added in the “My Claw Points”
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
                    Below the claw crane machine, a “Get Item” button will be
                    displayed
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">6.</span>
                  <p className="text">10 claw points = 1 item (1 reward).</p>
                </div>
                <div className="list-item">
                  <span className="index">7.</span>
                  <p className="text">
                    Each time you tap on the “Get Item” button successfully, you
                    will get 1 item as a reward.
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
                    There are two types of wheels on the webpage. Lucky Wheel
                    and VIP Wheel
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">2.</span>
                  <p className="text">
                    By receiving event gifts, you will get a chance to spin the
                    wheel.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">3.</span>
                  <p className="text">
                    Lucky Wheel has 25k Talent Points = 1 Chance VIP Wheel has
                    100k Talent Points = 1 Chance
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
                    You can Spin the wheel using Combo options x1, x10, x100.
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

            <Accordion title="TALENT WHEEL">
              <div className="body-item">
                <div className="list-item">
                  <span className="index">1.</span>
                  <p className="text">
                    There are two types of wheels on the webpage. Lucky Wheel
                    and VIP Wheel
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">2.</span>
                  <p className="text">
                    By receiving event gifts, you will get a chance to spin the
                    wheel.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">3.</span>
                  <p className="text">
                    Lucky Wheel has 25k Talent Points = 1 Chance VIP Wheel has
                    100k Talent Points = 1 Chance
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
                    You can Spin the wheel using Combo options x1, x10, x100.
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
            <Accordion title="TALENT WHEEL">
              <div className="body-item">
                <div className="list-item">
                  <span className="index">1.</span>
                  <p className="text">
                    There are two types of wheels on the webpage. Lucky Wheel
                    and VIP Wheel
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">2.</span>
                  <p className="text">
                    By receiving event gifts, you will get a chance to spin the
                    wheel.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">3.</span>
                  <p className="text">
                    Lucky Wheel has 25k Talent Points = 1 Chance VIP Wheel has
                    100k Talent Points = 1 Chance
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
                    You can Spin the wheel using Combo options x1, x10, x100.
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
            <Accordion title="TALENT WHEEL">
              <div className="body-item">
                <div className="list-item">
                  <span className="index">1.</span>
                  <p className="text">
                    There are two types of wheels on the webpage. Lucky Wheel
                    and VIP Wheel
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">2.</span>
                  <p className="text">
                    By receiving event gifts, you will get a chance to spin the
                    wheel.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">3.</span>
                  <p className="text">
                    Lucky Wheel has 25k Talent Points = 1 Chance VIP Wheel has
                    100k Talent Points = 1 Chance
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
                    You can Spin the wheel using Combo options x1, x10, x100.
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
            <Accordion title="TALENT WHEEL">
              <div className="body-item">
                <div className="list-item">
                  <span className="index">1.</span>
                  <p className="text">
                    There are two types of wheels on the webpage. Lucky Wheel
                    and VIP Wheel
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">2.</span>
                  <p className="text">
                    By receiving event gifts, you will get a chance to spin the
                    wheel.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">3.</span>
                  <p className="text">
                    Lucky Wheel has 25k Talent Points = 1 Chance VIP Wheel has
                    100k Talent Points = 1 Chance
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
                    You can Spin the wheel using Combo options x1, x10, x100.
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

            <Accordion title="TALENT WHEEL">
              <div className="body-item">
                <div className="list-item">
                  <span className="index">1.</span>
                  <p className="text">
                    There are two types of wheels on the webpage. Lucky Wheel
                    and VIP Wheel
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">2.</span>
                  <p className="text">
                    By receiving event gifts, you will get a chance to spin the
                    wheel.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">3.</span>
                  <p className="text">
                    Lucky Wheel has 25k Talent Points = 1 Chance VIP Wheel has
                    100k Talent Points = 1 Chance
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
                    You can Spin the wheel using Combo options x1, x10, x100.
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
            <Accordion title="TALENT WHEEL">
              <div className="body-item">
                <div className="list-item">
                  <span className="index">1.</span>
                  <p className="text">
                    There are two types of wheels on the webpage. Lucky Wheel
                    and VIP Wheel
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">2.</span>
                  <p className="text">
                    By receiving event gifts, you will get a chance to spin the
                    wheel.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">3.</span>
                  <p className="text">
                    Lucky Wheel has 25k Talent Points = 1 Chance VIP Wheel has
                    100k Talent Points = 1 Chance
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
                    You can Spin the wheel using Combo options x1, x10, x100.
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
            <Accordion title="TALENT WHEEL">
              <div className="body-item">
                <div className="list-item">
                  <span className="index">1.</span>
                  <p className="text">
                    There are two types of wheels on the webpage. Lucky Wheel
                    and VIP Wheel
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">2.</span>
                  <p className="text">
                    By receiving event gifts, you will get a chance to spin the
                    wheel.
                  </p>
                </div>
                <div className="list-item">
                  <span className="index">3.</span>
                  <p className="text">
                    Lucky Wheel has 25k Talent Points = 1 Chance VIP Wheel has
                    100k Talent Points = 1 Chance
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
                    You can Spin the wheel using Combo options x1, x10, x100.
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
          </div>
        </div>
      </div>
    </PopUp>
  );
};

export default Guide;
