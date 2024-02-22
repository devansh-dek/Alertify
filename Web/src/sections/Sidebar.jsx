import React,{useState} from 'react';
import Dash from '../components/Dash';
import DashFull from '../components/DashFull';
import down from "../assets/icons/down-arrow.png";
import up from "../assets/icons/up-arrow.png";
import Close from "../assets/icons/close.png";
import Filters from "../assets/icons/setting.png";
import Underline from '../components/Underline';
import Red from "../assets/icons/red.png";
import Green from "../assets/icons/green.png";
import Yellow from "../assets/icons/yellow.png";

const Sidebar = () => {

  const [isDash, setisDash] = useState(false);
  function handleDashboard(){
    setisDash(!isDash);
  }

  const [isVeh, setisVeh] = useState(false);
  function handleVehicles(){
    setisVeh(!isVeh);
  }

  const [isMaint, setisMaint] = useState(false);
  function handleMaintenance(){
    setisMaint(!isMaint);
  }

  const [isEvent, setisEvent] = useState(false);
  function handleEvents(){
    setisEvent(!isEvent);
  }

  const [vhOverview, setVhOverview] = useState(false);
  function handleVhOverview(){
    setVhOverview(!vhOverview);
  }

  const [eventDetails, setEventDetails] = useState(false);
  function handleEventDetails(){
    setEventDetails(!eventDetails);
  }

  const [underline, setUnderline] = useState(0);
  function handleAll(){
    setUnderline(0);
  }
  function handleParked(){
    setUnderline(2);
  }
  function handleDriving(){
    setUnderline(1);
  }

  function VehicleBrief(props){
    return (
    <div className='p-6 group hover:bg-gray-200 cursor-pointer bg-white'>
      <div className='group-hover:text-emerald-700 text-gray-500 flex flex-row gap-5'><img src={props.icon} className='h-5 w-5 m-2'/><span className='text-2xl font-bold'>{props.title}</span></div>
      <div><span className='text-md text-gray-400 relative left-[55px]'>{props.subtitle}</span></div>
    </div>)
  }

  return (
    <div>
    <section className='h-screen overflow-y-scroll overflow-x-hidden w-[230px] absolute top-0 left-0 bg-white flex flex-col gap-5 p-7'>
      <div className={!isDash ? 'flex flex-row justify-between text-sm font-bold text-gray-500' : 'flex flex-row justify-between text-sm font-bold text-green-700'}><span>Dashboard</span><button onClick={handleDashboard}><img src={isDash ? up : down} className='h-5 w-5' /></button></div>
      <Dash />
      <div className={isDash ? 'flex flex-col p-2 text-sm gap-3 font-bold text-gray-400' : 'hidden'}>
        <div className={!vhOverview ? 'text-gray-500' : 'text-green-700'}><button onClick={handleVhOverview}>Vehicles Overview</button></div>
        <Dash />
        <div>Real-time data</div>
        <Dash />
      </div>
      <div className='flex flex-row justify-between text-sm font-bold text-gray-500'><span>Vehicles</span><button onClick={handleVehicles}><img src={isVeh ? up : down} className='h-5 w-5' /></button></div>
      <Dash />
      <div className={isVeh ? 'flex flex-col p-2 text-sm gap-3 font-bold text-gray-400' : 'hidden'}>
        <div>Fleet</div>
        <Dash />
        <div>Vehicle Assignment</div>
        <Dash />
      </div>
      <div className='flex flex-row justify-between text-sm font-bold text-gray-500'><span>Events</span><button onClick={handleEvents}><img src={isEvent ? up : down} className='h-5 w-5' /></button></div>
      <Dash />
      <div className={isEvent ? 'flex flex-col p-2 text-sm gap-3 font-bold text-gray-400' : 'hidden'}>
        <div>Overview</div>
        <Dash />
      </div>
      <div className='flex flex-row justify-between text-sm font-bold text-gray-500'><span>Maintenance</span><button onClick={handleMaintenance}><img src={isMaint ? up : down} className='h-5 w-5' /></button></div>
      <Dash />
      <div className={isMaint ? 'flex flex-col p-2 text-sm gap-3 font-bold text-gray-400' : 'hidden'}>
        <div>Maintenance Planner</div>
        <Dash />
        <div>History</div>
        <Dash />
      </div>
      <div className='flex flex-row justify-between text-sm font-bold text-gray-500'><span>Analytics</span></div>
    </section>
    <section className={vhOverview ? 'h-screen w-[350px] bg-white absolute top-0 left-[230px] overflow-y-scroll overflow-x-hidden' : 'hidden'}>
        <div className='text-xl flex flex-row justify-between font-bold text-gray-700 p-4'><span>Active Vehicles</span><button onClick={handleVhOverview}><img src={Close} className='h-4 w-4 m-2' /></button></div>
        <DashFull />
        <div className='flex flex-row justify-between m-5'><input type='text' placeholder='Search' className='h-10 w-[250px] p-2 border-2 border-gray-300 rounded-lg bg-gray-100' /><button><img src={Filters} className='h-5 w-5 m-3' /></button></div>
        <DashFull />
        <div className='flex flex-row justify-around m-3 text-md text-gray-500 font-bold'><button onClick={handleAll}>ALL</button><button onClick={handleDriving}>DRIVING</button><button onClick={handleParked}>PARKED</button></div>
        <DashFull />
        <div className={(underline === 0) ? 'flex flex-row relative left-5' : (underline === 1) ? 'flex flex-row relative left-[120px]' : 'flex flex-row relative left-[240px]'}><Underline /></div>
        <div>
          <a onClick={handleEventDetails}><VehicleBrief title="JH 1562" icon={Red} subtitle="20 Feb, 24 / 1h 10min" /></a>
          <DashFull />
          <VehicleBrief title="JH 1312" icon={Green} subtitle="20 Feb, 24 / 40min" />
          <DashFull />
          <VehicleBrief title="JH 1221" icon={Green} subtitle="20 Feb, 24 / 2h 2min" />
          <DashFull />
          <VehicleBrief title="JH 5326" icon={Yellow} subtitle="20 Feb, 24 / 1h 30min" />
          <DashFull />
          <VehicleBrief title="JH 1712" icon={Red} subtitle="20 Feb, 24 / 10min" />
        </div>
    </section>
    <section className={eventDetails ? 'h-screen w-[350px] bg-white absolute top-0 left-[580px] overflow-y-scroll overflow-x-hidden' : 'hidden'}>
        <div className='text-xl flex flex-row justify-between font-bold text-gray-700 p-4'><span>Event Details</span><button onClick={handleEventDetails}><img src={Close} className='h-4 w-4 m-2' /></button></div>
        <DashFull />
        <div className='p-5'><h2 className='text-gray-500 font-semibold text-lg'>JH 1562</h2><h3 className='text-sm font-semibold text-gray-400'>WAUDFAFL6DN014563 <span className='text-emerald-600'>DRIVING</span></h3></div>
        <DashFull />
        <div className='grid grid-cols-2 grid-rows-2 p-5 gap-5'>
            <div className='font-semibold'><h3 className='text-gray-400 text-xs'>Start Date</h3><h4 className='text-gray-600 text-sm'>Feb 20 / 10:35 AM</h4></div>
            <div className='font-semibold'><h3 className='text-gray-400 text-xs'>Duration</h3><h4 className='text-gray-600 text-sm'>2h</h4></div>
            <div className='font-semibold'><h3 className='text-gray-400 text-xs'>Distance Covered</h3><h4 className='text-gray-600 text-sm'>300 miles</h4></div>
            <div className='font-semibold'><h3 className='text-gray-400 text-xs'>Driver</h3><h4 className='text-gray-600 text-sm'>John Doe</h4></div>
        </div>
        <DashFull />
    </section>
    </div>
  )
}

export default Sidebar;