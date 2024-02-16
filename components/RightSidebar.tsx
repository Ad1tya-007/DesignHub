import React from 'react';
import Dimensions from './Settings/Dimensions';
import Text from './Settings/Text';
import Color from './Settings/Color';
import Export from './Settings/Export';

const RightSidebar = () => {
  return (
    <section className="flex flex-col border-t border-primary-grey-200 bg-primary-black text-primary-grey-300 min-2-[227px] sticky right-0 h-full max-sm:hidden select-none">
      <h3 className="px-5 pt-4 text-xs uppercase">Design</h3>
      <span className="text-xs text-primary-grey-300 mt-3 px-5 border-b border-primary-grey-200 pb-4">
        Make changes to Canvas as you like
      </span>
      <Dimensions />
      <Text />
      <Color />
      <Color />
      <Export />
    </section>
  );
};

export default RightSidebar;
