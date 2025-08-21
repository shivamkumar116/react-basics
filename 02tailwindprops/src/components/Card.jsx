function Card({btnText = "Default", myObject= {}}){



    return (<>
    
    <h2 className="text-white">Hello {myObject.id}</h2>
    <button className="bg-lime-500 p-2 rounded text-black m-2   ">{btnText}</button>
    
    </>)
}

export default Card;