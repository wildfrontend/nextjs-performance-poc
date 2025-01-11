import Image from 'next/image';

import SC2Icon from '@/assets/sitesections/webpx2/2_starcraft2.webp';
import WOWIcon from '@/assets/sitesections/webpx2/6_wow.webp';
import Dota2Icon from '@/assets/sitesections/webpx2/9_dota2.webp';
import LoLIcon from '@/assets/sitesections/webpx2/10_lol.webp';
import CSIcon from '@/assets/sitesections/webpx2/13_counterstrike.webp';
import HearthstoneIcon from '@/assets/sitesections/webpx2/14_hearthstone.webp';
import OverwatchIcon from '@/assets/sitesections/webpx2/17_overwatch.webp';
import PubgMIcon from '@/assets/sitesections/webpx2/20_pubg-mobile.webp';
import ValorantIcon from '@/assets/sitesections/webpx2/21_valorant.webp';
import WiftIcon from '@/assets/sitesections/webpx2/22_wild-rift.webp';
import MLOLIcon from '@/assets/sitesections/webpx2/23_mobile-legends.webp';
import AOVIcon from '@/assets/sitesections/webpx2/24_arena-of-valor.webp';
import EntertainmentIcon from '@/assets/sitesections/webpx2/25_entertainment.webp';
import CODMIcon from '@/assets/sitesections/webpx2/26_call-of-duty-mobile.webp';
import FIFAIcon from '@/assets/sitesections/webpx2/27_fifa.webp';
import GosugamerIcon from '@/assets/sitesections/webpx2/all-esports.webp';
import { liststyle } from '@/styles/css';

export default function Page() {
  console.log('webpx2');
  return (
    <div>
      <div
        style={{
          width: '300px',
          minHeight: '300px',
          margin: '0 auto',
          backgroundColor: 'gray',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={liststyle}>
          <Image
            alt="lol"
            height={24}
            loading="eager"
            src={LoLIcon}
            unoptimized
            width={24}
          />
          <div>LoL</div>
        </div>
        <div style={liststyle}>
          <Image
            alt="Counterstrike"
            height={24}
            loading="eager"
            src={CSIcon}
            unoptimized
            width={24}
          />
          <div>Counterstrike</div>
        </div>
        <div style={liststyle}>
          <Image
            alt="Hearthstone"
            height={24}
            loading="eager"
            src={HearthstoneIcon}
            unoptimized
            width={24}
          />
          <div>Hearthstone</div>
        </div>
        <div style={liststyle}>
          <Image
            alt="Overwatch"
            height={24}
            loading="eager"
            src={OverwatchIcon}
            unoptimized
            width={24}
          />
          <div>Overwatch</div>
        </div>
        <div style={liststyle}>
          <Image
            alt="PUBG"
            height={24}
            loading="eager"
            src={PubgMIcon}
            unoptimized
            width={24}
          />
          <div>PUBG Mobile</div>
        </div>
        <div style={liststyle}>
          <Image
            alt="Valorant"
            height={24}
            loading="eager"
            src={ValorantIcon}
            unoptimized
            width={24}
          />
          <div>Valorant</div>
        </div>
        <div style={liststyle}>
          <Image
            alt="Wild"
            height={24}
            loading="eager"
            src={WiftIcon}
            unoptimized
            width={24}
          />
          <div>Wild Rift</div>
        </div>
        <div style={liststyle}>
          <Image
            alt="Mobile"
            height={24}
            loading="eager"
            src={MLOLIcon}
            unoptimized
            width={24}
          />
          <div>Mobile Legend</div>
        </div>{' '}
        <div style={liststyle}>
          <Image
            alt="Arena"
            height={24}
            loading="eager"
            src={AOVIcon}
            unoptimized
            width={24}
          />
          <div>Arena Of Valor</div>
        </div>
        <div style={liststyle}>
          <Image
            alt="Entertainmentr"
            height={24}
            loading="eager"
            src={EntertainmentIcon}
            unoptimized
            width={24}
          />
          <div>Entertainmentr</div>
        </div>
        <div style={liststyle}>
          <Image
            alt="Call"
            height={24}
            loading="eager"
            src={CODMIcon}
            unoptimized
            width={24}
          />
          <div>Call of Duty Mobile</div>
        </div>
        <div style={liststyle}>
          <Image
            alt="FIFA"
            height={24}
            loading="eager"
            src={FIFAIcon}
            unoptimized
            width={24}
          />
          <div>FIFA</div>
        </div>
        <div style={liststyle}>
          <Image
            alt="SC2"
            height={24}
            loading="eager"
            src={SC2Icon}
            unoptimized
            width={24}
          />
          <div>SC2</div>
        </div>
        <div style={liststyle}>
          <Image
            alt="WOW"
            height={24}
            loading="eager"
            src={WOWIcon}
            unoptimized
            width={24}
          />
          <div>WOW</div>
        </div>
        <div style={liststyle}>
          <Image
            alt="Dota2"
            height={24}
            loading="eager"
            src={Dota2Icon}
            unoptimized
            width={24}
          />
          <div>Dota2</div>
        </div>
        <div style={liststyle}>
          <Image
            alt="All"
            height={24}
            loading="eager"
            src={GosugamerIcon}
            unoptimized
            width={24}
          />
          <div>All Esports</div>
        </div>
      </div>
    </div>
  );
}
