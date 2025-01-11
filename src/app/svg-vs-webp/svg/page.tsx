import SC2Icon from '@/assets/sitesections/svg/2_starcraft2.svg';
import WOWIcon from '@/assets/sitesections/svg/6_wow.svg';
import Dota2Icon from '@/assets/sitesections/svg/9_dota2.svg';
import LoLIcon from '@/assets/sitesections/svg/10_lol.svg';
import CSIcon from '@/assets/sitesections/svg/13_counterstrike.svg';
import HearthstoneIcon from '@/assets/sitesections/svg/14_hearthstone.svg';
import OverwatchIcon from '@/assets/sitesections/svg/17_overwatch.svg';
import PubgMIcon from '@/assets/sitesections/svg/20_pubg-mobile.svg';
import ValorantIcon from '@/assets/sitesections/svg/21_valorant.svg';
import WiftIcon from '@/assets/sitesections/svg/22_wild-rift.svg';
import MLOLIcon from '@/assets/sitesections/svg/23_mobile-legends.svg';
import AOVIcon from '@/assets/sitesections/svg/24_arena-of-valor.svg';
import EntertainmentIcon from '@/assets/sitesections/svg/25_entertainment.svg';
import CODMIcon from '@/assets/sitesections/svg/26_call-of-duty-mobile.svg';
import FIFAIcon from '@/assets/sitesections/svg/27_fifa.svg';
import GosugamerIcon from '@/assets/sitesections/svg/all-esports.svg';
import { liststyle } from '@/styles/css';

export default function Page() {
  console.log('svg');
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
          <LoLIcon
            height="24px"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            width="24px"
          />
          <div>LoL</div>
        </div>
        <div style={liststyle}>
          <CSIcon
            height="24px"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            width="24px"
          />
          <div>Counterstrike</div>
        </div>
        <div style={liststyle}>
          <HearthstoneIcon
            height="24px"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            width="24px"
          />
          <div>Hearthstone</div>
        </div>
        <div style={liststyle}>
          <OverwatchIcon
            height="24px"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            width="24px"
          />
          <div>Overwatch</div>
        </div>
        <div style={liststyle}>
          <PubgMIcon
            height="24px"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            width="24px"
          />
          <div>PUBG Mobile</div>
        </div>
        <div style={liststyle}>
          <ValorantIcon
            height="24px"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            width="24px"
          />
          <div>Valorant</div>
        </div>
        <div style={liststyle}>
          <WiftIcon
            height="24px"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            width="24px"
          />
          <div>Wild Rift</div>
        </div>
        <div style={liststyle}>
          <MLOLIcon
            height="24px"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            width="24px"
          />
          <div>Mobile Legend</div>
        </div>
        <div style={liststyle}>
          <AOVIcon
            height="24px"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            width="24px"
          />
          <div>Arena Of Valor</div>
        </div>
        <div style={liststyle}>
          <EntertainmentIcon
            height="24px"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            width="24px"
          />
          <div>Entertainmentr</div>
        </div>
        <div style={liststyle}>
          <CODMIcon
            height="24px"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            width="24px"
          />
          <div>Call of Duty Mobile</div>
        </div>
        <div style={liststyle}>
          <FIFAIcon
            height="24px"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            width="24px"
          />
          <div>FIFA</div>
        </div>
        <div style={liststyle}>
          <SC2Icon
            height="24px"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            width="24px"
          />
          <div>SC2</div>
        </div>
        <div style={liststyle}>
          <WOWIcon
            height="24px"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            width="24px"
          />
          <div>WOW</div>
        </div>
        <div style={liststyle}>
          <Dota2Icon
            height="24px"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            width="24px"
          />
          <div>Dota2</div>
        </div>
        <div style={liststyle}>
          <GosugamerIcon
            height="24px"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            width="24px"
          />
          <div>All Esports</div>
        </div>
      </div>
    </div>
  );
}
