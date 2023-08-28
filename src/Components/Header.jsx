import React, { useState } from 'react';
import logo from '../assets/Images/logo.png';
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import HeaderItem from './HeaderItem';

function Header() {
  const [toggle, SetToggle] = useState(false);
  const menu = [
    {
      name: 'HOME',
      icon: HiHome,
    },
    { name: 'SEARCH', icon: HiMagnifyingGlass },
    {
      name: 'WATCH LIST',
      icon: HiPlus,
    },
    { name: 'ORIGINALS', icon: HiStar },
    { name: 'MOVIES', icon: HiPlayCircle },
    { name: 'SERIE', icon: HiTv },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <img
          src={logo}
          className="w-[80px] md:w-[115px] object-cover"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem
              name={item.name}
              Icon={item.icon}
              key={item.name}
            />
          ))}
        </div>
        <div className="flex md:hidden gap-8">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem
                  name={''}
                  Icon={item.icon}
                  key={item.name}
                />
              )
          )}
          <div
            className="md:hidden"
            onClick={() => SetToggle(!toggle)}
          >
            <HeaderItem
              name={''}
              Icon={HiDotsVertical}
            />
            {toggle ? (
              <div className="absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-4 ">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem
                        name={item.name}
                        Icon={item.icon}
                        key={item.name}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        className="w-[40px] round-full"
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt=""
      />
    </div>
  );
}

export default Header;
