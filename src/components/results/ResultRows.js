import React from 'react';
import { Table } from 'react-bootstrap';

export const ResultRows = ({list, rowComponent}) => {
    return (
        <div className="row">
            <Table className="stripped table-condensed">
                <tbody>
                    { list.map((item,i) => rowComponent({ key: i, row: item })) }
                </tbody>
            </Table>
        </div>
    );
}
