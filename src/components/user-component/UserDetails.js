import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserDetails() {
    const navigate = useNavigate();

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
                                <select
                                    class="text-16 border border-transparent border-b-gray-200 font-normal placeholder-gray-200 outline-none focus:outline-none focus:ring-0 focus:border-transparent focus:border-b-gray-200 p-2">
                                    <option value="all" >All</option>
                                    <option></option>
                                </select>
                            </div>
                            <div>
                                <div>
                                    <button
                                        class="relative flex justify-center items-center bg-gray-700 lg:mt-4 mt-0 block w-full md:w-48 px-4 py-3 rounded-lg text-white font-medium mb-0 lg:mb-2 text-14 space-x-2 hover:opacity-90">
                                        <p class="text-center">
                                            Create Event
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
                                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 px-7 py-5 flex items-center">
                                    <div class="w-full">
                                        <div>
                                            <p>Name</p>
                                        </div>
                                        <div>
                                            <span>Username | Catch Phrase</span>
                                        </div>
                                    </div>
                                    <div class="w-full float-right flex justify-end">
                                        <div>
                                            <div>
                                                <p>Address</p>
                                            </div>
                                            <div>
                                                <span>Email | Phone</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}