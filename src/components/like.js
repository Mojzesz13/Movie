import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons'



class Like extends Component {
    state = {
        likeList: ["test", "test", "test1",],
        click: true,
        style: {color: "red", transform:"rotate-10" }
    }

    handleOnLike = () => {

        if(this.state.click === true) {
            this.setState({style: {color: "blue", transform: "rotate-50 grow-8"}});
            this.setState({click: false});
            const list = this.props.movies;
            list.filter(c => c._id !== this.props.movies._id);
            this.setState({likeList: list})
            console.log(this.state.likeList);

        }else{
            this.setState({style: {color: "red", transform: "rotate-10"}});
            this.setState({click: true});
        }



    }

    render() {
        return (
            <div className="radio">
                    <div className="radio">
                        <label>

                            <FontAwesomeIcon icon={faHeart} onClick={this.handleOnLike}  transform={this.state.style.transform} color={this.state.style.color}/>

                            <p>{this.props.movies[0].title}</p>

                        </label>
                    </div>
            </div>
        );
    }
}

export default Like;