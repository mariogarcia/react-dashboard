import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Checkbox } from 'react-bootstrap';
import { Results,
         ActionsRow,
         ResultRows,
         RowsSelection } from '../components/results';

const FAKE_IMAGES = [
    {
        repository: 'pacotheai-docker-public.bintray.io/pnlp',
        tag: '0.1.1',
        id: 'b18d99723d20',
        created: '6 days ago',
        size: '189MB'
    },
    {
        repository: 'pacotheai-docker-public.bintray.io/www-react',
        tag: '0.23.0',
        id: 'e7f5b8930d71',
        created: '10 days ago',
        size: '89MB'
    }
];

const ImageRow = ({row}) => {
    return (
        <tr key={row.id}>
            <td className="bs-checkbox"><Checkbox/></td>
            <td><Link to="/">{row.repository}</Link></td>
            <td className="text-center">{row.tag}</td>
            <td className="text-center"><Link to="/">{row.id}</Link></td>
            <td className="text-center">{row.created}</td>
            <td className="text-center">{row.size}</td>
        </tr>
    );
}

export const ImageTable = ({results}) => {
    return (
    <Results>
        <ActionsRow>
            <RowsSelection/>
            <Button bsStyle="danger"
                    key="default3" id="split-button-basic-default">
                <span className="glyphicon glyphicon-stop"></span> Delete
            </Button>
        </ActionsRow>
        <ResultRows list={results} rowComponent={ImageRow}/>
    </Results>
    );
}

const Images = ({name, onClick}) => {
    return (
    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h1 className="page-header">Images</h1>
            <ImageTable results={FAKE_IMAGES}/>
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
)(Images);
