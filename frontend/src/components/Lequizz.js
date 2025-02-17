import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Card, Container, Badge, Button} from 'react-bootstrap'
import { Link, } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from './Message'
import Loader from './Loader'
import { deleteQuizz, startQuizz, stopQuizz } from '../actions/quizzActions'


const Lequizz = ( { lequizz, history } ) => {

    const  dispatch = useDispatch()


    const quizzDelete = useSelector(state => state.quizzDelete)
    const { loading, error} = quizzDelete

    const quizzStart = useSelector(state => state.quizzStart)
    const { loading: loadingStart, error: errorStart} = quizzStart

    const quizzStop = useSelector(state => state.quizzStop)
    const { loading: loadingStop, error: errorStop} = quizzStop

    const deleteHandler = (id) => {
      if( window.confirm('Are you sure ? ')) {
        dispatch(deleteQuizz(id))
      }
    }

    const startQuizzHandler = (id) => {
            dispatch(startQuizz(id))
    }

    const stopQuizzHandler = (id) => {
        dispatch(stopQuizz(id))
    }

    return (
        <Container>
        {loading || loadingStart || loadingStop ? <Loader /> : error || errorStart || errorStop ? <Message varaint='danger'>{error}</Message> : (
        <Card className='card border-secondary mt-3 mb-3 p-3 ' style={{height: '500px'}}>
            <Link to={`/admin/myquizz/${lequizz._id}`}>
                <Card.Img style={{height: '9rem' }} 
                className='card border-light'
                src={lequizz.imageQuizz} variant='top' />
            </Link>
            <Card.Body className='text-center'>
                <Card.Title as='div'  />
                <h3 style={{color: '#21662F'}}> <strong > {lequizz.nomQuizz.toUpperCase()} </strong>
                </h3>
                {lequizz.activation==='encours' ? 
                <Badge pill className="bg-success" text="dark">
                    En Cours
                </Badge> : (
                lequizz.activation==='finis' ? 
                <Badge pill className="bg-danger" text="dark">
                    Finis
                </Badge> :
                <Badge pill className="bg-warning" text="dark">
                    Non Commencé
                </Badge>)
            }            
            </Card.Body>   
            <Card.Text as='div' >
                <div className='my-3'  >
                {lequizz.descriptionQuizz.length > 39 ?
                    (
                    <div>
                        {`${lequizz.descriptionQuizz.substring(0, 39)}...`}
                    </div>
                    ) :
                    <p>{lequizz.descriptionQuizz}</p> }
                </div>    
            </Card.Text>  
            <Card.Text as='h6' className='mb-3 card-text'>
                Code Quizz : {lequizz.codeQuizz}
            </Card.Text>  
            <Card.Text className='card-text text-center '>
            {lequizz.activation==='encours' ? 
            <button  className="btn btn-outline-danger"
            onClick = {() => stopQuizzHandler({id: lequizz._id})} > 
                Arrêter 
            </button> : (
            lequizz.activation==='finis' ? 
            <Link to= {`/admin/myquizz/${lequizz._id}/results`}>
            <button className="btn btn-outline-warning"  > 
                Voir Résultats
            </button>
            </Link> :
            <button  className="btn btn-outline-success" 
            onClick = {() => startQuizzHandler({id: lequizz._id})}>
                Lancer
            </button>)
            }
            </Card.Text>     
            <Card.Text className='card-text text-center p-1'>
            <Link to={`/admin/myquizz/${lequizz._id}`}>
            <Button id='view'
                variant='btn-sm btn-outline-info m-1' 
                className='btn-sm btn-sm btn-outline-info'>
                <i className='fas fa-eye'></i>
            </Button>
            </Link>
            <LinkContainer to ={`myquizz/${lequizz._id}/edit`}>
            <Button disabled={lequizz.activation==='encours' || lequizz.activation==='finis'} 
                variant='btn-sm btn-outline-dark m-1' 
                className='btn-sm btn-sm btn-outline-dark' >
                <i className='fas fa-edit'></i>
            </Button>
            </LinkContainer>
            <Button disabled={lequizz.activation==='encours' } 
                variant='btn-sm btn-outline-danger m-1' 
                className='btn-sm btn-sm btn-outline-danger'
            onClick = {() => deleteHandler(lequizz._id)}>
                <i className='fas fa-trash'></i>
            </Button>
            </Card.Text> 
        </Card>
         )}     
        </Container>
    )
}

export default Lequizz
