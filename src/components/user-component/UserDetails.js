import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetAllUser, GetCountries, GetPosts } from "../apis/apiCall";
import { useLocation } from 'react-router-dom';

export default function UserDetails() {
    const [countries,setCountries] = useState([]);
    const [posts,setPosts] = useState([])
    const [user,setUser] = useState([])
    const [selectedCountry, setSelectedCountry] = useState('all');
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get('id');

    useEffect(()=>{
        GetCountries().then((res)=>{
            setCountries(res.data)
        }).catch((err)=>{})
        GetAllUser().then((res)=>{
            const filteredUsers = res.data.filter((user) => user.id === parseInt(userId, 10));
            setUser(filteredUsers);
        }).catch((err)=>{});

        GetPosts().then((response)=>{
            const filteredPosts = response.data.filter((post) => post.userId === parseInt(userId, 10));
            console.log(filteredPosts);
            setPosts(filteredPosts);
        }).catch((err)=>{});
    },[])
    
    function handleChane(e){
        const selectedValue = e.target.value;
        setSelectedCountry(selectedValue);
        console.log('Selected Country:', selectedValue);
    }
    return (
        <>
            <div className="flex items-center justify-center p-2 md:p-12">
                <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 md:p-10 border border-gray-300">
                    <div class="grid grid-cols-12 flex justify-between items-center">
                        <div class="col-span-12 md:col-span-12 lg:col-span-6 mt-1.5">
                            <div className="d-flex justify-content-start mx-1">
                                <div className="text-decoration-none">
                                    <span className="bg-sky-blue cursor-pointer px-4 rounded-lg py-2 border border-black" onClick={() => { navigate(-1) }}>Back</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 md:col-span-12 lg:col-span-6 mt-5 lg:mt-0 flex gap-2 lg:gap-5 justify-between lg:justify-end items-center">
                            <div class="lg:mt-3">
                                <select onChange={handleChane}
                                    class="text-16 border border-transparent border-b-gray-200 font-normal placeholder-gray-200 outline-none focus:outline-none focus:ring-0 focus:border-transparent focus:border-b-gray-200 p-2">
                                    <option value="all" >All</option>
                                    {countries.map((country, i) => (
                                        <option key={i} value={i}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <div>
                                    <button
                                        class="relative flex justify-center items-center bg-light-green lg:mt-4 mt-0 block px-4 py-3 text-black font-medium mb-0 lg:mb-2 text-16 space-x-2 hover:opacity-90">
                                        <p class="text-center">
                                            Pause / Start
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-7">
                        <div>
                            <div className="text-center">
                                <p className="text-24 font-semibold">
                                    User Profile
                                </p>
                            </div>

                            <div className="border border-black rounded-xl mt-5">
                                {
                                    user.map((res,i)=>{
                                        return(
                                            <div key={i} class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 px-7 py-5 flex items-center">
                                                <div class="w-full">
                                                    <div>
                                                        <p>Name</p>
                                                    </div>
                                                    <div>
                                                        <span>{res.name} | {res.company.catchPhrase}</span>
                                                    </div>
                                                </div>
                                                <div class="w-full float-right flex justify-end">
                                                    <div>
                                                        <div>
                                                            <p>Address</p>
                                                        </div>
                                                        <div>
                                                            <span>{res.email} | {res.phone}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>
                        </div>
                    </div>

                    <div className="mt-7">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-44">
                        {
                            posts.map((post) => (
                            <div className="border border-black rounded-xl p-4 flex justify-center">
                                <div>
                                    <div>
                                        <p>{post.title}</p>
                                    </div>
                                    <div className="mt-5">
                                        <span>{post.body}</span>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}