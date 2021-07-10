import React, { useEffect } from 'react'
import { Card, Button, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'



const Question = ( { ques } ) => {


    return (
        <>

            <Card className='card border-dark mt-3 mb-3 p-3 text-white'>
            <Card.Body className='text-center p-1'>
                <Card.Title as='div'  />
                <div style={{ textAlign: 'right'}}> 
                <h4 className='text-center'> <strong className='text-light'>Titre Question : {ques.titreQuestion} </strong></h4>   
                <Button variant='light' className='btn-sm' style={{ textAlign: 'right'}}><i className='fas fa-edit'></i></Button>
                <Button variant='danger' className='btn-sm'> <i className='fas fa-trash'></i></Button>
                </div>        
            </Card.Body>   
            <Card.Text as='div' >
            <strong  className='text-info'>Type Question : </strong> {ques.typeQuestion}
            </Card.Text>  
            <Card.Text as='div' >
                <strong  className='text-info'>Choix Disponible : </strong>
                    { ques.choixQuestion.map(q => (
                   <> {q} / </> 
                    ))}
            </Card.Text> 
            <Card.Text as='div' >
            <strong  className='text-info'>Le(s) Réponse(s) : </strong>
                { ques.reponseQuestion.map(q => (
                   <> {q} / </> 
                    ))}
            </Card.Text>  
            <Card.Text as='div' >
            <strong  className='text-info'> Temps De Réponse : </strong> {ques.tempsQuestion}
            </Card.Text>  
        </Card> 

        </>
    )
}

export default Question
