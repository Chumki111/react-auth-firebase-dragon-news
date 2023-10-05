
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HiOutlineBookmark } from 'react-icons/hi';
import { FaEye} from 'react-icons/fa';
import { BsShare } from 'react-icons/bs';
const NewsCard = ({ news }) => {
    const { title, image_url, details, _id, author,rating,total_view } = news
    return (
        <div className='p-4'>
            <h2 className="text-2xl pb-6 font-semibold">Dragon News Home</h2>
            <div className="card bg-base-100 shadow-xl mb-10">
                <div className='bg-[#F3F3F3] p-3 flex justify-between'>
                    <div className='flex gap-3'>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={author?.img} />

                            </div>

                        </label>
                        <div>
                            <h2>{author?.name}</h2>
                            <p>{author?.published_date}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-4 text-2xl pr-3'>
                        <HiOutlineBookmark></HiOutlineBookmark>
                        <BsShare></BsShare>
                    </div>

                </div>

                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <figure><img src={image_url} alt="Shoes" /></figure>
                    {
                        details.length > 200 ? 
                            <div className=''>
                               
                                <p>{details.slice(0, 200)}<Link
                                    to={`/news/${_id}`}
                                    className='text-red-500'> <br />  Read more.....</Link></p>
                            </div>
                            :
                            <p>{details}</p>
                    }
                     <p className='border-b-2 space-y-2 mt-3'></p>
                    <div className='flex justify-between mt-5'>
                       <div className='flex'>
                       <div className="rating rating-sm gap-2 mr-3">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div>
                         {rating?.number}
                       </div>
                       <div className='flex items-center gap-3'>
                        <FaEye className='text-2xl'></FaEye>
                        <p>{total_view}</p>
                       </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
NewsCard.propTypes = {
    news: PropTypes.object,
}
export default NewsCard;