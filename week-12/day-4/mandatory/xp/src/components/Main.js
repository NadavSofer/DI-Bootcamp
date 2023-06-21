import { useContext, useState } from 'react'
import { AppContext } from '../App'
const Main = props => {
    const { search, setSearch } = useContext(AppContext)

    const fetchData = (e) => {
        e.preventDefault()
        const api_key = 'Hhb2N0ryr2wnaDmYLMJVlnM5HzcuGfIV7x4YnABuyLyn1LPxMu3uj9lM'
        fetch(`https://api.pexels.com/v1/search?query=${e.target.input.value}&per_page=21`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: api_key
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setSearch(data.photos || ['thing'])
                console.log(search);
            })
            .catch((error) => {
                console.error('Error fetching API:', error);
            });
        console.log(search);
    }

    return (
        <div>
            <form onSubmit={fetchData} style={{ width: '30vw', margin: 'auto'}}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </div>
                    <input
                        name="input"
                        type="search"
                        id="default-search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search"
                        required
                    />
                    <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </form>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                <div className="-m-1 flex flex-wrap md:-m-2">

                            {search.map((item, i) => {
                                return (
                                    <div className="flex w-1/3 flex-wrap">
                                        <div className="w-full p-1 md:p-2">
                                            <img
                                                key={i}
                                                src={item.src.large}
                                                alt="gallery"
                                                className="block h-full w-full rounded-lg object-cover object-center"/>
                                        </div>
                                    </div>
                                );
                    })}
                </div>
            </div>
        </div>
    );

}


export default Main