const { json } = require('express')
const db = require('../db')

class apiController{

async getContacts (req, res){
    try{
       db.query('SELECT * FROM contacts', (err, results) =>{
        if(err){
            console.log(err)
        }
        else{
            res.send(results.rows.reverse())
        }
       })
    }catch(e){
     
    }
} 
async addContact (req, res){
    try{
      
        const name = req.body.name
        const phone = req.body.phone
        const color = req.body.color
       
        const sql = "INSERT INTO contacts (name, phone, color) VALUES($1,$2,$3)"
        await db.query(sql, [name, phone,color], (err, results) =>{
            if(err){
                console.log(err)
            }
            else {
                
                res.send(JSON.stringify("Контакт был добавлен"))
            }
        })
   
    } catch(e){
        
    }
    
}
async updateContact (req, res){
    try{
        const contact_id = req.body.contact_id
        const name = req.body.name
        const phone = req.body.phone

        console.log(contact_id, name, phone)
        db.query("UPDATE contacts SET name=$1, phone=$2 WHERE Id=$3", [name, phone, contact_id], (err, results)=>{
            if(err){
                console.log(err)
            }
            else(

                res.send(JSON.stringify("Контакт был изменен"))
            )
        })
    } catch(e){
        
    }
    
}
async deleteContact (req, res){
    try{
     const contact_id = req.body.contact_id
   
     db.query("DELETE FROM contacts WHERE Id=$1", [contact_id], (err, results)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(JSON.stringify("Контакт был удален"))
        }
     })
   
    } catch(e){   
    }
}

}


module.exports = new apiController()
