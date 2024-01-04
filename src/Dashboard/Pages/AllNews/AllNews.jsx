import React from 'react';
import useToadyAllNews from '../../../hooks/useToadyAllNews';
import { MdDeleteSweep } from "react-icons/md";
import { LiaEdit } from "react-icons/lia";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllNews = () => {
    const [todayNews, refetch]= useToadyAllNews();
    const leftSideFilterData = todayNews?.filter(left => left.sideShow === 'leftSide')
    const middleFilterData = todayNews?.filter(middle => middle.sideShow === 'middle')
    const advertise = todayNews?.filter(ad => ad.sideShow === 'advertisement')
    
    const axiosSecure =useAxiosSecure()


    // handle delete
    const handleDelete = (id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/allNews/${id}`)
                .then(res =>{
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    refetch()
                })
            }
          });
    }
    return (
        <div>
            <h1 className='text-2xl text-center font-semibold bg-slate-600 p-4 text-white'>Today News</h1>
            <div className='grid grid-cols-3 text-center mt-3 gap-3'>
                <div className='border-4 h-max'>
                  <h1 className='bg-slate-700  text-white underline'>Left Side</h1>
                    {
                        leftSideFilterData?.map(left => 
                            <div key={left._id} className='mb-10'>
                                <img src={left.newsUrl} alt="" />
                                <h1 className='bg-orange-500 text-white p-2'>{left.newsHeading}</h1>
                                <div className='flex text-4xl gap-8 justify-center'>
                                    <Link onClick={()=>handleDelete(left._id)} className=' text-red-700'><MdDeleteSweep /></Link>
                                    <Link className=' text-green-700'><LiaEdit /></Link>
                                </div>
                            </div>
                            )
                    }
                 </div>
                <div className='border-4 h-max'>
                    <h1 className='bg-slate-700 text-white underline'>Middle</h1>
                    {
                        middleFilterData?.map(middle => 
                            <div key={middle._id} className='mb-10'>
                                <img src={middle.newsUrl} alt="" />
                                <h1 className='bg-orange-500 text-white p-2'>{middle.newsHeading}</h1>
                                <div className='flex text-4xl gap-8 justify-center'>
                                    <Link onClick={()=>handleDelete(middle._id)} className=' text-red-700'><MdDeleteSweep /></Link>
                                    <Link className=' text-green-700'><LiaEdit /></Link>
                                </div>
                            </div>
                            )
                    }

                </div>
                <div className='border-4 h-max'>
                    <h1 className='bg-slate-700 text-white underline'>Advertise</h1>
                    {
                        advertise?.map(ad => 
                            <div key={ad._id} className='mb-10'>
                                <img src={ad.newsUrl} alt="" />
                                <h1 className='bg-orange-500 text-white p-2'>{ad.newsHeading}</h1>
                                <div className='flex text-4xl gap-8 justify-center'>
                                    <Link onClick={()=>handleDelete(ad._id)} className=' text-red-700'><MdDeleteSweep /></Link>
                                    <Link className=' text-green-700'><LiaEdit /></Link>
                                </div>
                            </div>
                            )
                    }

                </div>
            </div>
        </div>
    );
};

export default AllNews;