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
import ImgListItem from '@/components/images/item';
import { times } from '@/utils/times';

export default function Page() {
  console.log('svg');
  return (
    <div>
      {times(100).map((_, index) => {
        return (
          <div
            key={index}
            style={{
              width: '300px',
              minHeight: '300px',
              margin: '0 auto',
              backgroundColor: 'gray',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <ImgListItem>
              <LoLIcon
                height="24px"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                width="24px"
              />
              <div>LoL</div>
            </ImgListItem>
            <ImgListItem>
              <CSIcon
                height="24px"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                width="24px"
              />
              <div>Counterstrike</div>
            </ImgListItem>
            <ImgListItem>
              <HearthstoneIcon
                height="24px"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                width="24px"
              />
              <div>Hearthstone</div>
            </ImgListItem>
            <ImgListItem>
              <OverwatchIcon
                height="24px"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                width="24px"
              />
              <div>Overwatch</div>
            </ImgListItem>
            <ImgListItem>
              <PubgMIcon
                height="24px"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                width="24px"
              />
              <div>PUBG Mobile</div>
            </ImgListItem>
            <ImgListItem>
              <ValorantIcon
                height="24px"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                width="24px"
              />
              <div>Valorant</div>
            </ImgListItem>
            <ImgListItem>
              <WiftIcon
                height="24px"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                width="24px"
              />
              <div>Wild Rift</div>
            </ImgListItem>
            <ImgListItem>
              <MLOLIcon
                height="24px"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                width="24px"
              />
              <div>Mobile Legend</div>
            </ImgListItem>
            <ImgListItem>
              <AOVIcon
                height="24px"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                width="24px"
              />
              <div>Arena Of Valor</div>
            </ImgListItem>
            <ImgListItem>
              <EntertainmentIcon
                height="24px"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                width="24px"
              />
              <div>Entertainmentr</div>
            </ImgListItem>
            <ImgListItem>
              <CODMIcon
                height="24px"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                width="24px"
              />
              <div>Call of Duty Mobile</div>
            </ImgListItem>
            <ImgListItem>
              <FIFAIcon
                height="24px"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                width="24px"
              />
              <div>FIFA</div>
            </ImgListItem>
            <ImgListItem>
              <SC2Icon
                height="24px"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                width="24px"
              />
              <div>SC2</div>
            </ImgListItem>
            <ImgListItem>
              <WOWIcon
                height="24px"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                width="24px"
              />
              <div>WOW</div>
            </ImgListItem>
            <ImgListItem>
              <Dota2Icon
                height="24px"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                width="24px"
              />
              <div>Dota2</div>
            </ImgListItem>
            <ImgListItem>
              <GosugamerIcon
                height="24px"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                width="24px"
              />
              <div>All Esports</div>
            </ImgListItem>
          </div>
        );
      })}
    </div>
  );
}
