import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Row,
    Col,
    FormGroup,
    FormControl,
    ControlLabel,
    Button,
    Radio
} from 'react-bootstrap';
import addOrderField from '../../actions/addOrderField';

class NewOrder extends Component {
    static propTypes = {
        ordersList: PropTypes.arrayOf(PropTypes.object).isRequired,
        addOrderField: PropTypes.func.isRequired
    }

    state = {
        createDate: '',
        manager: 'manager2',
        type: 'розница',
        customer: '',
        provider: '',
        completeDate: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { createDate, manager, type, customer, provider, completeDate } = this.state;
        const { ordersList } = this.props;

        const id = `${type[0]}-${createDate.slice(2, 4)}${createDate.slice(5, 7)}${createDate.slice(8, 10)}${ordersList.length}`;

        const data = {
            id,
            createDate,
            manager,
            type,
            customer,
            provider,
            completeDate
        };

        this.props.addOrderField(data);
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { createDate, manager, type, customer, provider, completeDate } = this.state;

        return (
            <Row>
                <Col xs={6} xsOffset={3}>
                    <Link to="/">
                        <Button bsStyle="primary" className="button-to-main">
                            На главную
                        </Button>
                    </Link>

                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="formCreateDate">
                            <ControlLabel>Дата создания заказа</ControlLabel>
                            <FormControl
                                type="date"
                                name="createDate"
                                value={createDate}
                                onChange={this.onInputChange}
                            />
                        </FormGroup>

                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Менеджер</ControlLabel>
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

                        <FormGroup controlId="formCreateDate">
                            <ControlLabel>Заказчик</ControlLabel>
                            <FormControl
                                type="text"
                                name="customer"
                                value={customer}
                                onChange={this.onInputChange}
                            />
                        </FormGroup>

                        <FormGroup controlId="formCreateDate">
                            <ControlLabel>Поставщик</ControlLabel>
                            <FormControl
                                type="text"
                                name="provider"
                                value={provider}
                                onChange={this.onInputChange}
                            />
                        </FormGroup>

                        <FormGroup controlId="formCompleteDate">
                            <ControlLabel>Дата выполнения заказа</ControlLabel>
                            <FormControl
                                type="date"
                                name="completeDate"
                                value={completeDate}
                                onChange={this.onInputChange}
                            />
                        </FormGroup>

                        <Button type="submit">Добавить</Button>
                    </form>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => ({
    ordersList: state.ordersList
});

const mapDispatchToProps = {
  addOrderField
}


export default connect(mapStateToProps, mapDispatchToProps)(NewOrder);
