import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Button, FormGroup, FormControl, Radio } from 'react-bootstrap';
import saveOrderField from '../../actions/saveOrderField';

class OrdersItem extends Component {
    static propTypes = {
        item: PropTypes.shape({}).isRequired,
        i: PropTypes.number.isRequired
    }

    state = {
        isEditing: false,
        createDate: '',
        manager: 'manager2',
        type: 'розница',
        customer: '',
        provider: '',
        completeDate: ''
    }

    componentWillMount() {
        const { item } = this.props;

        this.setState({
            createDate: item.createDate,
            manager: item.manager,
            type: item.type,
            customer: item.customer,
            provider: item.provider,
            completeDate: item.completeDate
        });
    }

    onEdit = () => {
        this.setState({ isEditing: true });
    }

    onSave = () => {
        const { createDate, manager, type, customer, provider, completeDate } = this.state;
        const { item } = this.props;
        const data = {
            id: item.id,
            createDate,
            manager,
            type,
            customer,
            provider,
            completeDate
        };

        this.props.saveOrderField(data);

        this.setState({ isEditing: false });
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { isEditing, createDate, manager, type, customer, provider, completeDate } = this.state;
        const { item, i } = this.props;

        return (
            <tr>
                <td>{i + 1}</td>
                <td>
                    {isEditing ? (
                        <FormGroup controlId="formCreateDate">
                            <FormControl
                                type="date"
                                name="createDate"
                                value={createDate}
                                onChange={this.onInputChange}
                            />
                        </FormGroup>
                    ) : (
                        <div>
                            {item.createDate}
                        </div>
                    )}
                </td>
                <td>
                    {isEditing ? (
                        <FormGroup controlId="formControlsSelect">
                            <FormControl
                                componentClass="select"
                                placeholder="select"
                                name="manager"
                                value={manager}
                                onChange={this.onInputChange}
                            >
                                <option value="manager1">Manager 1</option>
                                <option value="manager2">Manager 2</option>
                            </FormControl>
                        </FormGroup>
                    ) : (
                        <div>
                            {item.manager}
                        </div>
                    )}
                </td>
                <td>
                    {isEditing ? (
                        <FormGroup>
                            <Radio
                                name="type"
                                inline
                                onChange={this.onInputChange}
                                checked={type === 'опт'}
                                value="опт"
                            >
                                Опт
                            </Radio>{' '}
                            <Radio
                                name="type"
                                inline
                                onChange={this.onInputChange}
                                checked={type === 'розница'}
                                value="розница"
                            >
                                Розница
                            </Radio>{' '}
                        </FormGroup>
                    ) : (
                        <div>
                            {item.type}
                        </div>
                    )}
                </td>
                <td>
                    {isEditing ? (
                        <FormGroup controlId="formCreateDate">
                            <FormControl
                                type="text"
                                name="customer"
                                value={customer}
                                onChange={this.onInputChange}
                            />
                        </FormGroup>
                    ) : (
                        <div>
                            {item.customer}
                        </div>
                    )}
                </td>
                <td>
                    {isEditing ? (
                        <FormGroup controlId="formCreateDate">
                            <FormControl
                                type="text"
                                name="provider"
                                value={provider}
                                onChange={this.onInputChange}
                            />
                        </FormGroup>
                    ) : (
                        <div>
                            {item.provider}
                        </div>
                    )}
                </td>
                <td>
                    {isEditing ? (
                        <FormGroup controlId="formCompleteDate">
                            <FormControl
                                type="date"
                                name="completeDate"
                                value={completeDate}
                                onChange={this.onInputChange}
                            />
                        </FormGroup>
                    ) : (
                        <div>
                            {item.completeDate}
                        </div>
                    )}
                </td>
                <td>
                    {isEditing ? (
                        <Button onClick={this.onSave}>
                            Сохранить
                        </Button>
                    ) : (
                        <Button
                            onClick={this.onEdit}
                            disabled={moment(item.completeDate).subtract(3, 'days').isBefore(moment())}
                        >
                            Изменить
                        </Button>
                    )}

                </td>
            </tr>
        );
    }
}

const mapStateToProps = state => ({
    ordersList: state.ordersList
});

export default connect(mapStateToProps, { saveOrderField })(OrdersItem);
