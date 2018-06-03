import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Selector extends Component {

    state = {
        selectedOptionFrom: { value: 'Byte', label: 'Byte' },
        selectedOptionTo: { value: 'Byte', label: 'Byte' }
    };

    handleChangeFrom = (selectedOption) => {
        this.setState({ ...this.state, selectedOptionFrom : selectedOption});
    };

    handleChangeTo = (selectedOption) => {
        this.setState({ ...this.state, selectedOptionTo : selectedOption});
    };

    render() {

        const { selectedOptionFrom } = this.state;
        const { selectedOptionTo } = this.state;
   

        return (
            <div>
                Select Conversion From
                <Select
                    name="select-from"
                    isSearchable={true}
                    value={selectedOptionFrom}
                    onChange={this.handleChangeFrom}
                    options={[
                        { value: 'Byte', label: 'Byte' },
                        { value: 'GigaByte', label: 'GigaByte' },
                    ]}
                />

                To
                <Select
                    name="select-to"
                    isSearchable={true}
                    value={selectedOptionTo}
                    onChange={this.handleChangeTo}
                    options={[
                        { value: 'Byte', label: 'Byte' },
                        { value: 'GigaByte', label: 'GigaByte' },
                    ]}
                />
            </div>
        );
    }
}

export default Selector;