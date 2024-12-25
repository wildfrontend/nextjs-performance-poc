import Image from "next/image"
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
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((index) => {
        return (
          <div key={index} style={{ width: "300px", minHeight: "300px", margin: "0 auto", backgroundColor: "gray", display: "flex", flexDirection: "column" }} >
            <div style={liststyle}>
              <Image loading="eager" unoptimized src={LoLIcon} height={24} width={24} alt="lol" /><div>LoL</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" unoptimized src={CSIcon} height={24} width={24} alt="Counterstrike" /><div>Counterstrike</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" unoptimized src={HearthstoneIcon} height={24} width={24} alt="Hearthstone" /><div>Hearthstone</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" unoptimized src={OverwatchIcon} height={24} width={24} alt="Overwatch" /><div>Overwatch</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" unoptimized src={PubgMIcon} height={24} width={24} alt="PUBG" /><div>PUBG Mobile</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" unoptimized src={ValorantIcon} height={24} width={24} alt="Valorant" /><div>Valorant</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" unoptimized src={WiftIcon} height={24} width={24} alt="Wild" /><div>Wild Rift</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" unoptimized src={MLOLIcon} height={24} width={24} alt="Mobile" /><div>Mobile Legend</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" unoptimized src={AOVIcon} height={24} width={24} alt="Arena" /><div>Arena Of Valor</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" unoptimized src={EntertainmentIcon} height={24} width={24} alt="Entertainmentr" /><div>Entertainmentr</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" unoptimized src={CODMIcon} height={24} width={24} alt="Call" /><div>Call of Duty Mobile</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" unoptimized src={FIFAIcon} height={24} width={24} alt="FIFA" /><div>FIFA</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" unoptimized src={SC2Icon} height={24} width={24} alt="SC2" /><div>SC2</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" unoptimized src={WOWIcon} height={24} width={24} alt="WOW" /><div>WOW</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" unoptimized src={Dota2Icon} height={24} width={24} alt="Dota2" /><div>Dota2</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" unoptimized src={GosugamerIcon} height={24} width={24} alt="All" /><div>All Esports</div>
            </div>
          </div>
        )
      })}
    </div >
  );
}
