import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OrdersItem from './OrdersItem';

class Orders extends Component {
    static propTypes = {
        ordersList: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render() {
        const { ordersList } = this.props;

        return (
            <Row className="table-container">
                <Col xs={12}>
                    <Link to="/">
                        <Button bsStyle="primary" className="button-to-main">
                            На главную
                        </Button>
                    </Link>

                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Дата создания</th>
                                <th>Менеджер</th>
                                <th>Тип заказа</th>
                                <th>Заказчик</th>
                                <th>Поставщик</th>
                                <th>Дата выполнения</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {ordersList && ordersList.length ? ordersList.map((item, i) => (
                                <OrdersItem key={item.id} item={item} i={i} />
                            )) : null}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => ({
    ordersList: state.ordersList
});

export default connect(mapStateToProps)(Orders);
