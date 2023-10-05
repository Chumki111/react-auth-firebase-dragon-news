import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div className='text-center space-y-2 pt-5'>
            
            <img src={logo} alt="" className='mx-auto' />
            <p className='text-lg text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-xl text-[#403F3F]'>Sunday, November 27, 2022</p>
        </div>
    );
};

export default Header;