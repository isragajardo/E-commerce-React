import data from "../data/data.json"



export const NeedData =()=>{

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(data);
        }, 500);
        
    })

}

export const pedirItemPorId =(id)=>{

    return new Promise((resolve, reject) => {

        const item = data.find((prod)=> prod.id===id)

        if(item){
            resolve(item)
        }else{
            reject({
                error:"no se encontro el producto"
            })
        }
        
    })

}