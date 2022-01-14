import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const ArrayOfBooks = [
  {
    image : "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL200_SR200,200_.jpg",
    title : "The Psychology of Money",
    author : "Morgen Housel",
    cover : "Paperback",
    price : "₹269.00"
  },
  {
    image : "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL200_SR200,200_.jpg",
    title : "Atomic Habits",
    author : "James Clear",
    cover : "Paperback",
    price : "₹482.00"
  },
  {
    image : "https://images-eu.ssl-images-amazon.com/images/I/41%2BgrDTP2FL._AC_UL200_SR200,200_.jpg",
    title : "DO EPIC SHIT",
    author : "Ankur Warikoo",
    cover : "Hardcover",
    price : "₹279.00"
  },
  {
    image : "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
    title : "Ikigai",
    author : "Hector Garcia",
    cover : "Hardcover",
    price : "₹160.00"
  },
  {
    image : "https://images-eu.ssl-images-amazon.com/images/I/818e%2Bfq7%2BBL._AC_UL200_SR200,200_.jpg",
    title : "Word Power Made Easy",
    author : "Norman Lewis",
    cover : "Paperback",
    price : "₹92.00"
  },
  {
    image : "https://images-eu.ssl-images-amazon.com/images/I/711c-uf6AFL._AC_UL200_SR200,200_.jpg",
    title : "My First Library",
    author : "Wonder House Books",
    cover : "Broad book",
    price : "₹349.00"
  }
]

const Book = (props) =>{
  const {image,title,author,cover,price} = props;
  return(
    < section className="BookName">
      <img src ={image} alt=""/>
      <h4>{title }</h4>
      <h4>{author}</h4>
      <h4>{cover}</h4>
      <h4>{price}</h4>
    </section>
  )
}

function BookList(){
  return(
    <>
    {
      ArrayOfBooks.map((book, index)=>{
        return <Book key = {index} {...book}/>
      })
    }
    </>
  )
}

ReactDOM.render(<BookList/>,document.getElementById('root'));
