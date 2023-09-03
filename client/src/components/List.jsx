import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";


const List = () => {
    const [ pros, setPros ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);
    const navigate = useNavigate
    useEffect(() => {
        axios.get('http://localhost:8000/api/pro')
        .then(res => {
            setPros(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(err));
    }, [ pros ]); 


    const deletepro = id => {
		axios.delete(`http://localhost:8000/api/pro/${id}`)
			.then(() => navigate('/'))
			.catch(err => console.log(err));
	};
    return (
        <>
            <Link to={'/add'}>cant find my store?</Link>
			<table className="table table-striped">
				<thead>
					<tr>
						<th>name</th>
                        <th>number</th>
						<th>status</th>
					</tr>
				</thead>
				<tbody>
					{
						loaded && pros.map((pro, index) => (
							<tr key={ index }>
								<td><Link to={`/${pro._id}`}>{ pro.name }</Link></td>
                                <td>{pro.number}</td>
                                <td>{pro.status}</td>
                                <button className="btn btn-danger" onClick={ () => deletepro(pro._id) }>delete</button>
                                
                                <button className="btn"><Link to={`/${pro._id}/edit`}>edit</Link></button>
							</tr>
						))
                        
					}
				</tbody>
			</table>
        </>
    );
};

export default List;