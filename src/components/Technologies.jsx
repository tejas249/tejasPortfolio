import React from 'react';
import { 
  RiReactjsLine, 
  RiNodeTree 
} from 'react-icons/ri'; 
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiBootstrap, 
  SiCplusplus, 
  SiMysql, 
  SiRecoil 
} from 'react-icons/si';

const Technologies = () => {
  return (
    <div className='pb-24'>
      <h2 className='my-20 text-center text-4xl text-white'>Technologies</h2>
      <div className='flex flex-wrap items-center justify-center gap-6'>
        {/* React */}
        <div>
          <RiReactjsLine className='text-7xl text-cyan-400' />
          <p className='text-center text-white mt-2'>React</p>
        </div>
        
        {/* HTML */}
        <div>
          <SiHtml5 className='text-7xl text-orange-500' />
          <p className='text-center text-white mt-2'>HTML</p>
        </div>
        
        {/* CSS */}
        <div>
          <SiCss3 className='text-7xl text-blue-500' />
          <p className='text-center text-white mt-2'>CSS</p>
        </div>
        
        {/* JavaScript */}
        <div>
          <SiJavascript className='text-7xl text-yellow-500' />
          <p className='text-center text-white mt-2'>JavaScript</p>
        </div>
        
        {/* NodeJS */}
        <div>
          <RiNodeTree className='text-7xl text-green-500' />
          <p className='text-center text-white mt-2'>Node.js</p>
        </div>
        
        {/* Express */}
        <div>
          <SiExpress className='text-7xl text-gray-400' />
          <p className='text-center text-white mt-2'>Express</p>
        </div>
        
        {/* MongoDB */}
        <div>
          <SiMongodb className='text-7xl text-green-600' />
          <p className='text-center text-white mt-2'>MongoDB</p>
        </div>
        
        {/* C++ */}
        <div>
          <SiCplusplus className='text-7xl text-blue-700' />
          <p className='text-center text-white mt-2'>C++</p>
        </div>
        
        {/* SQL */}
        <div>
          <SiMysql className='text-7xl text-blue-600' />
          <p className='text-center text-white mt-2'>SQL</p>
        </div>
        
        {/* Tailwind */}
        <div>
          <SiTailwindcss className='text-7xl text-teal-400' />
          <p className='text-center text-white mt-2'>Tailwind</p>
        </div>
        
        {/* Bootstrap */}
        <div>
          <SiBootstrap className='text-7xl text-purple-600' />
          <p className='text-center text-white mt-2'>Bootstrap</p>
        </div>
        
        {/* Recoil */}
        <div>
          <SiRecoil className='text-7xl text-indigo-500' />
          <p className='text-center text-white mt-2'>Recoil</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
