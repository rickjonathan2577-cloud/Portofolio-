import DataImage from './data'
import { useState } from 'react';
import { listProyek,listTools } from './data'
import 'animate.css';


function App() {
  const [ formData , setFormData ] = useState({
    name   : "",
    email  : "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:3000\", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      const data  = await response.json();
      if(data.success){
        alert('Pesan berhasil dikirim!')
        setFormData({
          name   : "",
          email  : "",
          message: ""
        })
      } else {
        alert('Pesan gagal dikirim!')
      }
    } catch (error) {
      alert("Terjadi error saat mengirim pesan");
    }
  }
 return (
  <>
    <div id="Hero" className="hero grid md:grid-cols-2 pt-1 items-center xl:gap-0 gap-6 grid-cols-1 relative">
      <div className="animate__animated animate__fadeInUp animate__delay-3s">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="Hero Image " className='w-10 rounded-10xl border' />
          <q>Pemrograman adalah seni menulisi puisi yang dapat dimengerti komputer ❤️</q>
        </div>
        <h1 className='text-5xl/tight font-bold mb-6'>Hi Saya Ricky jonathan</h1>
        <p className='text-base/loose mb-6 opacity-50'> Saya mempunyai ketertarikan dalam bidang Programming. 
        terutama dalam pembuatan Website</p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a href="" className='bg-violet-700 p-4 rounded-2xl hover:bg-violet-600'>
            Download CV <i className="ri-download-line ri-lg"></i>
          </a>
          <a href="" className='bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 opacity-0'>
            Lihat Proyek <i className="ri-arrow-down-long-line ri-lg"></i>
          </a>
        </div>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" 
      className='w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s' />
    </div>
    
    {/* tentang */}
    <div id="about" className="tentang mt-20 py-10">
        <div className='w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg' 
        data-aos-duration="1000" data-aos="fade-up" data-aos-delay="300">
          <p className='text-base/loose mb-10'>
            Hi, perkenalkan saya Ricky Jonathan. Saya adalah seorang Software Engineer yang memulai perjalanan sejak 
            bangku kuliah dengan mengambil jurusan Teknik Informatika. 
            Sejak awal, saya merasa tertarik dengan dunia pemrograman 
            karena menurut saya sangat menyenangkan ketika sebuah program dapat 
            membantu memudahkan kehidupan manusia. 
          </p>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-6'>
              <div>
                  <h1 className='text-4xl mb-1'>
                    3<span  className='text-violet-500'>+</span>
                  </h1>
                  <p>Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tools mt-25" data-aos-duration="1000" 
        data-aos="fade-up" data-aos-delay="300">
          <h1 className='text-4xl/snug font-bold mb-4 text-center'>Tools yang dipakai</h1>
          <p className='text-center xl:w-5/5 lg:w-3/4 md:w-3/3 
          sm:w-4/4 w-full text-base/loose opacity-50'>Berikut ini beberapa Tools 
          yang saya pakai dalam project yang saya lakukan biasa nya.</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 
          grid-cols-1 gap-4">
            {listTools.map((tool) => (
                <div key={tool.id} className="group flex items-center gap-2 p-3 border border-zinc-600
              rounded-md hover:bg-zinc-800 transition-all">
                <img src={tool.gambar} alt="Tools Image" className='w-14 bg-zinc-800 p-1 
                group-hover:bg-zinc-900' />
                <div>
                  <h4 className='font-bold'>{tool.nama}</h4>
                  <p className='opacity-50'>{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>

    {/* Kontak */}
    <div id='Kontak' className='Kontak mt-10 sm:p-10 p-0'
      data-aos-duration="1000" 
      data-aos="fade-up" data-aos-delay="300">
      <h1 className='text-4xl mb-2 font-bold text-center'>Kontak</h1>
      <p className='text-base/loose text-center mb-10 opacity-50'>Mari terhubung dengan saya
      </p>
      <form onSubmit={handleSubmit} 
      action="" className="bg-zinc-800 p-10 w-fit mx-auto rounded-md sm:w-fit w-full" autoComplete='off'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <label className='font-semibold '>Nama Lengkap</label>
            <input type="text" 
            name='name' 
            placeholder='Masukkan Nama...' 
            value={formData.name}  
            className='border border-zinc-500 p-2 
            rounded-md'
            onChange={handleChange} 
            required/>
          </div>
          <div className='flex flex-col gap-2'>
            <label className='font-semibold '>Email</label>
            <input type="email" 
            name='email' 
            placeholder='Masukkan Email...' 
            value={formData.email}  
            className='border border-zinc-500 p-2 
            rounded-md'
            onChange={handleChange}
            required/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="pesan" className='font-semibold '>Pesan</label>
            <textarea name="message" 
            value={formData.message}  
            id="pesan" 
            cols="45" 
            ows="7" 
            placeholder='Masukkan Pesan...' 
            className='border border-zinc-500 p-2 
            rounded-md' 
            onChange={handleChange}
            required/>
          </div>
          <div className='text-center'>
            <button className="bg-violet-700 p-3 rounded-lg
            w-full cursor-pointer border border-zinc-500" 
            type="submit">Kirim Pesan</button>
          </div>
        </div>
      </form>
    </div>

  </>
 )
}

export default App
