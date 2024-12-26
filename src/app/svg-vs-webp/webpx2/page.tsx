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
            loading="eager"
            unoptimized
            src={LoLIcon}
            height={24}
            width={24}
            alt="lol"
          />
          <div>LoL</div>
        </div>
        <div style={liststyle}>
          <Image
            loading="eager"
            unoptimized
            src={CSIcon}
            height={24}
            width={24}
            alt="Counterstrike"
          />
          <div>Counterstrike</div>
        </div>
        <div style={liststyle}>
          <Image
            loading="eager"
            unoptimized
            src={HearthstoneIcon}
            height={24}
            width={24}
            alt="Hearthstone"
          />
          <div>Hearthstone</div>
        </div>
        <div style={liststyle}>
          <Image
            loading="eager"
            unoptimized
            src={OverwatchIcon}
            height={24}
            width={24}
            alt="Overwatch"
          />
          <div>Overwatch</div>
        </div>
        <div style={liststyle}>
          <Image
            loading="eager"
            unoptimized
            src={PubgMIcon}
            height={24}
            width={24}
            alt="PUBG"
          />
          <div>PUBG Mobile</div>
        </div>
        <div style={liststyle}>
          <Image
            loading="eager"
            unoptimized
            src={ValorantIcon}
            height={24}
            width={24}
            alt="Valorant"
          />
          <div>Valorant</div>
        </div>
        <div style={liststyle}>
          <Image
            loading="eager"
            unoptimized
            src={WiftIcon}
            height={24}
            width={24}
            alt="Wild"
          />
          <div>Wild Rift</div>
        </div>
        <div style={liststyle}>
          <Image
            loading="eager"
            unoptimized
            src={MLOLIcon}
            height={24}
            width={24}
            alt="Mobile"
          />
          <div>Mobile Legend</div>
        </div>{' '}
        <div style={liststyle}>
          <Image
            loading="eager"
            unoptimized
            src={AOVIcon}
            height={24}
            width={24}
            alt="Arena"
          />
          <div>Arena Of Valor</div>
        </div>
        <div style={liststyle}>
          <Image
            loading="eager"
            unoptimized
            src={EntertainmentIcon}
            height={24}
            width={24}
            alt="Entertainmentr"
          />
          <div>Entertainmentr</div>
        </div>
        <div style={liststyle}>
          <Image
            loading="eager"
            unoptimized
            src={CODMIcon}
            height={24}
            width={24}
            alt="Call"
          />
          <div>Call of Duty Mobile</div>
        </div>
        <div style={liststyle}>
          <Image
            loading="eager"
            unoptimized
            src={FIFAIcon}
            height={24}
            width={24}
            alt="FIFA"
          />
          <div>FIFA</div>
        </div>
        <div style={liststyle}>
          <Image
            loading="eager"
            unoptimized
            src={SC2Icon}
            height={24}
            width={24}
            alt="SC2"
          />
          <div>SC2</div>
        </div>
        <div style={liststyle}>
          <Image
            loading="eager"
            unoptimized
            src={WOWIcon}
            height={24}
            width={24}
            alt="WOW"
          />
          <div>WOW</div>
        </div>
        <div style={liststyle}>
          <Image
            loading="eager"
            unoptimized
            src={Dota2Icon}
            height={24}
            width={24}
            alt="Dota2"
          />
          <div>Dota2</div>
        </div>
        <div style={liststyle}>
          <Image
            loading="eager"
            unoptimized
            src={GosugamerIcon}
            height={24}
            width={24}
            alt="All"
          />
          <div>All Esports</div>
        </div>
      </div>
    </div>
  );
}
