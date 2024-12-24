
import LoLIcon from '@/assets/sitesections/10_lol.svg'
import CSIcon from '@/assets/sitesections/13_counterstrike.svg'
import HearthstoneIcon from '@/assets/sitesections/14_hearthstone.svg'
import OverwatchIcon from '@/assets/sitesections/17_overwatch.svg'
import PubgMIcon from '@/assets/sitesections/20_pubg-mobile.svg'
import ValorantIcon from '@/assets/sitesections/21_valorant.svg'
import WiftIcon from '@/assets/sitesections/22_wild-rift.svg'
import MLOLIcon from '@/assets/sitesections/23_mobile-legends.svg'
import AOVIcon from '@/assets/sitesections/24_arena-of-valor.svg'
import EntertainmentIcon from '@/assets/sitesections/25_entertainment.svg'
import CODMIcon from '@/assets/sitesections/26_call-of-duty-mobile.svg'
import FIFAIcon from '@/assets/sitesections/27_fifa.svg'
import SC2Icon from '@/assets/sitesections/2_starcraft2.svg'
import WOWIcon from '@/assets/sitesections/6_wow.svg'
import Dota2Icon from '@/assets/sitesections/9_dota2.svg'

import GosugamerIcon from '@/assets/sitesections/all-esports.svg'
const liststyle = { display: "flex", gap: "8px", alignItems: "center" }

export default function Page() {
  console.log("svg")
  return (
    <div>
      <div style={{ width: "300px", minHeight: "300px", margin: "0 auto", backgroundColor: "gray", display: "flex", flexDirection: "column", gap: "16px" }}>

        <div style={liststyle}>
          <LoLIcon preserveAspectRatio="none" viewBox="0 0 24 24" width="48px" height="48px" /><div>LoL</div>
        </div>
        <div style={liststyle}>
          <CSIcon preserveAspectRatio="none" viewBox="0 0 24 24" width="48px" height="48px" /><div>Counterstrike</div>
        </div>
        <div style={liststyle}>
          <HearthstoneIcon preserveAspectRatio="none" viewBox="0 0 24 24" width="48px" height="48px" /><div>Hearthstone</div>
        </div>
        <div style={liststyle}>
          <OverwatchIcon preserveAspectRatio="none" viewBox="0 0 24 24" width="48px" height="48px" /><div>Overwatch</div>
        </div>
        <div style={liststyle}>
          <PubgMIcon preserveAspectRatio="none" viewBox="0 0 24 24" width="48px" height="48px" /><div>PUBG Mobile</div>
        </div>
        <div style={liststyle}>
          <ValorantIcon preserveAspectRatio="none" viewBox="0 0 24 24" width="48px" height="48px" /><div>Valorant</div>
        </div>
        <div style={liststyle}>
          <WiftIcon preserveAspectRatio="none" viewBox="0 0 24 24" width="48px" height="48px" /><div>Widl Rift</div>
        </div>
        <div style={liststyle}>
          <MLOLIcon preserveAspectRatio="none" viewBox="0 0 24 24" width="48px" height="48px" /><div>Mobile Legend</div>
        </div>
        <div style={liststyle}>
          <AOVIcon preserveAspectRatio="none" viewBox="0 0 24 24" width="48px" height="48px" /><div>Arena Of Valor</div>
        </div>
        <div style={liststyle}>
          <EntertainmentIcon preserveAspectRatio="none" viewBox="0 0 24 24" width="48px" height="48px" /><div>Entertainmentr</div>
        </div>
        <div style={liststyle}>
          <CODMIcon preserveAspectRatio="none" viewBox="0 0 24 24" width="48px" height="48px" /><div>Call of Duty Mobile</div>
        </div>
        <div style={liststyle}>
          <FIFAIcon preserveAspectRatio="none" viewBox="0 0 24 24" width="48px" height="48px" /><div>FIFA</div>
        </div>
        <div style={liststyle}>
          <SC2Icon preserveAspectRatio="none" viewBox="0 0 24 24" width="48px" height="48px" /><div>SC2</div>
        </div>
        <div style={liststyle}>
          <WOWIcon preserveAspectRatio="none" viewBox="0 0 24 24" width="48px" height="48px" /><div>WOW</div>
        </div>
        <div style={liststyle}>
          <Dota2Icon preserveAspectRatio="none" viewBox="0 0 24 24" width="48px" height="48px" /><div>Dota2</div>
        </div>
        <div style={liststyle}>
          <GosugamerIcon preserveAspectRatio="none" viewBox="0 0 24 24" width="48px" height="48px" /><div>All Esports</div>
        </div>
      </div>
    </div>
  );
}
