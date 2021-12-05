import React from 'react'
import { connect } from 'react-redux';
import { removeReview } from '../../actions/index'
import { removeRestaurant } from '../../actions/index'
import { updateReview } from '../../actions/index'
import { Button } from '@material-ui/core';
import MyRestaurant from './MyRestaurant.js'
import userImage from '../../assets/user_large_square.png'
import Login from './login'
import UserReview from './UserReview'
import Modal from './Modal'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../styles/profile.css'
import FavoriteIcon from '@material-ui/icons/Favorite';

function mapDispatchToProps(dispatch) {
    return {
      removeRestaurant: restaurant => dispatch(removeRestaurant(restaurant)),
      removeReview: review => dispatch(removeReview(review)),
      updateReview: review => dispatch(updateReview(review))
    };
}


class Profile extends React.Component {

    

    constructor(props) {

    
        super(props);
        
        this.state = {
        currentPage:'/profil',
        restaurants: [],
        reviews: [],
        currentReview: '',
        showLogin:'',
        users: [],
        commentaires:[],
        favoris: [],
        idUtilisateur: '',
        idFavori: ''
    }
}
    closeLogin = () => {
        this.setState({
            showLogin:false
        })
    }

    componentDidMount() {
       
        this.setState({
            restaurants: this.props.savedRestaurants,
            reviews: this.props.reviews,
            showLogin: false,
            
        })
  
        fetch('http://localhost:8000/api/auth/user-profile',{
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    'Authorization' : 'Bearer ' + localStorage.getItem('token'),
                }
        })
        .then(res =>res.json())
        .then(res => {
            const users = res
            this.setState({users})
            console.log(users)

            axios.get(`http://localhost:8000/api/commentaire/${this.state.users.idUtilisateur}`)
            .then(res => {
              const commentaires = res.data;
             this.setState({ commentaires });
             console.log(commentaires)
            })

            axios.get(`http://localhost:8000/api/commentaires/users/${this.state.users.idUtilisateur}`)
            .then(res => {
            const count = res.data;
            this.setState({ count });
            //console.log(count)
            })

            fetch(`http://localhost:8000/api/favoris/${this.state.users.idUtilisateur}`  ,{
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
            })
            .then(res =>res.json())
            .then(res => {
                const favoris = res
                this.setState({ favoris})
                console.log(favoris)
             
            })

        }) 
        
    }
   
    handleRemoveFavoris (idFavori){
       
        //e.preventDefault();
         fetch(`http://localhost:8000/api/favoris/${idFavori}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }
            })
            .then(res =>res.json())
            
         
        
        }
  
    

    showModal = (currentReview) => {
        document.querySelector('.modal-wrapper').style.display = "flex";
        this.setState({
            currentReview: currentReview
        })
    }

    updateReview = (review, modalState) => {
        this.setState({
            currentReview: review
        })
        this.props.updateReview({
            review: review,
            modalState: modalState
        })
        this.setState({
            reviews: this.props.reviews
        })
        document.querySelector('.modal-wrapper').style.display = "none"
    }

    removeRestaurant = (restaurant) => {
        this.props.removeRestaurant({ 
            restaurant: restaurant,
        });
        this.setState({
            restaurants: this.props.savedRestaurants
        })
    }

    isActiveTab(tabName) {
    return (tabName === this.state.currentPage) ? 'nav-link active' : 'nav-link';
    }

    onTabClick(event, tabName) {
    this.setState({ currentPage: tabName })
    }

    removeReview = review => {
        this.props.removeReview({ 
            review: review,
        });
        this.setState({
            reviews: this.props.reviews
        })
    }

    
   

    render() {
        const imageResto = {
            width: 220,
            height: 180,
            position: "absolute",
        }

        let favoritedRestaurants = this.state.restaurants.map(restaurant => {
            return(
                <MyRestaurant
                    key={restaurant.id}
                    id={restaurant.id}
                    restaurant={restaurant.restaurant}
                    title={restaurant.restaurant.name}
                    image={restaurant.restaurant.image_url}
                    rating={restaurant.restaurant.rating}
                    categories={restaurant.restaurant.categories}
                    location={restaurant.restaurant.location}
                    price={restaurant.restaurant.price}
                    onRemoveRestaurant={this.removeRestaurant}
                >
                </MyRestaurant>
            )
            })    
            
        
        let myReviews = this.state.reviews.map(review => {
            return(
                <UserReview
                    key={review.id}
                    name={review.name}
                    text={review.text}
                    rating={review.rating}
                    image={review.user.image_url}
                    date={review.time_created}
                    removeReview={this.removeReview}
                    review={review}
                    showModal={this.showModal}
                ></UserReview>
            )
        })

    
        return(
            <>
                <div className="profile-container">
                    <div className="header-wrapper">
                        <div className="header-image-wrapper">
                            <img src={userImage} className="header-image"></img>
                        </div>
                        <div className="header-content-wrapper">
                            <div className="nav-title"> 
                            
                            </div>
                            <h1 className="header-title">Bienvenue { this.state.users.prenom} </h1>
                            <h1 className="header-title">Critique culinaire</h1>
                            <div className="review-favorite-count">
                                <h3 className="user-review-count">Commentaires ({this.state.count})</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className="reviews-favorites-wrapper">
                        <div className="favorites-container profile-column">
                            <h1 className="my-restaurants-title">Restaurants sauvegardés</h1>
                                { this.state.favoris.map(favoris => 
                                    <div className="card" key={favoris.idFavori} style={{ width: '22rem' }}>
                                        <img style={{imageResto}} className="card-img-top" src={favoris.imageRestaurant} />
                                        <div className="card-body">
                                <label>Restaurant:</label>     {favoris.nomRestaurant } <br></br>
                                <label>Téléphone:</label> {favoris.phoneRestaurant}<br></br>
                                <label>Prix:</label> {favoris.prixRestaurant}<br></br>
                                <label>Note:</label> {favoris.ratingRestaurant}/5<br></br>

                                    <FavoriteIcon className="phone-icon favorite-icon-restaurant-details" onClick={() => this.handleRemoveFavoris(favoris.idFavori)}></FavoriteIcon>
                                   
                                    </div>
                               </div>
                                )}
                        </div>
                        <div className="favorites-container profile-column">
                        <h1 className="my-reviews-title">Commentaires</h1>
                        { this.state.commentaires.map(commentaire => 
                        <div className="card" key={commentaire.idCommentaire} style={{ width: '22rem' }}>
                             <div className="card-body">
                            <img style={{imageResto}} className="card-img-top" src={commentaire.imageRestaurant} />
                            <label>Contenu:</label> {commentaire.contenu}   <br></br>
                     <label>Restaurant:</label> {commentaire.nomRestaurant} <br></br>
                        </div>
                        </div>
                        )}
             
  
                        </div>
                    </div>
                <Modal currentReview={this.state.currentReview} updateReview={this.updateReview}></Modal>
                </div>
            </>
        )
    }
}

export default connect(null, mapDispatchToProps)(Profile)