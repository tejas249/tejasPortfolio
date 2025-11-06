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
  SiRecoil,
  SiSupabase,
  SiFirebase,
  SiShadcnui,
} from 'react-icons/si';
import {motion} from 'framer-motion'

const iconVariants = (duration) => ({
    initial:{y:-10},
    animate: {
      y:[10,-10],
      transition:{
        duration:duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse"
      }
    }
})

const Technologies = () => {
  return (
    <div className='pb-24'>
      <motion.h2 
      whileInView = {{opacity:1,y:0}}
      initial = {{opacity:0, y:-100}}
      transition={{duration:1.5}}
      className='my-20 text-center text-4xl text-white'>Technologies
      </motion.h2>
      
      <motion.div
       whileInView = {{opacity:1,y:0}}
       initial = {{opacity:0, y:-100}}
       transition={{duration:1.5}}
       className='flex flex-wrap items-center justify-center gap-6'>
        {/* React */}
        <motion.div 
          initial="initial"
          animate = "animate"
          variants={iconVariants(2.5)}
          whileHover={{
               scale: 1.4,
            }}
          
        >
          <RiReactjsLine className='text-7xl text-cyan-400' />
          <p className='text-center text-white mt-2'>React</p>
        </motion.div>
        
        {/* HTML */}
        <motion.div      
          initial="initial"
          animate = "animate"
          variants={iconVariants(2.5)}
          whileHover={{
               scale: 1.4,
            }}
          >
          <SiHtml5 className='text-7xl text-orange-500' />
          <p className='text-center text-white mt-2'>HTML</p>
        </motion.div>
        
        {/* CSS */}
        <motion.div
              initial="initial"
              animate = "animate"
              variants={iconVariants(2.5)}
              whileHover={{
               scale: 1.4,
            }}
        >
          <SiCss3 className='text-7xl text-blue-500' />
          <p className='text-center text-white mt-2'>CSS</p>
        </motion.div>
        
        {/* JavaScript */}
        <motion.div
            initial="initial"
            animate = "animate"
            variants={iconVariants(2.5)}
            whileHover={{
               scale: 1.4,
            }}
        
        >
          <SiJavascript className='text-7xl text-yellow-500' />
          <p className='text-center text-white mt-2'>JavaScript</p>
        </motion.div>
        
        {/* NodeJS */}
        <motion.div
            initial="initial"
            animate = "animate"
            variants={iconVariants(2.5)}
            whileHover={{
               scale: 1.4,
            }}
        
        >
          <RiNodeTree className='text-7xl text-green-500' />
          <p className='text-center text-white mt-2'>Node.js</p>
        </motion.div>
        
        {/* Express */}
        <motion.div   
            initial="initial"
            animate = "animate"
            variants={iconVariants(2.5)}
            whileHover={{
               scale: 1.4,
            }}
        >
          <SiExpress className='text-7xl text-gray-400' />
          <p className='text-center text-white mt-2'>Express</p>
        </motion.div>
        
        {/* MongoDB */}
        <motion.div
            initial="initial"
            animate = "animate"
            variants={iconVariants(2.5)}
            whileHover={{
               scale: 1.4,
            }}
        
        >
          <SiMongodb className='text-7xl text-green-600' />
          <p className='text-center text-white mt-2'>MongoDB</p>
        </motion.div>
        
        {/* C++ */}
        <motion.div   
            initial="initial"
            animate = "animate"
            variants={iconVariants(2.5)}
            whileHover={{
               scale: 1.4,
            }}
        
        >
          <SiCplusplus className='text-7xl text-blue-700' />
          <p className='text-center text-white mt-2'>C++</p>
        </motion.div>
        
        {/* SQL */}
        <motion.div   
            initial="initial"
            animate = "animate"
            variants={iconVariants(2.5)}
            whileHover={{
               scale: 1.4,
            }}
        >
          <SiMysql className='text-7xl text-blue-600' />
          <p className='text-center text-white mt-2'>SQL</p>
        </motion.div>
        
        {/* Tailwind */}
        <motion.div   
              initial="initial"
              animate = "animate"
              variants={iconVariants(2.5)}
              whileHover={{
               scale: 1.4,
            }}
        >
          <SiTailwindcss className='text-7xl text-teal-400' />
          <p className='text-center text-white mt-2'>Tailwind</p>
        </motion.div>
        
        {/* Bootstrap */}
        <motion.div   
            initial="initial"
            animate = "animate"
            variants={iconVariants(2.5)}
            whileHover={{
               scale: 1.4,
            }}
        
        >
          <SiBootstrap className='text-7xl text-purple-600' />
          <p className='text-center text-white mt-2'>Bootstrap</p>
        </motion.div>
        
        {/* Recoil */}
        <motion.div   
            initial="initial"
            animate = "animate"
            variants={iconVariants(2.5)}
            whileHover={{
               scale: 1.4,
            }}
        >
          <SiRecoil className='text-7xl text-indigo-500' />
          <p className='text-center text-white mt-2'>Recoil</p>
        </motion.div>

         {/* Supabase */}
        <motion.div   
            initial="initial"
            animate = "animate"
            variants={iconVariants(2.5)}
            whileHover={{
               scale: 1.4,
            }}
        >
          <SiSupabase className='text-7xl text-indigo-500' />
          <p className='text-center text-white mt-2'>Supabase</p>
        </motion.div>


         {/* Firebase */}
        <motion.div   
            initial="initial"
            animate = "animate"
            variants={iconVariants(2.5)}
        >
          <SiFirebase className='text-7xl text-indigo-500' />
          <p className='text-center text-white mt-2'>Firebase</p>
        </motion.div>


        {/* Shadcn */}
        <motion.div   
            initial="initial"
            animate = "animate"
            variants={iconVariants(2.5)}

        >
          <SiShadcnui className='text-7xl text-indigo-500' />
          <p className='text-center text-white mt-2'>Shadcn</p>
        </motion.div>


        

        
      </motion.div>
    </div>
  );
};

export default Technologies;
