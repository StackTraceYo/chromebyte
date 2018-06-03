import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Selector extends Component {

    state = {
        selectedOptionFrom: 'Byte',
        selectedOptionTo: 'GigaByte',
    };

    handleChangeFrom = (selectedOption) => {
        this.setState({ selectedOptionFrom : selectedOption.value });
    };

    handleChangeTo = (selectedOption) => {
        this.setState({ selectedOptionTo : selectedOption.value });
    };

    render() {

        const { selectedOptionFrom } = this.state.selectedOptionFrom;
        const { selectedOptionTo } = this.state.selectedOptionTo;

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
                    name="select-from"
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