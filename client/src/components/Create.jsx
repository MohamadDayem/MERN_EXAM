import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const Create = () => {
    const [ name, setName ] = useState("");
    const [ number, setNumber ] = useState("");
    const [ status, setStatus ] = useState("");
    const navigate = useNavigate();
    const [ errors, setErrors ] = useState([]);

    const handleSubmit = event => {
		event.preventDefault();
        axios.post('http://localhost:8000/api/pro', {
            name: name,
            number: number,
            status: status
        })
        .then((res) => navigate(`/${res.data._id}`))
        .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message);
            }
            setErrors(errorArr);
        });

    };

    return (
		<>
			<Link to={'/'}>home</Link>
			<h2>Sotre finder</h2>
			<form onSubmit={ handleSubmit }>
				{ errors.map((err, index) => <p key={ index }>{ err }</p>) }
				<label>name</label>
					<input
						type="text"
						className="form-control"
						onChange={ event => setName(event.target.value) }
					/>
                <label>number</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={ event => setNumber(event.target.value) }
                />
                <label>status</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={ event => setStatus(event.target.value) }
                    
                />
				<button className={"btn btn-primary"} onClick={() => navigate('/')}>cancel</button>
				<button type="submit" className="btn btn-primary">add</button>
			</form>
		</>
	);
};

export default Create;





