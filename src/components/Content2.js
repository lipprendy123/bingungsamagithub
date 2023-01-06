import React from 'react'
import Laptop from '../laptop.png'


const Content2 = () => {
  return (
    <>
      <header className="header-1">
        <div className="container-5">
          <img className="laptop" src={Laptop} alt="laptop" />
          <div>
            <p className="p-content5">Harga Kelas</p>
          </div>
          <div>
            <p className="p-content6">Rp 100.000 / Jam</p>
          </div>
          <div>
            <p className="p-content7">Setiap hari | 08.00 - 22.00</p>
          </div>
          <div>
            <ul className='ul'>
              <li >Khursus secara private</li>
            </ul>
            <ul className='ul-2'>
              <li >Online dengan Google meet</li>
            </ul>
            <ul className='ul-3'>
              <li >Khusus Jogja bisa offline</li>
            </ul>
            <ul className='ul-4'>
              <li >Di Mentorin oleh instruktur yang expert pada bidangnya</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Content2