/**
 * Created by Rayr Lee on 2019/7/2.
 */

import React, { useState, useEffect, useRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import { XPagination, XIcon, XLoading } from 'components';
import './index.scss';

const OrderArea = (props) => {
    const [isUp, setIsUp] = useState(false);
    const [isDown, setIsDown] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

    const upClick = () => {
        setIsUp(!isUp);
        setIsDown(false);
        props.onOrderChange({
            type: isUp ? 'up' : null,
            key: props.keyCode
        })
    }

    const downClick = () => {
        setIsUp(false);
        setIsDown(!isDown);
        props.onOrderChange({
            type: isUp ? 'down' : null,
            key: props.keyCode
        })
    }

    return (
        <div className="order-box">
            <div className={isUp ? `order-up selected` : `order-up`}
                 onClick={upClick.bind(this)}></div>
            <div className={isDown ? `order-down selected` : `order-down`}
                 onClick={downClick.bind(this)}></div>
        </div>
    )
}

const XTable = (props) => {

    const { tableConf, dataList, noBorder, size, noPagination, isLoading } = props;
    const [orderName, setOrderName] = useState('');
    const [orderType, setOrderType] = useState('');

    return (
        <div className="x-table">
            {
                isLoading ? <XLoading type={'table'} /> : null
            }
            <div className={`x-table-wrapper${noBorder ? ' no-border' : ''}${size ? ' xs' : ''}`}>
                <table>
                    <thead>
                        <tr>
                            {
                                tableConf.map((item, index) => {
                                    return (
                                        <th key={index}>
                                            {item.name}
                                            {
                                                item.isOrder &&
                                                <OrderArea
                                                    keyCode={item.key}
                                                    orderName={orderName}
                                                    orderType={orderType}
                                                    onOrderChange={(res) => {
                                                        setOrderName(res.key);
                                                        setOrderType(res.type);
                                                    }} />
                                            }
                                        </th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataList.length > 0 ? dataList.map((itemRow, indexRow) => {
                                    return (
                                        <tr key={indexRow}>
                                            {
                                                tableConf.map((itemCol, indexCol) => {
                                                    return (
                                                        <td key={indexRow + indexCol}>
                                                            {itemRow[itemCol.key]}
                                                        </td>
                                                    )
                                                })
                                            }
                                        </tr>
                                    )
                                }) :
                                <tr>
                                    <td colSpan={props.tableConf.length} className={`table-no-data`}>
                                        <div className="no-data">
                                            {/* <img src={NodataImg} alt="" /> */}
                                            <XIcon type="no-data" />
                                            <div className="no-data-msg">暂无数据</div>
                                        </div>
                                    </td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
            <div className="x-pagination-wrapper">
                {
                    !noPagination &&
                    <Fragment>
                        <span className="total-info">共 {dataList.length} 条</span>
                        <XPagination
                            count={50}
                            pageSize={10}
                            onPageChange={(res) => {
                                console.log('跳转页面：', res);
                            }}
                        />
                    </Fragment>
                }
            </div>
        </div>
    )
}

export default XTable;

XTable.propTypes = {
    noPagination: PropTypes.bool,
};

XTable.defaultProps = {
    noPagination: false,

};