import React from 'react'

// Alif Rendy

const Content1 = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <p className="p-content1">Sekolah Digital</p>
          <div>
            <p className="p-content2">MINERVA</p>
          </div>
          <div>
            <p className="p-content3">
              Minerva merupakan kursus online secara Private yang bertujuan
              untuk <br /> membantu proses pembelajaran dengan harga yang sangat
              terjangkau, dan <br /> penyampaian mater yang mudah dipahami.
            </p>
          </div>
          {/* <div className='p'>
            <p className='p-content4'>Member</p>
            <p className='p-content4'>Jam</p>
            <p className='p-content4'>Kelas</p>
          </div> */}
          <div className="container-2">
           {/* <p className='hadeh' style={{color:"#333333" }}>Member</p> */}
            <div className="container-1">
              <span className="time">5</span>
            </div>
            <div className="container-1">
              <span className="time">40</span>
            </div>
            <div className="container-1">
              <span className="time">4</span>
            </div>
            <br />
          </div>
          {/* <div>
            <button className='btn'><p className='p-button'>Gabung</p></button>
          </div> */}
          <div className="d-btn">
            <a href="/#" className="btn-content">
              <p className="p-btn">Gabung</p>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Content1