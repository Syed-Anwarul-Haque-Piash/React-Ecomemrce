import React, { useState } from "react";
import "../App.css";
import Catagory from "./Catagory";
const Categories = () => {
    const[data,setData]=useState(Catagory);
    const filterResult=(catItem)=>{
         const Result=Catagory.filter((curData)=>{
            return curData.catagory===catItem;
         })
         setData(Result);
    }
  return (
    <div>
      <h1 className="text-center text-info">Lets Shop</h1>
      <div className="container-fluid mx-3">
        <div className="row mt-5 mx-2">
          <div className="col-md-3 mx-2">
            <button className="btn btn-warning  button" onClick={()=>filterResult("Samsung")}>Samsung</button>
            <button className="btn btn-warning  button" onClick={()=>filterResult("Apple")}>Apple</button>
            <button className="btn btn-warning  button" onClick={()=>filterResult("Sony")}>Sony</button>
            <button className="btn btn-warning  button" onClick={()=>filterResult("Xiaomi")}>Xiaomi</button>
            <button className="btn btn-warning  button" onClick={()=>filterResult("Realme")}>Realme</button>
            <button className="btn btn-warning  button" onClick={()=>filterResult("OnePlus")}>OnePlus</button>
          </div>
          <div className="col-md-9">
            <div className="row">

                {data.map((values)=>{
                    const{id,title,price,img}=values;
                    return(
                        <>
                        <div className="col-md-4" key={id}>
                <div class="card" >
                  <img src={img}className="card-img-top" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h2>Price:{price}</h2>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
                        </>
                    )
                })}

              

              

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
