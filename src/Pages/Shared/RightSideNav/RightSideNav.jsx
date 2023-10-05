import { FaGoogle,FaGithub ,FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>

               <div className='p-4'>
            <h2 className="text-2xl pb-6">Login With</h2>
           <div className='space-y-3'>
           <button className="btn btn-outline w-full hover:text-blue-400">
                <FaGoogle></FaGoogle>
               Login With Google
            </button>
            <button className="btn btn-outline w-full hover:text-blue-400">
                <FaGithub></FaGithub>
               Login With Github
            </button>
           </div>
        </div>
               <div className='p-4 mt-4'>
            <h2 className="text-2xl pb-6">Finds Us</h2>
                <a href="" className='p-4 flex items-center gap-5 text-lg border rounded-t-lg'>
                  <FaFacebook className='text-xl'></FaFacebook>
                       Facebook
                </a>
                <a href="" className='p-4 flex items-center gap-5 text-lg border-x'>
                  <FaTwitter className='text-xl'></FaTwitter>
                       Twitter
                </a>
                <a href="" className='p-4 flex  items-center gap-5 text-lg border rounded-b-lg'>
                  <FaInstagram className='text-xl'></FaInstagram>
                  Instagram
                </a>
        </div>
               <div className='p-4 mt-4 bg-[#F3F3F3] rounded-md'>
            <h2 className="text-2xl pb-6">Q-Zone</h2>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
                
        </div>




        </div>
    );
};

export default RightSideNav;