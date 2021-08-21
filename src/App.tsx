import React from 'react';
import Nav from '../components/navbarh';
import Nav2 from '../components/navbarp';
import Nav3 from '../components/navbaro';
import Nav4 from '../components/navbarc';
import Nav5 from '../components/navbard';
import '../public/css/App.css'
// import Slide from '../components/slideshow'



const Homepage = () => {
  return (
    <div className="App">
      <header className="App-header">
     <Nav />   
     <img src="../public/image/kumipropic.PNG" alt="KUMI" width="100%" height="auto"/>
      <h1 className="bhira-word">Handsome</h1>
      
      </header>
    </div>
  )
};
const Productpage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav2 />
        <p>Hello Vite + React!</p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
};
const Orderpage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav3 />
        <p>Hello Vite + React!</p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
};
const Contactpage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav4 />
        <div className="text-7xl font-bold text-pink-500 text-center">
Contact us
</div>
<br /><br />
<div className="text-gray-600 body-font relative">
<div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
  <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map"  scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.6907316197744!2d100.51423551527397!3d13.737164601332557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299dd6c7b4585%3A0x7ddd4b024ce97042!2sDeverhood%20Company%20Limited!5e0!3m2!1sth!2sth!4v1629382621142!5m2!1sth!2sth" ></iframe>
    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
      <div className="lg:w-1/2 px-6">
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ที่อยู่</h2>
        <p className="mt-1">        320 ถนนพระรามที่ ๔ แขวง มหาพฤฒาราม เขตบางรัก กรุงเทพมหานคร 10500</p>
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Social media</h2>
        <p className="leading-relaxed">link</p>
      </div>
      <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">อีเมล</h2>
        <a href="https://www.gmail.com" className="text-indigo-500 leading-relaxed">kumi@gmail.com</a>
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">เบอร์โทรศัพท์</h2>
        <p className="leading-relaxed">000-000-0000</p>
      </div>
    </div>
  </div>
  <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
    <h2 className="text-gray-900 text-lg mb-1 font-bold title-font">ติดต่อเรา</h2>
    <p className="leading-relaxed mb-5 text-gray-600">เราจะตอบกลับให้เร็วที่สุดผ่านอีเมลของคุณ</p>
    <div className="relative mb-4">
      <label htmlFor="name" className="leading-7 text-sm text-gray-600">ชื่อ</label>
      <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
    </div>
    <div className="relative mb-4">
      <label htmlFor="email" className="leading-7 text-sm text-gray-600">อีเมล</label>
      <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

    </div>
    <div className="relative mb-4">
      <label htmlFor="message" className="leading-7 text-sm text-gray-600">ข้อความ</label>
      <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
    </div>
    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">ส่ง</button>
    <p className="text-xs text-gray-500 mt-3">เราจะตอบกลับให้เร็วที่สุด(ภายใน 24ชั่วโมง)ผ่านอีเมลของคุณ</p>
  </div>
</div>
</div>
        
      </header>
    </div>
  )
};
const Donatepage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav5 />
        <div className="text-7xl font-bold text-pink-500">
        Donate
        </div>
        <br /><br />
        <div className="text-3x1">
          We have many platform that you can donate
        </div>
        <div className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Donate on ronnapatp</h1>
        <div className="flex mb-4">

        </div>
        <iframe id='kofiframe' src='https://ko-fi.com/ronnapatp/?hidefeed=true&widget=true&embed=true&preview=true' style={{border:"none",width:"100%",padding:"4px",background:"#f9f9f9"}} height='500' title='ronnapatp'></iframe>

      </div>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Donate to bhira</h1>
        <div className="flex mb-4">

        </div>
        <iframe id='kofiframe' src='https://ko-fi.com/bhira/?hidefeed=true&widget=true&embed=true&preview=true' style={{border:"none",width:"100%",padding:"4px",background:"#f9f9f9"}} height='500' title='bhira'></iframe>
      </div>
    </div>
  </div>
  </div>
      </header>
    </div>
  )
};

export {Homepage, Productpage,Orderpage,Contactpage,Donatepage }; 