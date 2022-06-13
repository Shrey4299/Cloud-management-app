import React from 'react'

const Service = () => {
  return (
    <div>
        <div className=" text-center justify-center items-center ">
            <h2 className="font-bold text-3xl">Every step to online success</h2>
            <p className="text-zinc-500">Bring your website to life, and help it thrive</p>
        </div>
        <div className="flex ">
            <div className="w-2/4 p-40 pt-20">
                <img className="" src="pc.png" alt="no image" />
            </div>
           
            <div className="text-center mt-12  w-2/4 p-40">
                <h2 className="font-bold p-5">Buy a domain</h2>
                <p className="mb-2">Register a domain name and create your online identity. Use our advanced domain name generator to get your ideal choice right away. Already have a domain registered somewhere else? No problem</p>
                <button className="p-2">Discover All</button>
            </div>
        </div>
    </div>
  )
}

export default Service