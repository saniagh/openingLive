import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

var CreateProductComponent = React.createClass({
    getInitialState: function () {
        return {
            categories: [],
            selectedCategoryId: -1,
            name: '',
            description: '',
            price: '',
            successCreation: null,
            link: '',
            photo: '',
            yt_link: '',
        };
    },
    componentDidMount: function () {
        this.serverRequest = $.get("api/read_all_categories.php", function (categories) {
            this.setState({
                categories: JSON.parse(categories)
            });
        }.bind(this));

        $('.page-header h1').text('Create product');
    },
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },
    // handle category change
    onCategoryChange: function (e) {
        this.setState({selectedCategoryId: e.target.value});
    },

// handle name change
    onNameChange: function (e) {
        this.setState({name: e.target.value});
    },

// handle description change
    onDescriptionChange: function (e) {
        this.setState({description: e.target.value});
    },

// handle price change
    onPriceChange: function (e) {
        this.setState({price: e.target.value});
    },

    onLinkChange: function (e) {
        this.setState({link: e.target.value});
    },

    onPhotoChange: function (e) {
        this.setState({photo: e.target.value});
    },

    onYTChange: function (e) {
        this.setState({yt_link: e.target.value})
    },

    onSave: function (e) {
        $.post("api/create_product.php", {
                name: this.state.name,
                description: this.state.description,
                price: this.state.price,
                category_id: this.state.selectedCategoryId,
                link: this.state.link,
                photo: this.state.photo,
                yt_link: this.state.yt_link,
            },
            function (res) {
                this.setState({successCreation: res});
                this.setState({name: ""});
                this.setState({description: ""});
                this.setState({price: ""});
                this.setState({selectedCategoryId: -1});
                this.setState({link: ""});
                this.setState({photo: ""});
                this.setState({yt_link: ""})
            }.bind(this)
        );
        e.preventDefault();
    },
    render: function () {

        // make categories as option for the select tag.
        var categoriesOptions = this.state.categories.map(function (category) {
            return (
                <option key={category.id} value={category.id}>{category.name}</option>
            );
        });

        /*
         - tell the user if a product was created
         - tell the user if unable to create product
         - button to go back to products list
         - form to create a product
         */
        return (
            <div>
                {

                    this.state.successCreation == "true" ?
                        <div className='alert alert-success'>
                            Jocul a fost salvat. Te rugam sa reincarci pagina pentru a putea vedea rezultatele.
                        </div>
                        : null
                }

                {

                    this.state.successCreation == "false" ?
                        <div className='alert alert-danger'>
                            Jocul nu a putut fi salvat. Te rugam sa incerci din nou.
                        </div>
                        : null
                }
                <Link to="/content.php"
                      className="btn btn-primary margin-bottom-1em"
                      onClick={() => this.props.changeAppMode('readOne', this.props.productId)}
                >
                    Reincarca pagina
                </Link>


                <form onSubmit={this.onSave}>
                    <table className='table'>
                        <tbody>
                        <tr>
                            <td>Numele jocului</td>
                            <td>
                                <input
                                    type='text'
                                    className='form-control'
                                    value={this.state.name}
                                    required
                                    onChange={this.onNameChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td>Descriere</td>
                            <td>
                        <textarea
                            type='text'
                            className='form-control'
                            required
                            cols="25"
                            rows="10"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}>
                        </textarea>
                            </td>
                        </tr>

                        <tr>
                            <td>Pret</td>
                            <td>
                                <input
                                    type='number'
                                    step="0.01"
                                    className='form-control'
                                    value={this.state.price}
                                    required
                                    onChange={this.onPriceChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td>Demo link</td>
                            <td>
                                <input
                                    type="text"
                                    className='form-control'
                                    value={this.state.link}
                                    required
                                    onChange={this.onLinkChange}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Genul jocului</td>
                            <td>
                                <select
                                    onChange={this.onCategoryChange}
                                    className='form-control'
                                    value={this.state.selectedCategoryId}>
                                    <option value="-1">Selecteaza genul jocului...</option>
                                    {categoriesOptions}
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>Poza de coperta</td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.photo}
                                    required
                                    onChange={this.onPhotoChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td>Link spre trailer Youtube ( Citeste Despre Noi )</td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.yt_link}
                                    required
                                    onChange={this.onYTChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td></td>
                            <td>
                                <Link to="/content.php"
                                      className='btn btn-primary'
                                      onClick={this.onSave}>Salveaza
                                </Link>
                                <Link to="/content.php"
                                      className="btn btn-danger"
                                      onClick={() => this.props.changeAppMode('readOne', this.props.productId)}
                                >
                                    Anuleaza
                                </Link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
});

export default CreateProductComponent