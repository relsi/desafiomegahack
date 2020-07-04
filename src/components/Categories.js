import React, {Component } from 'react'
import axios from 'axios';

class Categories extends Component {

    state = {
        categories: []
    }

    componentDidMount() {
        axios.get(`https://api.mercadolibre.com/sites/MLB/categories`)
        .then(res => {
            const categories = res.data;
            this.setState({ categories });
        })
    }

    render() {
        return (
            <ul>
                {this.state.categories.map(category => 
                   <a href="#" key={category.id} onClick={()=>alert(category.id)}>
                    <li>{category.name}</li>
                   </a>
                   )
                }
            </ul>
        )
    }
}
export default Categories;