import Image from "next/image"
import LoLIcon from '@/assets/webp/10_lol.webp'
import CSIcon from '@/assets/webp/13_counterstrike.webp'
import HearthstoneIcon from '@/assets/webp/14_hearthstone.webp'
import OverwatchIcon from '@/assets/webp/17_overwatch.webp'
import PubgMIcon from '@/assets/webp/20_pubg-mobile.webp'
import ValorantIcon from '@/assets/webp/21_valorant.webp'
import WiftIcon from '@/assets/webp/22_wild-rift.webp'
import MLOLIcon from '@/assets/webp/23_mobile-legends.webp'
import AOVIcon from '@/assets/webp/24_arena-of-valor.webp'
import EntertainmentIcon from '@/assets/webp/25_entertainment.webp'
import CODMIcon from '@/assets/webp/26_call-of-duty-mobile.webp'
import FIFAIcon from '@/assets/webp/27_fifa.webp'
import SC2Icon from '@/assets/webp/2_starcraft2.webp'
import WOWIcon from '@/assets/webp/6_wow.webp'
import Dota2Icon from '@/assets/webp/9_dota2.webp'
import GosugamerIcon from '@/assets/webp/all-esports.webp'
import { liststyle } from "@/styles/css"


export default function Page() {
  console.log("webp")
  return (
    <div>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
        return (
          <div key={index} style={{ width: "300px", minHeight: "300px", margin: "0 auto", backgroundColor: "gray", display: "flex", flexDirection: "column" }} >
            <div style={liststyle}>
              <Image loading="eager" quality={100} src={LoLIcon} height={24} width={24} alt="lol" /><div>LoL</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" quality={100} src={CSIcon} height={24} width={24} alt="Counterstrike" /><div>Counterstrike</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" quality={100} src={HearthstoneIcon} height={24} width={24} alt="Hearthstone" /><div>Hearthstone</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" quality={100} src={OverwatchIcon} height={24} width={24} alt="Overwatch" /><div>Overwatch</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" quality={100} src={PubgMIcon} height={24} width={24} alt="PUBG" /><div>PUBG Mobile</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" quality={100} src={ValorantIcon} height={24} width={24} alt="Valorant" /><div>Valorant</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" quality={100} src={WiftIcon} height={24} width={24} alt="Wild" /><div>Wild Rift</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" quality={100} src={MLOLIcon} height={24} width={24} alt="Mobile" /><div>Mobile Legend</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" quality={100} src={AOVIcon} height={24} width={24} alt="Arena" /><div>Arena Of Valor</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" quality={100} src={EntertainmentIcon} height={24} width={24} alt="Entertainmentr" /><div>Entertainmentr</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" quality={100} src={CODMIcon} height={24} width={24} alt="Call" /><div>Call of Duty Mobile</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" quality={100} src={FIFAIcon} height={24} width={24} alt="FIFA" /><div>FIFA</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" quality={100} src={SC2Icon} height={24} width={24} alt="SC2" /><div>SC2</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" quality={100} src={WOWIcon} height={24} width={24} alt="WOW" /><div>WOW</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" quality={100} src={Dota2Icon} height={24} width={24} alt="Dota2" /><div>Dota2</div>
            </div>
            <div style={liststyle}>
              <Image loading="eager" quality={100} src={GosugamerIcon} height={24} width={24} alt="All" /><div>All Esports</div>
            </div>
          </div>
        )
      })}
    </div >
  );
}
