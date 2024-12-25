import LoLIcon from '@/assets/webpx2/10_lol.webp'
import CSIcon from '@/assets/webpx2/13_counterstrike.webp'
import HearthstoneIcon from '@/assets/webpx2/14_hearthstone.webp'
import OverwatchIcon from '@/assets/webpx2/17_overwatch.webp'
import PubgMIcon from '@/assets/webpx2/20_pubg-mobile.webp'
import ValorantIcon from '@/assets/webpx2/21_valorant.webp'
import WiftIcon from '@/assets/webpx2/22_wild-rift.webp'
import MLOLIcon from '@/assets/webpx2/23_mobile-legends.webp'
import AOVIcon from '@/assets/webpx2/24_arena-of-valor.webp'
import EntertainmentIcon from '@/assets/webpx2/25_entertainment.webp'
import CODMIcon from '@/assets/webpx2/26_call-of-duty-mobile.webp'
import FIFAIcon from '@/assets/webpx2/27_fifa.webp'
import SC2Icon from '@/assets/webpx2/2_starcraft2.webp'
import WOWIcon from '@/assets/webpx2/6_wow.webp'
import Dota2Icon from '@/assets/webpx2/9_dota2.webp'
import GosugamerIcon from '@/assets/webpx2/all-esports.webp'
import { liststyle } from "@/styles/css"


export default function Page() {
  console.log("webpx2 loadmore")
  return (
    <div>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
        return (
          <div key={index} style={{ width: "300px", minHeight: "300px", margin: "0 auto", backgroundColor: "gray", display: "flex", flexDirection: "column" }} >
            <div style={liststyle}>
              <img loading="eager" src={LoLIcon.src} height={24} width={24} alt="lol" /><div>LoL</div>
            </div>
            <div style={liststyle}>
              <img loading="eager" src={CSIcon.src} height={24} width={24} alt="Counterstrike" /><div>Counterstrike</div>
            </div>
            <div style={liststyle}>
              <img loading="eager" src={HearthstoneIcon.src} height={24} width={24} alt="Hearthstone" /><div>Hearthstone</div>
            </div>
            <div style={liststyle}>
              <img loading="eager" src={OverwatchIcon.src} height={24} width={24} alt="Overwatch" /><div>Overwatch</div>
            </div>
            <div style={liststyle}>
              <img loading="eager" src={PubgMIcon.src} height={24} width={24} alt="PUBG" /><div>PUBG Mobile</div>
            </div>
            <div style={liststyle}>
              <img loading="eager" src={ValorantIcon.src} height={24} width={24} alt="Valorant" /><div>Valorant</div>
            </div>
            <div style={liststyle}>
              <img loading="eager" src={WiftIcon.src} height={24} width={24} alt="Wild" /><div>Wild Rift</div>
            </div>
            <div style={liststyle}>
              <img loading="eager" src={MLOLIcon.src} height={24} width={24} alt="Mobile" /><div>Mobile Legend</div>
            </div>
            <div style={liststyle}>
              <img loading="eager" src={AOVIcon.src} height={24} width={24} alt="Arena" /><div>Arena Of Valor</div>
            </div>
            <div style={liststyle}>
              <img loading="eager" src={EntertainmentIcon.src} height={24} width={24} alt="Entertainmentr" /><div>Entertainmentr</div>
            </div>
            <div style={liststyle}>
              <img loading="eager" src={CODMIcon.src} height={24} width={24} alt="Call" /><div>Call of Duty Mobile</div>
            </div>
            <div style={liststyle}>
              <img loading="eager" src={FIFAIcon.src} height={24} width={24} alt="FIFA" /><div>FIFA</div>
            </div>
            <div style={liststyle}>
              <img loading="eager" src={SC2Icon.src} height={24} width={24} alt="SC2" /><div>SC2</div>
            </div>
            <div style={liststyle}>
              <img loading="eager" src={WOWIcon.src} height={24} width={24} alt="WOW" /><div>WOW</div>
            </div>
            <div style={liststyle}>
              <img loading="eager" src={Dota2Icon.src} height={24} width={24} alt="Dota2" /><div>Dota2</div>
            </div>
            <div style={liststyle}>
              <img loading="eager" src={GosugamerIcon.src} height={24} width={24} alt="All" /><div>All Esports</div>
            </div>
          </div>
        )
      })}
    </div >
  );
}
