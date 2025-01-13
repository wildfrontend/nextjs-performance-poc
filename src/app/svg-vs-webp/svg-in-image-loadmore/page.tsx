import Image from 'next/image';

import SC2Icon from '@/assets/sitesections/svg/2_starcraft2.svg?url';
import WOWIcon from '@/assets/sitesections/svg/6_wow.svg?url';
import Dota2Icon from '@/assets/sitesections/svg/9_dota2.svg?url';
import LoLIcon from '@/assets/sitesections/svg/10_lol.svg?url';
import CSIcon from '@/assets/sitesections/svg/13_counterstrike.svg?url';
import HearthstoneIcon from '@/assets/sitesections/svg/14_hearthstone.svg?url';
import OverwatchIcon from '@/assets/sitesections/svg/17_overwatch.svg?url';
import PubgMIcon from '@/assets/sitesections/svg/20_pubg-mobile.svg?url';
import ValorantIcon from '@/assets/sitesections/svg/21_valorant.svg?url';
import WiftIcon from '@/assets/sitesections/svg/22_wild-rift.svg?url';
import MLOLIcon from '@/assets/sitesections/svg/23_mobile-legends.svg?url';
import AOVIcon from '@/assets/sitesections/svg/24_arena-of-valor.svg?url';
import EntertainmentIcon from '@/assets/sitesections/svg/25_entertainment.svg?url';
import CODMIcon from '@/assets/sitesections/svg/26_call-of-duty-mobile.svg?url';
import FIFAIcon from '@/assets/sitesections/svg/27_fifa.svg?url';
import GosugamerIcon from '@/assets/sitesections/svg/all-esports.svg?url';
import ImgListItem from '@/components/images/item';
import { times } from '@/utils/times';

export default function Page() {
  console.log('import svg by image');
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
              <Image
                alt="lol"
                height={24}
                loading="eager"
                src={LoLIcon}
                width={24}
              />
              <div>LoL</div>
            </ImgListItem>
            <ImgListItem>
              <Image
                alt="Counterstrike"
                height={24}
                loading="eager"
                src={CSIcon}
                width={24}
              />
              <div>Counterstrike</div>
            </ImgListItem>
            <ImgListItem>
              <Image
                alt="Hearthstone"
                height={24}
                loading="eager"
                src={HearthstoneIcon}
                width={24}
              />
              <div>Hearthstone</div>
            </ImgListItem>
            <ImgListItem>
              <Image
                alt="Overwatch"
                height={24}
                loading="eager"
                src={OverwatchIcon}
                width={24}
              />
              <div>Overwatch</div>
            </ImgListItem>
            <ImgListItem>
              <Image
                alt="PUBG"
                height={24}
                loading="eager"
                src={PubgMIcon}
                width={24}
              />
              <div>PUBG Mobile</div>
            </ImgListItem>
            <ImgListItem>
              <Image
                alt="Valorant"
                height={24}
                loading="eager"
                src={ValorantIcon}
                width={24}
              />
              <div>Valorant</div>
            </ImgListItem>
            <ImgListItem>
              <Image
                alt="Wild"
                height={24}
                loading="eager"
                src={WiftIcon}
                width={24}
              />
              <div>Wild Rift</div>
            </ImgListItem>
            <ImgListItem>
              <Image
                alt="Mobile"
                height={24}
                loading="eager"
                src={MLOLIcon}
                width={24}
              />
              <div>Mobile Legend</div>
            </ImgListItem>
            <ImgListItem>
              <Image
                alt="Arena"
                height={24}
                loading="eager"
                src={AOVIcon}
                width={24}
              />
              <div>Arena Of Valor</div>
            </ImgListItem>
            <ImgListItem>
              <Image
                alt="Entertainmentr"
                height={24}
                loading="eager"
                src={EntertainmentIcon}
                width={24}
              />
              <div>Entertainmentr</div>
            </ImgListItem>
            <ImgListItem>
              <Image
                alt="Call"
                height={24}
                loading="eager"
                src={CODMIcon}
                width={24}
              />
              <div>Call of Duty Mobile</div>
            </ImgListItem>
            <ImgListItem>
              <Image
                alt="FIFA"
                height={24}
                loading="eager"
                src={FIFAIcon}
                width={24}
              />
              <div>FIFA</div>
            </ImgListItem>
            <ImgListItem>
              <Image
                alt="SC2"
                height={24}
                loading="eager"
                src={SC2Icon}
                width={24}
              />
              <div>SC2</div>
            </ImgListItem>
            <ImgListItem>
              <Image
                alt="WOW"
                height={24}
                loading="eager"
                src={WOWIcon}
                width={24}
              />
              <div>WOW</div>
            </ImgListItem>
            <ImgListItem>
              <Image
                alt="Dota2"
                height={24}
                loading="eager"
                src={Dota2Icon}
                width={24}
              />
              <div>Dota2</div>
            </ImgListItem>
            <ImgListItem>
              <Image
                alt="All"
                height={24}
                loading="eager"
                src={GosugamerIcon}
                width={24}
              />
              <div>All Esports</div>
            </ImgListItem>
          </div>
        );
      })}
    </div>
  );
}
