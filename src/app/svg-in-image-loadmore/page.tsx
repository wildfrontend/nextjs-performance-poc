import Image from "next/image"
import LoLIcon from '@/assets/sitesections/10_lol.svg?url'
import CSIcon from '@/assets/sitesections/13_counterstrike.svg?url'
import HearthstoneIcon from '@/assets/sitesections/14_hearthstone.svg?url'
import OverwatchIcon from '@/assets/sitesections/17_overwatch.svg?url'
import PubgMIcon from '@/assets/sitesections/20_pubg-mobile.svg?url'
import ValorantIcon from '@/assets/sitesections/21_valorant.svg?url'
import WiftIcon from '@/assets/sitesections/22_wild-rift.svg?url'
import MLOLIcon from '@/assets/sitesections/23_mobile-legends.svg?url'
import AOVIcon from '@/assets/sitesections/24_arena-of-valor.svg?url'
import EntertainmentIcon from '@/assets/sitesections/25_entertainment.svg?url'
import CODMIcon from '@/assets/sitesections/26_call-of-duty-mobile.svg?url'
import FIFAIcon from '@/assets/sitesections/27_fifa.svg?url'
import SC2Icon from '@/assets/sitesections/2_starcraft2.svg?url'
import WOWIcon from '@/assets/sitesections/6_wow.svg?url'
import Dota2Icon from '@/assets/sitesections/9_dota2.svg?url'
import GosugamerIcon from '@/assets/sitesections/all-esports.svg?url'
import { liststyle } from "@/styles/css"

export default function Page() {
  console.log("import svg by image")
  return (
    <div>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
        return (
          <div key={index} style={{ width: "300px", minHeight: "300px", margin: "0 auto", backgroundColor: "gray", display: "flex", flexDirection: "column" }}>
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
            </div>  <div style={liststyle}>
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
    </div>
  );
}
