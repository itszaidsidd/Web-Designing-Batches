import React from 'react'
import Card from './Card'

const Cards = () => {
// let data=['Zaid','Sameer','Ertugrul','Ayan','Subhan']

    let data=[
        {
            name:"Subhan",
            course:"BCA",
            address:"MZN"
        },
        
        {
            name:"Ayan",
            course:"BCA",
            address:"MRT"
        },
        {
            name:"Javed",
            course:"MCA",
            address:"HLD"
        },
        {
            name:"Sumeer",
            course:"MSC",
            address:"DDN"
        },
        {
            name:"Kaif",
            course:"B.Com",
            address:"Delhi"
        }

    ]

  return (
    <div className='cards'>
        {/* <Card name={data[0]} />
        <Card name={data[1]} />
        <Card name={data[2]} /> */}

        {/* {
            data.map((ayan,i)=>{
                return(
                    <Card name={ayan} course={i} />
                )
            })
        } */}

        {
            data.map((value,ind)=>{
                return(
                    <Card name={value.name} course={value.course} address={value.address} index={ind} />
                )
            })
        }


      {/* <Card name="Subhan" course="BCA" address="MZN" />
      <Card name="Ayan" course="B.Tech" address="MRT" />
      <Card name="Javed" course="B.Sc" address="DDN" /> */}
    </div>
  )
}

export default Cards
