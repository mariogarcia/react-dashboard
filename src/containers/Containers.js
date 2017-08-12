import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button,
         Checkbox,
         Nav,
         NavItem } from 'react-bootstrap';
import { Results,
         ActionsRow,
         NavRow,
         ResultRows,
         RowsSelection } from '../components/results';

const FAKE_CONTAINERS = [
    {
        id: '62a64ab78fd1',
        image: 'mgg/nvm-dev',
        created: '9 hours ago',
        status: 'Up 9 hours',
        names: 'nervous_hoover'
    },
    {
        id: '62a64ab78fd1',
        image: 'mgg/nvm-dev',
        created: '9 hours ago',
        status: 'Up 9 hours',
        names: 'nervous_hoover'
    },
    {
        id: '62a64ab78fd1',
        image: 'mgg/nvm-dev',
        created: '9 hours ago',
        status: 'Up 9 hours',
        names: 'nervous_hoover'
    },
    {
        id: '62a64ab78fd1',
        image: 'mgg/nvm-dev',
        created: '9 hours ago',
        status: 'Up 9 hours',
        names: 'nervous_hoover'
    },
    {
        id: '62a64ab78fd1',
        image: 'mgg/nvm-dev',
        created: '9 hours ago',
        status: 'Up 9 hours',
        names: 'nervous_hoover'
    },
    {
        id: '62a64ab78fd1',
        image: 'mgg/nvm-dev',
        created: '9 hours ago',
        status: 'Up 9 hours',
        names: 'nervous_hoover'
    },
    {
        id: '62a64ab78fd1',
        image: 'mgg/nvm-dev',
        created: '9 hours ago',
        status: 'Up 9 hours',
        names: 'nervous_hoover'
    },
    {
        id: '62a64ab78fd1',
        image: 'mgg/nvm-dev',
        created: '9 hours ago',
        status: 'Up 9 hours',
        names: 'nervous_hoover'
    },
];

const ContainerRow = ({key, row}) => {
    return (
    <tr key={key}>
        <td className="bs-checkbox"><Checkbox/></td>
        <td><Link to="/">{row.id}</Link></td>
        <td className="text-center"><Link to="/">{row.image}</Link></td>
        <td className="text-center">{row.created}</td>
        <td className="text-center">{row.status}</td>
        <td className="text-center">{row.names}</td>
    </tr>
    );
}

export const ContainerTable = ({results}) => {
    return (
    <Results>
        <ActionsRow>
            <RowsSelection/>
            <Button bsStyle="danger"
                    key="default3" id="split-button-basic-default">
                <span className="glyphicon glyphicon-stop"></span> Stop
            </Button>
            <Button bsStyle="success"
                    key="default3" id="split-button-basic-default">
                <span className="glyphicon glyphicon-play"></span> Restart
            </Button>
         </ActionsRow>
         <NavRow>
            <Nav bsStyle="tabs" activeKey={1}>
                <NavItem eventKey={1}>Running</NavItem>
                <NavItem eventKey={2}>Stopped</NavItem>
            </Nav>
        </NavRow>
        <ResultRows list={results} rowComponent={ContainerRow}/>
    </Results>
    );
}

const Containers = ({name, onClick}) => {
    return (
    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h1 className="page-header">Containers</h1>
            <ContainerTable results={FAKE_CONTAINERS}/>
    </div>
    );
}

export default connect(
    (state) => ({
        name: "john"
    }),
    (dispatch) => ({
        onClick: () => {
            console.log("FUCKING YEAH!!!!");
        }
    })
)(Containers);
