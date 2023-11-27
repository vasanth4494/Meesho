import React from 'react'

function Products() {
    const style = {
        left:{
            width:'20%',
            height:'800px',
            border:'1px solid black'
        },
        right:{
            width:'80%',
            height:'800px',
            border:'1px solid black'
        }
    }
    return (
        <div style={{display:'flex', margin:"80px",marginTop:"150px"}}>

            <div style={style.left} className='left-1'>

            </div>
            <div style={style.right} className='right-1'>

            </div>
            
        </div>
    )
}

export default Products
