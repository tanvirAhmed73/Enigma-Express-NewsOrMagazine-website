import React from 'react';
import Swal from 'sweetalert2';

const AddNews = () => {

    const handleAddNews = e =>{
        e.preventDefault();
        const form = e.target;
        const newsHeading = form.newsHeading.value
        const section = form.section.value
        const sideShow = form.sideShow.value
        const srDescription = form.srDescription.value
        const lgDescription = form.lgDescription.value
        const newsUrl = form.newsUrl.value
        const publisherName = form.publisherName.value
        const publisherPictureUrl = form.publisherPictureUrl.value
        
        const addNewNews = {
            newsHeading,
            section, 
            sideShow,
            srDescription, 
            lgDescription,
            newsUrl,
            publisherName,
            publisherPictureUrl
        }

        fetch("http://localhost:5000/allNews",{
            method : "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addNewNews),
        })
        .then(res => res.json())
        .then(data => {{
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "News Added Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                form.reset()
            }
        }})

    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add News!</h1>
                    
                    </div>
                    <div className="card shrink-0 shadow-2xl bg-base-100">
                        <form onSubmit={handleAddNews} className="card-body">

                            {/* news headling */}
                            <div className="form-control">
                                <div className='flex gap-6'>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">News Headling</span>
                                        </label>
                                        <input type="text" name='newsHeading' placeholder="News Heading" className="input input-bordered" required />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">News Section</span>
                                        </label>
                                        <select name='section' className='input input-bordered' id="">
                                            <option value="" disabled selected>Select</option>
                                            <option value="entertainment">Entertainment</option>
                                            <option value="politics">Politics</option>
                                            <option value="fashion">Fashion</option>
                                            <option value="sports">Sports</option>
                                            <option value="tech">Tech</option>
                                            <option value="business">Business</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Which Side You Want To Add The News</span>
                                        </label>
                                        <select name='sideShow' className='input input-bordered' id="">
                                            <option value="" disabled selected>Select</option>
                                            <option value="leftSide">Left Side</option>
                                            <option value="middle">Middle</option>
                                            <option value="advertisement">ADVERTISEMENT</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* short description and long description */}
                            <div className="form-control ">
                                <div className='flex gap-3'>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Short Description</span>
                                        </label>
                                        <textarea className='input input-bordered' name="srDescription" id="" cols="30" rows="10" required></textarea>
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Long Description</span>
                                        </label>
                                        <textarea className='input input-bordered' name="lgDescription" id="" cols="30" rows="10" required></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* Image*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">News Image</span>
                                </label>
                                <input type="text" name='newsUrl' placeholder="News Image url" className="input input-bordered" required />
                            </div>
                            
                            {/* PUblisher Name*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Publisher Name</span>
                                </label>
                                <input type="text" name='publisherName' placeholder="Publisher Name" className="input input-bordered" required />
                            </div>

                            {/* PUblisher Picture*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Publisher Picture Url</span>
                                </label>
                                <input type="text" name='publisherPictureUrl' placeholder="Publisher Picture Url" className="input input-bordered" required />
                            </div>


                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add News</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default AddNews;