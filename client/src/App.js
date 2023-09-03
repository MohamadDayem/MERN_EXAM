import './App.css';
import { Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import List from './components/List';
import Show from './components/Show';
import Update from './components/Update';

function App() {
	return (
		<>
			<Routes>
				<Route path={'/'} element={<List/>}/>
				<Route path={'/add'} element={ <Create/> }/>
				<Route path={'/:id'} element={<Show/>}/>
				<Route path={'/:id/edit'} element={<Update/>}/>
			</Routes>
		</>
	);
}

export default App;
