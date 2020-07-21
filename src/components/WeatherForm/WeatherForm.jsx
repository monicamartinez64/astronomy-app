import React, { Component } from 'react';

class WeatherForm extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            country: ''
        }

    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleGetWeatherData(this.state.formData);
      };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <div>
                <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit} >
                    <div className="row">
                        <div className="input-field col s3">
                            <input name="city" id="city" type="text" className="active" value={this.state.formData.city} onChange={this.handleChange} required />
                            <label htmlFor="city">City</label>
                        </div>
                        <div className="input-field col s3">
                            <input name="country" id="country" type="text" className="active" value={this.state.formData.country} onChange={this.handleChange} required />
                            <label htmlFor="country">Country</label>
                        </div>
                        <button
                            type="submit"
                            className="btn purple"
                            disabled={this.state.invalidForm}
                        ><i className="material-icons left">search</i>
                            Get Weather
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default WeatherForm;