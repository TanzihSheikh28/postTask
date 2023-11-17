import React from "react";
import "./UserComponentStyle.css";

export default function UserLists() {
    return (
        <>
            <div className="flex items-center justify-center p-12">
                <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-10 border border-gray-300">
                    <div className="text-center">
                        <div>
                            <p className="text-24 font-semibold">
                                Directory
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-center mt-5">
                        <div className="col-span-12">
                            <div className="mt-4 hidden lg:block">
                                <ul className="responsive-table">
                                    <li
                                        className="table-row alternate-bg space-x-5 border rounded-10 mb-3 h-[70px] items-center">
                                        <a href="/" className="w-full flex items-center">
                                            <div className="col col-1 text-16 font-normal">
                                                <span>Name:</span>
                                                <span>&nbsp;Person 1</span>
                                            </div>
                                            <div className="col col-2 text-16 font-normal text-end">
                                                <span>Post: 12</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li
                                        className="table-row alternate-bg space-x-5 border rounded-10 mb-3 h-[70px] items-center">
                                        <div className="col col-1 text-16 font-normal">
                                            <span>Name:</span>
                                            <span>&nbsp;Person 1</span>
                                        </div>
                                        <div className="col col-2 text-16 font-normal text-end">
                                            <span>Post: 12</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="block lg:hidden mt-7">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="w-full border bg-white rounded-lg p-4 items-center">
                                        <div>
                                            <div className="flex gap-3 items-center">
                                            </div>
                                            <div className="text-lg font-normal mt-2 truncate"></div>
                                        </div>
                                        <div className="mt-4">
                                            <div className="grid grid-cols-2 md:grid-cols-2 flex justify-between items-center">
                                                <div className="">
                                                </div>
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