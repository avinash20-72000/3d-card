import React,{useState} from 'react';
import Logo from '../img/adidas-9.svg';
import Shoes from '../img/shoe.png';
import {useMotionValue , useTransform , motion } from 'framer-motion';

const Card = () => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100,100],[30,-30]);
    const rotateY = useTransform(y, [-100,100],[-30,30]);
    const [theme,setTheme]   = useState('#e4dfdc');

    const colors =[
        { value : '#b6a179'},
        { value : '#e4dfdc'},
        { value : '#6389cb'},
        { value : '#f2c758'},
        { value : '#ffffff'}
    ];

    const changeTheme = (themeColor) =>
    {
        setTheme(themeColor);
    } 

  return (
    <div style={{prespective:2000}}>
        <motion.div style={{ x, y, rotateX, rotateY, z:100,"backgroundColor":theme }} drag dragElastic={0.18} 
        dragConstraints={{top: 0,left:0, right:0 , bottom:0 }} whileTap={{cursor: 'grabbing'}}
        className='w-[426px] min-h-[500px] rounded-[30px] border-[4px]  border-white px-[40px] py-[24px] cursor-grab relative'>
            <div className='mb-4 max-w-[25%]'>
                <img src={Logo} alt="logo" />
            </div>
            <h1 className='text-5xl mb-6 font-extrabold'>NMD_R1 SHOES</h1>
            <p className='max-w-[300px] text-[#000000] mb-6'>FOOTBALL-INSPIRED NMD SHOES MADE IN PART WITH PARLEY OCEAN PLASTIC</p>
            <div className='flex items-center gap-x-[20px] mb-12'>
                <button onClick={()=>{alert("Aukat me raho")}} className='bg-[#2d2b2c] text-white text-base font-medium py-[16px] px-[40px]  rounded-lg'>Add to Bag</button>
                <div className='text-[24px] font-bold text-[#000000]'>$12999.0</div>
            </div>
            <ul className='flex gap-x-[10px]'>
                {colors.map((color, index)=>{
                    return (
                        <li key={index} style={{backgroundColor: color.value}} onClick={()=>changeTheme(color.value)} className='border-[1px]  border-black w-8 h-8 rounded-full cursor-pointer'></li>
                    )
                })}
            </ul>
            <motion.div 
            style={{ x, y, rotateX, rotateY, z:1000 }} 
            className='absolute top-40 -right-60 '>
                <img src={Shoes} alt="logo"  draggable='false'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Card