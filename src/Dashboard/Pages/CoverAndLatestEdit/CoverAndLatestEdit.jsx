import Swal from "sweetalert2";
import useAxiosAdmin from "../../../hooks/useAxiosAdmin";
import { useLoaderData } from "react-router-dom";

const CoverAndLatestEdit = () => {
    
    
    const axiosAdmin = useAxiosAdmin();
    const handleUpdate = async(e)=>{
        e.preventDefault();
        const form = e.target;
        const subtitle = form.subtitle.value;
        const latestNews = form.latestNews.value;
        const coverImage = form.coverImage.value;
        const newCover = {
            subtitle,
            latestNews,
            coverImage
        }
        const coverRes = await axiosAdmin.patch(`/coverData/${_id}`, newCover)
        if(coverRes.data.modifiedCount > 0){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Home Page Updated`,
                showConfirmButton: false,
                timer: 1500
              });
        }
        
    }


    return (
        <div>
            <h1 className="text-center text-5xl font-bold">Add Your Cover Picture And Latest News</h1>
            <div className="card shrink-0 shadow-2xl bg-base-100">
                        <form onSubmit={handleUpdate} className="card-body">

                            {/* Website Subtitle */}
                            <div className="form-control">
                                
                                <label className="label">
                                    <span className="label-text">Website Subtitle</span>
                                </label>
                                <input type="text" name='subtitle' placeholder="Website Subtitle" className="input input-bordered" required />
                                
                            </div>

                            {/*latest News */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Latest News</span>
                                </label>
                                <textarea className='input input-bordered' name="latestNews" id="" cols="30" rows="10" required></textarea>
 
                            </div>

                            {/* Image*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Cover Image</span>
                                </label>
                                <input type="text" name='coverImage' placeholder="Cover Image url" className="input input-bordered" required />
                            </div>
                            
                            


                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
        </div>
    );
};

export default CoverAndLatestEdit;