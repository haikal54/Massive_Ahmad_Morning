import jumbotron from '../assets/jumbotron.jpg';
import '../css/style.css';
import Profile from '../assets/profile.png';

const Cardprofile = ()=> {
    return (
        <>
        <div style={{
                backgeoundColor :' rgba(228, 166, 32, 0.952)',
                width : '100vw',
                height : '100vh',
                backgroundImage : `url(${jumbotron})`,
                backgroundPosition : 'center',
                backgroundRepeat : 'no-repeat',
                display : 'flex',
                justifyContent : 'space-around',
                alignItems : 'center',
                
            }}
        >
            <div className='card'>
                <img src={Profile}/>
                <div className='profile'>Programming | Vocalist</div>
                <div className='name'>Ahmad Haikal</div>
                <div className='desc'><span><b>Nama saya Ahmad Haikal Nuqqy Zahhar</b>.</span> Biasanya bisa dipanggil Ahmad atau Haikal. Saya lahir pada tanggal 22 Juni 2002 di Kab. Serang Provinsi Banten. Sekarang saya masih berstatus mahasiswa di
                    salah satu Universitas di surabaya yaitu Universitas Pembangunan Nasional Veteran, Fakultas Ilmu Komputer program studi Teknik Informatika.
                </div>
                <button className='button'>Contact Me</button>
            </div>
        </div>
        </>
    )
}

export default Cardprofile;